// libs/react-query/index.ts  ← add useQuery export here
export { useMutation } from '@tanstack/react-query';
export { useQuery } from '@tanstack/react-query';   // ← just re-export
export { normalizeMutationState } from './normalizeMutationState';
export { queryClient } from './queryClient';