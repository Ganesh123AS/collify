import { httpClient } from "../../../libs/http";
import type { Banner, BannerListResponse, BannerQuery, CreateBannerPayload, UpdateBannerPayload } from "../types";

export const homepageApi = {
 getBanners: (location: string, q?: BannerQuery) =>
    httpClient.get<BannerListResponse>('/v1/banners/', {
      params: { location, ...q },
    }),

  getBannerById: (id: string) =>
    httpClient.get<Banner>(`/v1/banners/${id}/`),

  createBanner: (payload: CreateBannerPayload) =>
    httpClient.post<Banner>('/v1/banners/', payload),

  updateBanner: (id: string, payload: UpdateBannerPayload) =>
    httpClient.put<Banner>(`/v1/banners/${id}/`, payload),

  deleteBanner: (id: string) =>
    httpClient.delete(`/v1/banners/${id}/`),
};