// features/Homepage/components/BannerList.tsx
import { useGetBanners } from '../hooks/useGetBanners';
import { useCreateBanner } from '../hooks/useCreateBanner';
import { consQuery } from '../../../constants/query';

const BannerList = () => {
  const { data, isLoading } = useGetBanners({ location: 'login', q: consQuery });
  console.log("🚀 ~ BannerList ~ data:", data)

  const { mutate: createBanner, isPending: isCreating } = useCreateBanner();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <button
        onClick={() => createBanner({ title: 'New Banner', image: 'url' })}
        disabled={isCreating}
      >
        Add Banner
      </button>

      {data?.results?.map((banner) => (
        <div key={banner.id}>
          <span>{banner.title}</span>
<img src={banner.banner} alt="image" />
        </div>
      ))}
    </div>
  );
};

export default BannerList;