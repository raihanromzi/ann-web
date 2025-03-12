"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: faInstagram,
      url: "https://instagram.com/aan.sbmitb",
      name: "Instagram",
    },
    {
      icon: faLinkedin,
      url: "https://linkedin.com/company/sbm-itb",
      name: "LinkedIn",
    },
    { icon: faYoutube, url: "https://youtube.com/sbm-itb", name: "YouTube" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Past Events", href: "/past-events" },
    { name: "Registration", href: "/register" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and description */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Anugerah Avirama Nawasena Logo"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/80 mb-6">
              Menghargai Inovasi Berkelanjutan untuk Masa Depan yang Lebih
              Hijau.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
                  whileHover={{ y: -3 }}
                  aria-label={link.name}
                >
                  <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact information */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 relative pb-2 inline-block">
              Kontak
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-secondary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 text-secondary mr-3">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                </div>
                <div>
                  <a
                    href="mailto:avirama.nawasena@itb.ac.id"
                    className="hover:text-secondary transition-colors duration-200"
                  >
                    avirama.nawasena@itb.ac.id
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 text-secondary mr-3">
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                </div>
                <div>
                  <a
                    href="tel:+6281228995982"
                    className="hover:text-secondary transition-colors duration-200"
                  >
                    0812-2899-5982
                  </a>
                  <p className="text-sm text-white/60">(Agustin Anandia)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 relative pb-2 inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-secondary"></span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-secondary transition-colors duration-200 inline-block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 relative pb-2 inline-block">
              Subscribe to Newsletter
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-secondary"></span>
            </h3>
            <p className="text-white/80 mb-4">
              Dapatkan informasi terbaru tentang Anugerah Avirama Nawasena
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 text-white border-0 rounded-md px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="bg-secondary text-primary font-semibold rounded-md px-4 py-3 hover:bg-secondary-light transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Anugerah Avirama Nawasena. All rights reserved.
            Developed by School of Business and Management ITB.
          </p>
        </div>
      </div>
    </footer>
  );
}
