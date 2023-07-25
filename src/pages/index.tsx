import Layout from "@/components/layout";
import BannerSlider from "@/components/bannerSlider";
import RestaurantMenu from "@/components/MainPage/RestaurantMenu";
import About from "@/components/MainPage/About";
import Branches from "@/components/MainPage/Branches";

const Home = () => {
  return (
    <>
      <BannerSlider />
      <RestaurantMenu />
      <About />
      <Branches />
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
