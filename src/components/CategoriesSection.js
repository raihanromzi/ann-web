"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Icon1 from "../../public/icon1.svg";
import Icon2 from "../../public/icon2.svg";
import Icon3 from "../../public/icon3.svg";
import Icon4 from "../../public/icon4.svg";
import Icon5 from "../../public/icon5.svg";

export default function CategoriesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      id: 1,
      title: "Inovasi Produk Berkelanjutan",
      icon: Icon1,
      description:
        "Produk dengan dampak lingkungan minimal dan manfaat sosial maksimal",
    },
    {
      id: 2,
      title: "Layanan yang Ramah Lingkungan",
      icon: Icon2,
      description:
        "Layanan yang mendukung pelestarian lingkungan dan keberlanjutan",
    },
    {
      id: 3,
      title: "Kampanye Komunikasi ESG",
      icon: Icon3,
      description:
        "Komunikasi efektif tentang upaya ESG dan edukasi keberlanjutan",
    },
    {
      id: 4,
      title: "Penerapan Diversity, Equality, and Inclusion (DEI)",
      icon: Icon4,
      description:
        "Inisiatif untuk menciptakan lingkungan yang inklusif dan beragam",
    },
    {
      id: 5,
      title: "Inisiatif Sosial yang Mendukung Keberlanjutan",
      icon: Icon5,
      description:
        "Program sosial dengan dampak positif pada komunitas dan lingkungan",
    },
  ];

  // Split categories into top row (3 items) and bottom row (2 items)
  const topRow = categories.slice(0, 3);
  const bottomRow = categories.slice(3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section relative overflow-hidden bg-gradient-to-br from-primary to-primary-light text-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-5"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-light opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-dark opacity-20"></div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-dots-pattern"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-4"
          >
            Kategori
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Kategori Penghargaan
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-secondary mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-white/90 max-w-2xl mx-auto"
          >
            Penghargaan ini terbuka untuk berbagai inovasi yang memiliki dampak
            besar dalam keberlanjutan. Kategori meliputi:
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Top row - 3 items */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          >
            {topRow.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                custom={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg border border-white/10"
              >
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Image
                    src={category.icon}
                    alt={category.title}
                    width={120}
                    height={120}
                    className="w-18 h-18 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-white">
                  {category.title}
                </h3>
                <p className="text-white/80 text-center text-sm">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom row - 2 items, centered */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-24 lg:px-32"
          >
            {bottomRow.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                custom={index + 3} // Continue the animation sequence
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg border border-white/10"
              >
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Image
                    src={category.icon}
                    alt={category.title}
                    width={120}
                    height={120}
                    className="w-18 h-18 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-white">
                  {category.title}
                </h3>
                <p className="text-white/80 text-center text-sm">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
