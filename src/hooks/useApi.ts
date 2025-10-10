import { useState, useEffect } from 'react';
import type { ApiError } from '../types/api';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

interface UseApiOptions {
  immediate?: boolean;
}

export function useApi<T>(
  apiFunction: () => Promise<T>,
  options: UseApiOptions = { immediate: true }
) {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: options.immediate ?? true,
    error: null,
  });

  const execute = async () => {
    setState({ data: null, loading: true, error: null });
    
    try {
      const result = await apiFunction();
      setState({ data: result, loading: false, error: null });
      return result;
    } catch (err: unknown) {
      const error: ApiError = {
        message: err instanceof Error ? err.message : 'Erro desconhecido',
        error: err instanceof Error ? err.name : undefined,
        statusCode: typeof err === 'object' && err !== null && 'status' in err 
          ? (err as { status: number }).status 
          : undefined,
      };
      setState({ data: null, loading: false, error });
      throw error;
    }
  };

  const reset = () => {
    setState({ data: null, loading: false, error: null });
  };

  useEffect(() => {
    if (options.immediate) {
      execute();
    }
  }, []);

  return {
    ...state,
    execute,
    reset,
    refetch: execute,
  };
}

export function useApiMultiple<T extends unknown[]>(
  apiFunctions: Array<() => Promise<unknown>>,
  options: UseApiOptions = { immediate: true }
) {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: options.immediate ?? true,
    error: null,
  });

  const execute = async () => {
    setState({ data: null, loading: true, error: null });
    
    try {
      const results = await Promise.all(apiFunctions.map(fn => fn()));
      setState({ data: results as T, loading: false, error: null });
      return results;
    } catch (err: unknown) {
      const error: ApiError = {
        message: err instanceof Error ? err.message : 'Erro desconhecido',
        error: err instanceof Error ? err.name : undefined,
        statusCode: typeof err === 'object' && err !== null && 'status' in err 
          ? (err as { status: number }).status 
          : undefined,
      };
      setState({ data: null, loading: false, error });
      throw error;
    }
  };

  useEffect(() => {
    if (options.immediate) {
      execute();
    }
  }, []);

  return {
    ...state,
    execute,
    refetch: execute,
  };
}
