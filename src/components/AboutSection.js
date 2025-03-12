"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="section bg-gray-50 overflow-hidden">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Tentang Kami
          </motion.span>
          <motion.h2 variants={itemVariants} className="heading-lg mb-4">
            Apa Itu Anugerah Avirama Nawasena?
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-secondary mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-5 -top-5 w-24 h-24 bg-secondary/20 rounded-lg -z-10"></div>
            <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-primary/20 rounded-lg -z-10"></div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/awards.jpg"
                alt="Anugerah Avirama Nawasena Awards"
                width={600}
                height={400}
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="heading-md text-primary">
              Penghargaan untuk Inovasi Berkelanjutan
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Anugerah Avirama Nawasena adalah penghargaan tahunan yang
              diinisiasi oleh Sekolah Bisnis dan Manajemen ITB. Penghargaan ini
              bertujuan untuk mengakui dan memberikan penghargaan kepada
              perusahaan, UKM, startup, dan wirausahawan sosial yang telah
              menciptakan inovasi berkelanjutan.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Fokus penghargaan ini adalah mendukung solusi yang relevan dengan
              <span className="font-semibold text-primary">
                {" "}
                Environmental, Social, and Governance (ESG).
              </span>
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center font-medium text-primary hover:text-primary-light transition-colors duration-300"
              >
                Pelajari Lebih Lanjut
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
        </div>
      </div>
    </section>
  );
}
