"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

export default function CompleteTestimonial() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Testimoni dari Pemenang Sebelumnya
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 bg-white rounded-xl shadow-lg p-8 relative"
            >
              <div className="absolute -top-5 -left-5 text-6xl text-primary opacity-20 font-serif">
                "
              </div>
              <div className="relative z-10">
                <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "Kami sangat bangga menjadi bagian dari Anugerah Avirama
                  Nawasena. Penghargaan ini memberikan pengakuan atas upaya kami
                  dalam keberlanjutan, dan membantu kami menjangkau lebih banyak
                  mitra bisnis yang peduli dengan masa depan yang lebih hijau."
                </p>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/images/profile.jpg"
                      alt="Pemenang AAN 2023"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Andhika Pratama</h4>
                    <p className="text-gray-500 text-sm">Pemenang AAN 2023</p>
                  </div>
                </div>
                <Link
                  href="/success-stories"
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition-colors duration-300"
                >
                  <span>Baca Kisah Sukses Lainnya</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>

            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-secondary/20 rounded-lg -z-10"></div>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/testimonial-winner.svg"
                    alt="Pemenang Anugerah Avirama Nawasena 2023"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
