// libs/react-query/normalizeMutationState.ts
import type { UseMutationResult } from '@tanstack/react-query';

export const normalizeMutationState = <TData, TError, TVariables>(
  mutation: UseMutationResult<TData, TError, TVariables>
) => {
  return {
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isIdle: mutation.isIdle,
    data: mutation.data,
    error: mutation.error,
    reset: mutation.reset,
  };
};