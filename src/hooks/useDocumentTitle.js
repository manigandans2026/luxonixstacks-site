import { useEffect } from 'react';

/**
 * useDocumentTitle: dynamically updates document.title, meta description, and Open Graph tags for SEO
 */
export function useDocumentTitle(title, description = '') {
  useEffect(() => {
    const prevTitle = document.title;
    const formattedTitle = title
      ? `${title} | Luxonixstacks`
      : 'Luxonixstacks - Transform Ideas Into Digital Reality';

    document.title = formattedTitle;

    // Update meta title
    let metaTitle = document.querySelector('meta[name="title"]');
    if (metaTitle) {
      metaTitle.setAttribute('content', formattedTitle);
    }

    // Update og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', formattedTitle);
    }

    // Update meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
    }

    return () => {
      document.title = prevTitle;
    };
  }, [title, description]);
}

export default useDocumentTitle;
