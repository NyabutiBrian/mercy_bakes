import Image from 'next/image'
import svgTop from '../assets/images/wave-haikei-up.svg'

export default function Footer() {
  return (
    <section>
        {/* SVG WAVE UP */}
        <div>
            <Image src={svgTop} alt="svg background up" priority={true}/>
        </div>

        {/* Footer */}
        <footer className="bg-primary text-white" id="footer">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col">
                <div className="flex justify-center py-4">
                    <h1 className="font-Shrikhand cursor-pointer transition duration-200 transform hover:scale-110">Mercy Bakes</h1>
                </div>

                <div className="relative my-14">
                    <div className="absolute -top-12 right-20 md:right-40 z-30 text-white flex items-center justify-center">
                        <div className="primary-grad-to-br p-8 rounded-full shadow-2xl whitespace-nowrap">Get in Touch</div>
                    </div>
                    <hr className="h-0.5 w-full absolute top-1/2 transform -translate-y-1/2" />
                </div>

                <div className="grid lg:grid-cols-3 gap-4 py-4">
                    {/* Left */}
                    <div className="lg:col-span-1">
                        <div className="flex flex-col items-center justify-center text-white">
                            <div className="flex flex-col justify-center items-center py-2">
                                <p className="font-Shrikhand">Working Hours</p>
                                <p>Monday - Saturday : 8am - 8pm</p>
                                <p>Sunday : Closed</p>
                            </div>

                            <div className="flex flex-col justify-center items-center py-2">
                                <p className="font-Shrikhand">Location</p>
                                <p>Thika Town</p>
                            </div>

                            <div className="flex flex-col justify-center items-center py-2">
                                <p className="font-Shrikhand">Local Time</p>
                                <div id="localTime" className="flex space-x-4">
                                    <p>EAT</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center */}
                    <div className="lg:col-span-1">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <p className="font-Shrikhand py-2">Get In Touch</p>
                            <div className="py-4 primary-grad-to-br px-8 border rounded-full text-xs md:text-base">
                                <p>momanyiturner@gmail.com</p>
                            </div>
                            <button className="py-4 primary-grad-to-br px-8 border rounded-full text-xs md:text-base flex justify-center items-center space-x-2 transition duration-200 transform hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill='#FEFEFE' viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                                <p>(+254) 700 013 897</p>
                            </button>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="lg:col-span-1">
                        <div className="flex flex-col items-center justify-center text-white">
                            <p className="font-Shrikhand py-2">SOCIALS</p>
                            <ul className="text-sm md:text-md flex space-x-4">
                                <li><a href="#" target='Instagram'>Instagram</a></li>
                                <li><a href="#" target='TikTok'>TikTok</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* copyright */}
            <div className="py-4">
                <div className="container flex items-center justify-center">
                    <p className="text-white text-sm">&copy; <span className="font-Shrikhand">MINTY</span> - All Right Reserved</p>
                </div>
            </div>
        </footer>
    </section>
  )
}
