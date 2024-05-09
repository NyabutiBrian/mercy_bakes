// fonts
import { Poppins } from "next/font/google";
import { Shrikhand } from "next/font/google";
import "./globals.css";

// components
import ContactTop from "./components/ContactTop";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: '--font-poppins'
});

const shrikhand = Shrikhand({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-shrikhand'
});

export const metadata = {
  title: "Mercy Bakes | Your Go-To Baker for Freshly Baked Treats",
  description: "Delightful Bites, freshly baked donuts, cupcakes, cakes, and more. Order online for a delightful experience delivered to your doorstep.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${shrikhand.variable}`}>
        <ContactTop />
        <TopNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
