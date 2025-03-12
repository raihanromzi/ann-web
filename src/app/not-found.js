"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen pt-20">
      <Header />

      <section className="py-20 flex items-center min-h-[60vh]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="text-9xl font-bold text-primary mb-6 relative inline-block"
            >
              <span className="relative z-10">404</span>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200,
                }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-secondary/30 rounded-full -z-10"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-full -z-10"
              ></motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
            >
              Halaman Tidak Ditemukan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-600 mb-8"
            >
              Maaf, halaman yang Anda cari tidak ditemukan atau telah
              dipindahkan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/" className="btn btn-primary">
                Kembali ke Beranda
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Hubungi Kami
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 max-w-md mx-auto p-6 bg-gray-50 rounded-lg shadow-sm"
          >
            <h2 className="text-lg font-semibold text-primary mb-3">
              Mungkin Anda Mencari?
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-primary hover:text-primary-light transition-colors duration-200"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary hover:text-primary-light transition-colors duration-200"
                >
                  Tentang AAN
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-primary hover:text-primary-light transition-colors duration-200"
                >
                  Pendaftaran
                </Link>
              </li>
              <li>
                <Link
                  href="/past-events"
                  className="text-primary hover:text-primary-light transition-colors duration-200"
                >
                  Event Sebelumnya
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
