import { useEffect } from 'react';

export const usePrefetchImages = (imagePaths: string[]) => {
  useEffect(() => {
    const prefetchImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    const prefetchAll = async () => {
      try {
        await Promise.all(imagePaths.map(path => prefetchImage(path)));
        console.log('All images prefetched successfully');
      } catch (error) {
        console.error('Error prefetching images:', error);
      }
    };

    if (typeof window !== 'undefined') {
      // Use requestIdleCallback for better performance
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          prefetchAll();
        });
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(prefetchAll, 1000);
      }
    }
  }, [imagePaths]);
}; 