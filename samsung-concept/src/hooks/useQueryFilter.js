import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

/**
 * Keeps a single filter value in the URL (?f=…) so filtered views are linkable.
 * Unknown values fall back to `fallback`.
 */
export default function useQueryFilter(valid, { key = 'f', fallback = 'all' } = {}) {
  const [params, setParams] = useSearchParams();
  const raw = params.get(key);
  const value = raw && valid.includes(raw) ? raw : fallback;

  const setValue = useCallback(
    (next) => {
      setParams(
        (prev) => {
          const out = new URLSearchParams(prev);
          if (!next || next === fallback) out.delete(key);
          else out.set(key, next);
          return out;
        },
        { replace: true, preventScrollReset: true }
      );
    },
    [setParams, key, fallback]
  );

  return [value, setValue];
}
