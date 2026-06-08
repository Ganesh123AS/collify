import { useQuery } from '@tanstack/react-query';
import { HOMEPAGE_KEYS } from '../constants/queryKeys';
import { homepageApi } from '../api/home-page-api';
import type { UseGetBannersParams } from '../types';

export const useGetBanners = ({ location, q }: UseGetBannersParams) => {
  return useQuery({
    queryKey: [HOMEPAGE_KEYS.banners, location, q],  // ✅ params in key so it refetches when they change
    queryFn: () => homepageApi.getBanners(location, q),
    enabled: !!location,  // ✅ only runs when location exists
  });
};