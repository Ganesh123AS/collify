import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { homepageApi } from '../api/home-page-api';
import { HOMEPAGE_KEYS } from '../constants/queryKeys';
import { normalizeMutationState, queryClient } from '../../../libs/react-query';

export const useUpdateBanner = (options?: {
  onSuccess?: () => void;
  onError?: () => void;
}) => {
  const mutation = useMutation({
    mutationKey: ['homepage-banner-update'],
    mutationFn: ({ id, payload }: { id: string; payload: any }) =>
      homepageApi.updateBanner(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [HOMEPAGE_KEYS.banners] });
      toast.success('Banner updated!');
      options?.onSuccess?.();
    },
    onError: () => {
      toast.error('Failed to update banner.');
      options?.onError?.();
    },
  });

  return normalizeMutationState(mutation);
};