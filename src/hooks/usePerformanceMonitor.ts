
import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // Handle different types of performance entries
        if ('value' in entry && typeof entry.value === 'number') {
          // For entries that have a value property (like LCP, FID, CLS)
          console.log(`${entry.name}: ${entry.value}ms`);
        } else if ('duration' in entry && typeof entry.duration === 'number') {
          // For entries that have a duration property (like navigation, paint)
          console.log(`${entry.name}: ${entry.duration}ms`);
        } else {
          // For other entries, just log the name and start time
          console.log(`${entry.name}: ${entry.startTime}ms`);
        }
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
