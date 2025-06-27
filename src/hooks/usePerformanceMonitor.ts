
import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log(`${entry.name}: ${entry.value}ms`);
      });
    });

    // Observe paint and navigation timings
    observer.observe({ entryTypes: ['paint', 'navigation', 'largest-contentful-paint'] });

    // Preload critical resources
    const preloadImage = (src: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    };

    // Preload hero image
    preloadImage('https://4kwallpapers.com/images/walls/thumbs_3t/15351.jpg');

    return () => {
      observer.disconnect();
    };
  }, []);
};
