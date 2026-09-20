import { useEffect } from 'react';

const SUFFIX = 'Samsung Website Redesign Concept';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${SUFFIX}` : SUFFIX;
  }, [title]);
}
