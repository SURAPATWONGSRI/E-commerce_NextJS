import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/HomeCategories";
import ProductGrid from "@/components/ProductGrid";
import ShopByBrands from "@/components/ShopByBrands";
import { getCategories } from "@/sanity/lib/queries";

const Home = async () => {
  const categories = await getCategories(6);
  console.log("🚀 ~ Home ~ categories:", categories);
  return (
    <Container className=" bg-shop-light-pink">
      <HomeBanner />
      <ProductGrid />
      <HomeCategories categories={categories} />
      <ShopByBrands />
    </Container>
  );
};

export default Home;
