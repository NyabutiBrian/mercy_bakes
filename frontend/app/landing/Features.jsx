import Image from "next/image";

// images
import deliveryVan from "../assets/images/icons/delivery-van.svg";
import moneyReturn from "../assets/images/icons/money-back.svg";
import extraServices from "../assets/images/icons/service-hours.svg";

export default function Features() {
  return (
    <section className="max-w-screen-xl mx-auto">
        <div className="py-4 mx-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto justify-center text-darky">
                <div className="rounded-3xl border-primary border-t-2 lg:border-t-0 lg:border-l-2 px-3 py-6 flex justify-center items-center gap-5 shadow-lg transition duration-200 transform hover:scale-105">
                    <Image src={deliveryVan} title="SVG Features Icons" alt="Delivery van" priority= "true" className="object-contain"/>
                    <div>
                        <p className="font-medium capitalize text-lg">Fast Delivery</p>
                        <p className="text-gray-500 text-sm">Order over Ksh 1,000</p>
                    </div>
                </div>

                <div className="rounded-3xl border-primary border-t-2 lg:border-t-0 lg:border-l-2 px-3 py-6 flex justify-center items-center gap-5 shadow-lg transition duration-200 transform hover:scale-105">
                <Image src={moneyReturn} title="SVG Features Icons" alt="Delivery van" priority= "true" className="object-contain"/>
                    <div>
                        <p className="font-medium capitalize text-lg">Money Returns</p>
                        <p className="text-gray-500 text-sm">24 hours money returns</p>
                    </div>
                </div>

                <div className="rounded-3xl border-primary border-t-2 lg:border-t-0 lg:border-l-2 px-3 py-6 flex justify-center items-center gap-5 shadow-lg transition duration-200 transform hover:scale-105">
                <Image src={extraServices} title="SVG Features Icons" alt="Delivery van" priority= "true" className="object-contain"/>
                    <div>
                        <p className="font-medium capitalize text-lg">Extra Services</p>
                        <p className="text-gray-500 text-sm">Customer support</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
