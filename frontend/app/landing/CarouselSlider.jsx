import { Carousel } from "flowbite-react";
import Image from "next/image";

// images
import xlBlueberry from "../assets/images/cakes/XL/blueberryXL.png";
import xlchocolateXL from "../assets/images/cakes/XL/chocolateXL.png";
import xlredvelvetXL from "../assets/images/cakes/XL/redvelvetXL.png";
import xlstrawberryXL from "../assets/images/cakes/XL/strawberryXL.png";
import xlvanillaXL from "../assets/images/cakes/XL/vanillaXL.png";

export default function CarouselSlider() {
  return (
    <div className="sm:max-w-screen-xl mx-auto my-2 lg:my-8 h-56 sm:h-96">
      <Carousel>
        <Image src={xlBlueberry} alt="mercy cakes" priority= "true"/>
        <Image src={xlchocolateXL} alt="mercy cakes" priority= "true"/>
        <Image src={xlredvelvetXL} alt="mercy cakes" priority= "true"/>
        <Image src={xlstrawberryXL} alt="mercy cakes" priority= "true"/>
        <Image src={xlvanillaXL} alt="mercy cakes" priority= "true"/>
      </Carousel>
    </div>
  )
}
