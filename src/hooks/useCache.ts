import { useState, useEffect, useCallback } from 'react';
import { cacheManager } from '../utils/cacheManager';

interface UseCacheOptions<T> {
  key: string;
  fetcher: () => Promise<T>;
  ttl?: number;
  dependencies?: any[];
  enabled?: boolean;
}

interface UseCacheResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
  invalidate: () => void;
}

export function useCache<T>({
  key,
  fetcher,
  ttl,
  dependencies = [],
  enabled = true,
}: UseCacheOptions<T>): UseCacheResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (!enabled) return;

    setLoading(true);
    setError(null);

    try {
      // Try to get data from cache first
      const cachedData = cacheManager.get<T>(key);

      if (cachedData) {
        setData(cachedData);
        setLoading(false);
        return;
      }

      // If no cached data, fetch from source
      const freshData = await fetcher();
      cacheManager.set(key, freshData, ttl);
      setData(freshData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setLoading(false);
    }
  }, [key, fetcher, ttl, enabled]);

  const refetch = useCallback(async () => {
    if (!enabled) return;

    // Force fetch new data
    cacheManager.delete(key);
    await fetchData();
  }, [key, fetchData, enabled]);

  const invalidate = useCallback(() => {
    cacheManager.delete(key);
    setData(null);
  }, [key]);

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [fetchData, enabled, ...dependencies]);

  return {
    data,
    loading,
    error,
    refetch,
    invalidate,
  };
}

// Hook for caching static data (like images, configuration)
export function useStaticCache<T>(key: string, data: T, ttl?: number): T | null {
  const [cachedData, setCachedData] = useState<T | null>(null);

  useEffect(() => {
    // Try to get from cache first
    const existing = cacheManager.get<T>(key);
    if (existing) {
      setCachedData(existing);
    } else {
      // Cache the provided data
      cacheManager.set(key, data, ttl);
      setCachedData(data);
    }
  }, [key, data, ttl]);

  return cachedData;
}

// Hook for user preferences
export function useUserPreferences<T>(key: string, defaultValue: T): [T, (value: T) => void] {
  const [preferences, setPreferences] = useState<T>(() => {
    const cached = cacheManager.get<T>(`user_pref_${key}`);
    return cached || defaultValue;
  });

  const updatePreferences = useCallback((newValue: T) => {
    cacheManager.set(`user_pref_${key}`, newValue, 7 * 24 * 60 * 60 * 1000); // 7 days
    setPreferences(newValue);
  }, [key]);

  return [preferences, updatePreferences];
}

// Hook for navigation history
export function useNavigationHistory(): [string[], (page: string) => void] {
  const [history, setHistory] = useState<string[]>(() => {
    const cached = cacheManager.get<string[]>('navigation_history');
    return cached || [];
  });

  const addToHistory = useCallback((page: string) => {
    const newHistory = [...history, page].slice(-10); // Keep only last 10 pages
    cacheManager.set('navigation_history', newHistory, 60 * 60 * 1000); // 1 hour
    setHistory(newHistory);
  }, [history]);

  return [history, addToHistory];
}

export default useCache;