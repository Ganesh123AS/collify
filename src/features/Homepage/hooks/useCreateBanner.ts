import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { homepageApi } from '../api/home-page-api';
import { HOMEPAGE_KEYS } from '../constants/queryKeys';
import { queryClient } from '../../../libs/react-query/queryClient';
import { normalizeMutationState } from '../../../libs/react-query';

export const useCreateBanner = (options?: {
  onSuccess?: () => void;
  onError?: () => void;
}) => {
  const mutation = useMutation({
    mutationKey: ['homepage-banner-create'],
    mutationFn: (payload: any) =>
      homepageApi.createBanner(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [HOMEPAGE_KEYS.banners] });
      toast.success('Banner created successfully!');
      options?.onSuccess?.();
    },
    onError: () => {
      toast.error('Failed to create banner.');
      options?.onError?.();
    },
  });

  return normalizeMutationState(mutation);
};