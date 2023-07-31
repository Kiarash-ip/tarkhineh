import MainLayout from "@/common/layout/MainLayout";
import CarouselBanner from "@/common/components/CarouselBanner";
import RestaurantMenu from "@/modules/HomePage/components/ResturantMenu";
import About from "@/modules/HomePage/components/About";
import Branches from "@/modules/HomePage/components/Branches";
import SearchInput from "@/common/components/SearchInput";

const Home = () => {
  return (
    <>
      <CarouselBanner />
      <div className="container mx-auto mb-6 mt-4 md:hidden">
        <SearchInput />
      </div>
      <RestaurantMenu />
      <About />
      <Branches />
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
