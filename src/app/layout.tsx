'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Hamburger clicked");  // Add this line to debug
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {/* Navbar */}
        <header className="bg-cream shadow-lg fixed w-full z-50 h-20">
          <div className="container mx-auto px-4 h-full flex items-center justify-between">
            {/* Logo */}
            <div className="h-full flex items-center">
              <Link href="/">
                <Image
                  src="/images/logo1.png"
                  alt="Kia Collection Logo"
                  width={120}
                  height={50}
                  className="object-contain max-h-full"
                  priority
                />
              </Link>
            </div>

            {/* Navigation Links (Desktop) */}
            <nav className="hidden md:flex space-x-4 text-lg font-semibold">
              <Link href="/" className="text-white hover:text-creammuda transition py-1">
                Home
              </Link>
              <Link href="#our-products" className="text-white hover:text-creammuda transition py-1">
                Our Product
              </Link>
              <Link href="#about" className="text-white hover:text-creammuda transition py-1">
                About
              </Link>
              <Link href="#contact" className="text-white hover:text-creammuda transition py-1">
                Contact
              </Link>
              <Link
                href="https://vt.tiktok.com/ZSjBgCGR9/?page=Mall"
                target="_blank"
                className="bg-white text-cream py-2 px-3 rounded transition hover:bg-creammuda text-sm"
              >
                BUY
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative z-50">
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none border-4 border-creammuda">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Links */}
          {isMenuOpen && (
            <nav className="md:hidden bg-creammuda shadow-lg absolute top-full left-0 w-full z-50">
              <ul className="flex flex-col p-4 space-y-3 text-base font-semibold">
                <li>
                  <Link href="/" className="text-white hover:text-blue-600 transition py-1" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#our-products" className="text-white hover:text-blue-600 transition py-1" onClick={closeMenu}>
                    Our Product
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-white hover:text-blue-600 transition py-1" onClick={closeMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white hover:text-blue-600 transition py-1" onClick={closeMenu}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://vt.tiktok.com/ZSjBgCGR9/?page=Mall"
                    target="_blank"
                    className="bg-cream text-white py-2 px-4 rounded transition hover:bg-blue-700 text-sm"
                  >
                    BUY
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </header>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-cream text-gray-200">
          <div className="container mx-auto px-4 py-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              {/* About Us */}
              <div>
                <h3 id="about" className="text-xl font-semibold mb-4">About Us</h3>
                <p className="text-sm text-white">
                  Kami adalah toko online yang menjual produk berkualitas melalui TikTok Shop. Dengan konten kreatif dan layanan terbaik, kami hadir untuk memberikan pengalaman belanja yang seru, mudah, dan terpercaya.
                </p>
                <p className="text-sm text-white mt-3">
                  Temukan kami di TikTok Shop dan nikmati penawaran terbaik!
                </p>
              </div>

              {/* Contact Info */}
              <div>
                <h3 id="contact" className="text-xl font-semibold mb-4">Contact Us</h3>
                <ul className="text-sm text-white space-y-2">
                  <li>Email: hizkiacollection@gmail.com</li>
                  <li>Tiktok & Instagram: kia.collection9</li>
                  <li>Address: Jl. H. Hasan No.22, RT.5/RW.2, Baru, Kec. Ps. Rebo, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13780</li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="text-sm text-white space-y-2">
                  <li>
                    <Link href="/" className="text-white hover:text-blue-600 transition py-1" onClick={closeMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#our-products" className="text-white hover:text-blue-600 transition py-1" onClick={closeMenu}>
                      Our Product
                    </Link>
                  </li>
                  <li>
                    <Link href="#about" className="text-white hover:text-blue-600 transition py-1" onClick={closeMenu}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-white hover:text-blue-600 transition py-1" onClick={closeMenu}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://vt.tiktok.com/ZSjBgCGR9/?page=Mall"
                      target="_blank"
                      className="bg-creammuda text-white py-2 px-4 rounded transition hover:bg-blue-700 text-sm"
                    >
                      BUY
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white mt-8 pt-4 text-center text-white">
              &copy; 2024 Kia&apos;s Collection. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
