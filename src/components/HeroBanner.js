"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HeroBannerImage from "../../public/hero-bg.jpg";

export default function HeroBanner() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        {/* Hero Image */}
        <Image
          src={HeroBannerImage}
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Anugerah Avirama Nawasena 2024
          </motion.h1>

          <motion.h2
            className="text-xl md:text-3xl font-medium text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Menghargai Inovasi Berkelanjutan untuk
            <span className="text-secondary font-semibold">
              {" "}
              Masa Depan yang Lebih Hijau
            </span>{" "}
            🌏 🪴
          </motion.h2>

          <motion.p
            className="text-lg text-white/90 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Inovasi yang mengedepankan keberlanjutan layak mendapatkan
            pengakuan. Bergabunglah dengan kami untuk merayakan solusi dan ide
            yang mendukung lingkungan, sosial, dan tata kelola yang lebih baik.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            <Link href="/register" className="btn btn-secondary">
              Daftarkan Inovasi Anda
            </Link>
            <Link
              href="/about"
              className="btn btn-outline text-white border-white hover:bg-white hover:text-primary"
            >
              Pelajari Lebih Lanjut
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
