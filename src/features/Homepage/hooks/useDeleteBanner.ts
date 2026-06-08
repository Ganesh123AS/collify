import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { homepageApi } from '../api/home-page-api';
import { normalizeMutationState, queryClient } from '../../../libs/react-query';
import { HOMEPAGE_KEYS } from '../constants/queryKeys';

export const useDeleteBanner = (options?: {
  onSuccess?: () => void;
  onError?: () => void;
}) => {
  const mutation = useMutation({
    mutationKey: ['homepage-banner-delete'],
    mutationFn: (id: string) => homepageApi.deleteBanner(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [HOMEPAGE_KEYS.banners] });
      toast.success('Banner deleted.');
      options?.onSuccess?.();
    },
    onError: () => {
      toast.error('Failed to delete banner.');
      options?.onError?.();
    },
  });

  return normalizeMutationState(mutation);
};