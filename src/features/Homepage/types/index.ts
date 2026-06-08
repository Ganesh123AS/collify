// Base Banner shape — matches what your API returns
export interface Banner {
    id: string;
    title: string;
    image: string;
    link?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

// POST — creating a new banner
export interface CreateBannerPayload {
    title: string;
    image: string;
    link?: string;
    isActive?: boolean;
}

// PUT — updating an existing banner (all fields optional)
export interface UpdateBannerPayload {
    title?: string;
    image?: string;
    link?: string;
    isActive?: boolean;
}

// Query params shape
export interface BannerQuery {
    order?: string;
    order_by?: string;
    search?: string;
    offset?: number;
    limit?: number;
}

// Hook params
export interface UseGetBannersParams {
    location: string;
    q?: BannerQuery;
}