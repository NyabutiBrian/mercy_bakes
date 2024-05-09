import Image from 'next/image'

// images
import bonappetit from "../assets/images//bonappetit.png"

export default function About() {
  return (
    <section className="max-w-screen-xl mx-auto scroll-m-16" id="about">
        <div className="py-8 mx-4">
            <div className="grid md:grid-cols-3">
                <div className="md:col-span-1 flex items-center justify-center">
                    <Image src={bonappetit} alt="bonappetite" className="w-2/4 sm:w-1/4 md:w-3/4 xl:w-2/4" />
                </div>
                <div className="md:col-span-2 md:py-8 md:px-16 px-2 text-justify">
                    <p className="text-darky">
                        Welcome to a world of sweet, fruity delight with our exquisite Cakes, Donuts and Cupcakes.
                        Experience the perfect blend of luscious fruits, moist cake layers, and decadent 
                        frosting that will transport your taste buds to a heavenly realm. <br />
                        Discover a symphony of flavors in every bite, and order now to make 
                        your moments extra special. <br /><br />
        
                        At <span className="text-primary font-Shrikhand">Mercy Bakes</span>, we bake happiness into every slice.
                        Join us in celebrating the enchanting world of blueberry cakes where every moment is a celebration. <br /><br />
                        
                        <span className="text-primary font-Shrikhand text-end">-- Savor the moment, taste the magic--</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
