"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categories = [
    {
      title: "Inovasi Ramah Lingkungan",
      description:
        "Untuk inovasi yang memberikan dampak positif terhadap lingkungan.",
      icon: "/images/eco-innovation.svg",
    },
    {
      title: "Inovasi Sosial",
      description:
        "Untuk inovasi yang mengatasi tantangan sosial dan meningkatkan kesejahteraan masyarakat.",
      icon: "/images/social-innovation.svg",
    },
    {
      title: "Inovasi Tata Kelola",
      description:
        "Untuk praktik tata kelola yang mendukung transparansi dan akuntabilitas.",
      icon: "/images/governance-innovation.svg",
    },
    {
      title: "Startup Berkelanjutan",
      description: "Untuk startup dengan model bisnis yang berkelanjutan.",
      icon: "/images/sustainable-startup.svg",
    },
    {
      title: "Wirausaha Sosial",
      description:
        "Untuk wirausahawan yang mengatasi masalah sosial melalui pendekatan bisnis.",
      icon: "/images/social-entrepreneurship.svg",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden pt-20">
      <Header />

      {/* Hero section */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-light opacity-30 clip-diagonal"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tentang Anugerah Avirama Nawasena
            </h1>
            <p className="text-lg text-white/80 mb-0">
              Mengenal lebih dekat penghargaan prestisius untuk inovasi
              berkelanjutan di Indonesia
            </p>
          </motion.div>
        </div>
      </section>

      {/* About section */}
      <section className="py-20 bg-white" ref={ref1}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeIn}
              className="heading-lg mb-6 text-center"
            >
              Latar Belakang
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
              <motion.div variants={fadeIn} className="order-2 md:order-1">
                <p className="text-gray-700 mb-4">
                  Anugerah Avirama Nawasena (AAN) adalah penghargaan prestisius
                  yang diinisiasi oleh Sekolah Bisnis dan Manajemen Institut
                  Teknologi Bandung (SBM ITB) untuk mengakui dan menghargai
                  inovasi-inovasi berkelanjutan yang berkontribusi positif
                  terhadap aspek Environmental, Social, and Governance (ESG).
                </p>
                <p className="text-gray-700">
                  Dalam era di mana keberlanjutan menjadi semakin penting, AAN
                  hadir untuk mendorong praktik bisnis yang tidak hanya
                  menguntungkan secara finansial, tetapi juga bertanggung jawab
                  terhadap lingkungan dan sosial.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="order-1 md:order-2 relative"
              >
                <div className="absolute -left-4 -top-4 w-20 h-20 bg-secondary/20 rounded-lg -z-10"></div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/about-background.jpg"
                    alt="Latar Belakang AAN"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn}
              className="bg-primary/5 rounded-xl p-8 mt-12"
            >
              <h3 className="text-xl font-bold text-primary mb-4">
                Visi & Misi
              </h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-primary-dark mb-2">
                  Visi
                </h4>
                <p className="text-gray-700">
                  Menjadi penghargaan terkemuka yang menginspirasi dan mendorong
                  inovasi berkelanjutan di Indonesia untuk menciptakan masa
                  depan yang lebih hijau dan inklusif.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary-dark mb-2">
                  Misi
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Mengakui dan menghargai inovasi berkelanjutan yang memiliki
                    dampak positif.
                  </li>
                  <li>
                    Mendorong integrasi prinsip ESG dalam strategi bisnis dan
                    inovasi.
                  </li>
                  <li>
                    Membangun ekosistem yang mendukung pertumbuhan inovasi
                    berkelanjutan.
                  </li>
                  <li>
                    Mempromosikan kesadaran tentang pentingnya keberlanjutan
                    dalam bisnis.
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories section */}
      <section className="py-20 bg-gray-50" ref={ref2}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <motion.h2 variants={fadeIn} className="heading-lg mb-6">
              Kategori Penghargaan
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-700 mb-0">
              AAN memberikan penghargaan dalam beberapa kategori yang mencakup
              berbagai aspek keberlanjutan:
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-gray-100"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Image
                    src={category.icon}
                    alt={category.title}
                    width={40}
                    height={40}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-primary">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-20 bg-white" ref={ref3}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="heading-lg mb-6">
              Proses Seleksi
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-700 mb-0">
              Penilaian Anugerah Avirama Nawasena dilakukan melalui proses yang
              transparan dan komprehensif oleh panel juri ahli dari berbagai
              bidang.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-24 top-0 bottom-0 w-1 bg-primary/20 hidden md:block"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  "Pendaftaran",
                  "Seleksi Awal",
                  "Penilaian Mendalam",
                  "Presentasi Finalis",
                  "Penganugerahan",
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 relative"
                  >
                    <div className="md:w-24 flex-shrink-0 flex justify-end">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                        {index + 1}
                      </div>
                    </div>

                    <div className="flex-grow bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {step}
                      </h3>
                      <p className="text-gray-600">
                        {index === 0 &&
                          "Peserta mendaftar dan mengirimkan proposal yang menjelaskan inovasi mereka."}
                        {index === 1 &&
                          "Tim seleksi mengevaluasi semua proposal dan memilih semifinalis."}
                        {index === 2 &&
                          "Semifinalis dinilai secara mendalam berdasarkan kriteria keberlanjutan."}
                        {index === 3 &&
                          "Finalis mempresentasikan inovasi mereka di depan panel juri."}
                        {index === 4 &&
                          "Pengumuman dan pemberian penghargaan dalam acara resmi."}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
