interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number; // Time to live in milliseconds
}

class CacheManager {
  private cache: Map<string, CacheEntry<any>> = new Map();
  private readonly DEFAULT_TTL = 30 * 60 * 1000; // 30 minutes

  /**
   * Store data in cache with optional TTL
   */
  set<T>(key: string, data: T, ttl?: number): void {
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      ttl: ttl || this.DEFAULT_TTL,
    };
    this.cache.set(key, entry);

    // Save to localStorage for persistence
    try {
      localStorage.setItem(`cache_${key}`, JSON.stringify(entry));
    } catch (error) {
      console.warn('Failed to save cache to localStorage:', error);
    }
  }

  /**
   * Retrieve data from cache
   */
  get<T>(key: string): T | null {
    // Try memory cache first
    let entry = this.cache.get(key);

    // If not in memory, try localStorage
    if (!entry) {
      try {
        const stored = localStorage.getItem(`cache_${key}`);
        if (stored) {
          const parsedEntry = JSON.parse(stored) as CacheEntry<T>;
          // Restore to memory cache
          this.cache.set(key, parsedEntry);
          entry = parsedEntry;
        }
      } catch (error) {
        console.warn('Failed to retrieve cache from localStorage:', error);
      }
    }

    // Check if cache entry exists and is not expired
    if (entry && Date.now() - entry.timestamp < entry.ttl) {
      return entry.data;
    }

    // Cache miss or expired, remove it
    this.delete(key);
    return null;
  }

  /**
   * Remove specific cache entry
   */
  delete(key: string): void {
    this.cache.delete(key);
    try {
      localStorage.removeItem(`cache_${key}`);
    } catch (error) {
      console.warn('Failed to remove cache from localStorage:', error);
    }
  }

  /**
   * Clear all cache
   */
  clear(): void {
    this.cache.clear();
    try {
      // Clear all localStorage items starting with 'cache_'
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('cache_')) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn('Failed to clear localStorage cache:', error);
    }
  }

  /**
   * Check if cache entry exists and is valid
   */
  has(key: string): boolean {
    const entry = this.cache.get(key) || this.getFromLocalStorage(key);
    if (!entry) return false;

    return Date.now() - entry.timestamp < entry.ttl;
  }

  /**
   * Get cache size in bytes (approximate)
   */
  getCacheSize(): number {
    try {
      let size = 0;
      for (const key of this.cache.keys()) {
        const entry = this.cache.get(key);
        if (entry) {
          size += JSON.stringify(entry).length;
        }
      }
      return size;
    } catch (error) {
      console.warn('Failed to calculate cache size:', error);
      return 0;
    }
  }

  /**
   * Clean up expired entries
   */
  cleanup(): void {
    const now = Date.now();

    // Clean memory cache
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp >= entry.ttl) {
        this.cache.delete(key);
      }
    }

    // Clean localStorage
    try {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('cache_')) {
          try {
            const entry = JSON.parse(localStorage.getItem(key) || '');
            if (now - entry.timestamp >= entry.ttl) {
              localStorage.removeItem(key);
            }
          } catch {
            localStorage.removeItem(key);
          }
        }
      });
    } catch (error) {
      console.warn('Failed to cleanup localStorage cache:', error);
    }
  }

  private getFromLocalStorage(key: string): CacheEntry<any> | null {
    try {
      const stored = localStorage.getItem(`cache_${key}`);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }

  /**
   * Preload critical data
   */
  async preloadCriticalData(): Promise<void> {
    // Preload user preferences, theme, etc.
    const criticalKeys = [
      'user_preferences',
      'theme_settings',
      'navigation_history',
    ];

    criticalKeys.forEach(key => {
      if (!this.has(key)) {
        // Set default values for critical data
        switch (key) {
          case 'user_preferences':
            this.set(key, {
              language: 'es',
              currency: 'ARS',
              notifications: true,
            }, 24 * 60 * 60 * 1000); // 24 hours
            break;
          case 'theme_settings':
            this.set(key, {
              mode: 'light',
              animations: true,
              reducedMotion: false,
            }, 7 * 24 * 60 * 60 * 1000); // 7 days
            break;
          case 'navigation_history':
            this.set(key, [], 60 * 60 * 1000); // 1 hour
            break;
        }
      }
    });
  }
}

// Create singleton instance
export const cacheManager = new CacheManager();

// Cleanup expired entries every 10 minutes
setInterval(() => {
  cacheManager.cleanup();
}, 10 * 60 * 1000);

export default cacheManager;