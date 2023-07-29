import MainLayout from "@/common/layout/MainLayout";
import CarouselBanner from "@/common/components/CarouselBanner";
import RestaurantMenu from "@/modules/HomePage/components/ResturantMenu";
import About from "@/modules/HomePage/components/About";
import Branches from "@/modules/HomePage/components/Branches";

const Home = () => {
  return (
    <>
      <CarouselBanner />
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
