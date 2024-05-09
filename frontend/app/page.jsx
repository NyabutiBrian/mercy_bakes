// landing
import About from "./landing/About";
import CarouselSlider from "./landing/CarouselSlider";
import Features from "./landing/Features";
import ProductCategories from "./landing/ProductCategories";
import ProductList from "./landing/ProductList";

export default function Home() {
  return (
    <>
      <CarouselSlider />
      <Features />
      <ProductCategories />
      <ProductList />
      <About />
    </>
  );
}
