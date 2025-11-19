import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  cacheHitRate: number;
  cacheSize: number;
  memoryUsage: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    cacheHitRate: 0,
    cacheSize: 0,
    memoryUsage: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (import.meta.env.DEV) {
      setIsVisible(true);
    }

    // Measure initial load time
    const loadTime = performance.now();

    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const cacheSize = localStorage.getItem('cacheSize') || '0';

      setMetrics({
        loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : loadTime,
        cacheHitRate: calculateCacheHitRate(),
        cacheSize: parseInt(cacheSize),
        memoryUsage: calculateMemoryUsage(),
      });
    };

    const interval = setInterval(updateMetrics, 5000);
    updateMetrics();

    return () => clearInterval(interval);
  }, []);

  const calculateCacheHitRate = (): number => {
    try {
      let cacheHits = 0;
      let totalRequests = 0;

      // Simple calculation based on localStorage cache entries
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('cache_')) {
          cacheHits++;
        }
        totalRequests++;
      });

      return totalRequests > 0 ? (cacheHits / totalRequests) * 100 : 0;
    } catch {
      return 0;
    }
  };

  const calculateMemoryUsage = (): number => {
    try {
      if ('memory' in performance) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const memory = (performance as any).memory;
        return memory ? memory.usedJSHeapSize / 1024 / 1024 : 0; // MB
      }
      return 0;
    } catch {
      return 0;
    }
  };

  const clearCache = () => {
    localStorage.clear();
    window.location.reload();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs p-3 rounded-lg shadow-lg z-50 max-w-xs">
      <div className="font-mono space-y-1">
        <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
        <div>Cache: {metrics.cacheHitRate.toFixed(1)}%</div>
        <div>Size: {(metrics.cacheSize / 1024).toFixed(1)}KB</div>
        <div>Memory: {metrics.memoryUsage.toFixed(1)}MB</div>
        <button
          onClick={clearCache}
          className="mt-2 bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-xs"
        >
          Clear Cache
        </button>
      </div>
    </div>
  );
};

export default PerformanceMonitor;