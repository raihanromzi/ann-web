"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";
import PLNPowerImage from "../../../public/plnpower.jpg";
import GetPlaticImage from "../../../public/getplastic.jpg";
import PTPupukImage from "../../../public/ptpupuk.jpg";
import JavaraImage from "../../../public/javara.jpg";
import PTRimbaImage from "../../../public/ptrimba.jpg";
import Gallery1image from "../../../public/gallery1.jpg";
import Gallery2image from "../../../public/gallery2.jpg";
import Gallery3image from "../../../public/gallery3.jpg";
import Gallery4image from "../../../public/gallery4.jpg";
import Gallery5image from "../../../public/gallery5.jpg";
import Gallery6image from "../../../public/gallery6.jpg";
import Gallery7image from "../../../public/gallery7.jpg";
import Gallery8image from "../../../public/gallery8.jpg";
import Gallery9image from "../../../public/gallery9.jpg";
import Gallery10image from "../../../public/gallery10.jpg";
import Gallery11image from "../../../public/gallery11.jpg";

export default function PastEvents() {
  const [activeTab, setActiveTab] = useState("winners");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const tabs = [
    { id: "winners", label: "Pemenang" },
    // { id: "highlights", label: "Highlights" },
    { id: "gallery", label: "Galeri" },
  ];

  const winners = [
    {
      id: 1,
      category: "Inovasi Produk Berkelanjutan",
      name: "PLN Nusantara Power",
      description:
        "PT PLN Nusantara Power adalah Perusahaan Pembangkit Listrik Terintegrasi Terbaik di Indonesia yang menawarkan berbagai macam Jasa Ketenagalistrikan.",
      image: PLNPowerImage,
    },
    {
      id: 2,
      category: "Inovasi Bisnis Model dan Rantai Pasok",
      name: "Get Plastic Foundation",
      description:
        "Get Plastic Foundation adalah sebuah yayasan non-profit yang berfokus pada isu lingkungan, khususnya pengelolaan sampah plastik menjadi bahan bakar minyak (BBM) melalui teknologi pirolisis, dengan visi mewujudkan Indonesia bebas sampah plastik.",
      image: GetPlaticImage,
    },
    {
      id: 3,
      category: "Laporan Berkelanjutan",
      name: "PT Pupuk Indonesia",
      description:
        "Badan Usaha Milik Negara (BUMN) yang menjadi produsen pupuk terbesar di Asia, memproduksi berbagai jenis pupuk seperti Urea, NPK, SP36, dan ZA, serta memiliki anak perusahaan yang bergerak di bidang pertanian dan perdagangan.",
      image: PTPupukImage,
    },
    {
      id: 4,
      category: "Organisasi dan Human Capital",
      name: "Javara",
      description:
        "Javara menawarkan berbagai macam produk makanan alami, organik, dan artisanal terbaik yang berasal dari berbagai daerah di Indonesia.",
      image: JavaraImage,
    },
    {
      id: 5,
      category: "Inovasi Perubahan Sosial",
      name: "PT Rimba Makmur Utama",
      description:
        "RMU adalah perusahaan pengelola proyek Solusi Berbasis Alam yang didirikan dan dikelola menggunakan model bisnis restorasi ekosistem.",
      image: PTRimbaImage,
    },
  ];

  // const highlights = [
  //   {
  //     id: 1,
  //     title: "Malam Penganugerahan",
  //     description:
  //       "Malam penganugerahan dihadiri oleh para pemimpin industri, pemerintah, dan pemangku kepentingan keberlanjutan.",
  //     date: "20 Januari 2023",
  //     image: "/images/event-highlight-1.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Seminar Keberlanjutan",
  //     description:
  //       "Rangkaian seminar dengan pembicara internasional membahas tren terbaru dalam inovasi keberlanjutan.",
  //     date: "18-19 Januari 2023",
  //     image: "/images/event-highlight-2.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Innovation Showcase",
  //     description:
  //       "Pameran inovasi berkelanjutan menampilkan solusi-solusi terbaik dari para finalis.",
  //     date: "17-20 Januari 2023",
  //     image: "/images/event-highlight-3.jpg",
  //   },
  // ];

  const galleryImages = [
    { id: 1, src: Gallery1image, alt: "Foto Kegiatan AAN 2023" },
    { id: 2, src: Gallery2image, alt: "Foto Kegiatan AAN 2023" },
    { id: 3, src: Gallery3image, alt: "Foto Kegiatan AAN 2023" },
    { id: 4, src: Gallery4image, alt: "Foto Kegiatan AAN 2023" },
    { id: 5, src: Gallery5image, alt: "Foto Kegiatan AAN 2023" },
    { id: 6, src: Gallery6image, alt: "Foto Kegiatan AAN 2023" },
    { id: 7, src: Gallery7image, alt: "Foto Kegiatan AAN 2023" },
    { id: 8, src: Gallery8image, alt: "Foto Kegiatan AAN 2023" },
    { id: 9, src: Gallery9image, alt: "Foto Kegiatan AAN 2023" },
    { id: 10, src: Gallery10image, alt: "Foto Kegiatan AAN 2023" },
    { id: 11, src: Gallery11image, alt: "Foto Kegiatan AAN 2023" },
  ];

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <main className="min-h-screen pt-20 overflow-hidden">
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
              Anugerah Avirama Nawasena 2023
            </h1>
            <p className="text-lg text-white/80 mb-0">
              Melihat kembali perjalanan dan keberhasilan penghargaan inovasi
              berkelanjutan tahun lalu
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeTab === "winners" && (
              <motion.div
                key="winners"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeVariants}
                className="max-w-6xl mx-auto"
              >
                <h2 className="heading-lg text-center mb-12">
                  Pemenang AAN 2023
                </h2>

                <div className="space-y-12">
                  {winners.map((winner) => (
                    <div
                      key={winner.id}
                      className="bg-white rounded-xl shadow-card overflow-hidden flex flex-col md:flex-row"
                    >
                      <div className="md:w-1/3 relative h-64 md:h-auto">
                        <Image
                          src={winner.image}
                          alt={winner.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 md:p-8 md:w-2/3">
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                          {winner.name}
                        </h3>
                        <h4 className="text-lg font-semibold text-primary-dark mb-4">
                          {winner.project}
                        </h4>
                        <p className="text-gray-600 mb-4">
                          {winner.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>
                          Pemenang Anugerah Avirama Nawasena 2023
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* {activeTab === "highlights" && (
              <motion.div
                key="highlights"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeVariants}
                className="max-w-6xl mx-auto"
              >
                <h2 className="heading-lg text-center mb-12">
                  Highlight Acara
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {highlights.map((highlight) => (
                    <div
                      key={highlight.id}
                      className="bg-white rounded-xl shadow-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                    >
                      <div className="relative h-48">
                        <Image
                          src={highlight.image}
                          alt={highlight.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-gray-500 mb-2">
                          {highlight.date}
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-600">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )} */}

            {activeTab === "gallery" && (
              <motion.div
                key="gallery"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeVariants}
                className="max-w-6xl mx-auto"
              >
                <h2 className="heading-lg text-center mb-12">Galeri Foto</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryImages.map((image) => (
                    <div
                      key={image.id}
                      className="relative rounded-lg overflow-hidden h-64 group"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="p-4 text-white text-sm">{image.alt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Siap untuk AAN 2024?
            </h2>
            <p className="text-white/80 mb-8">
              Daftarkan inovasi berkelanjutan Anda dan jadilah bagian dari
              perubahan menuju masa depan yang lebih hijau.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={openModal} className="btn btn-secondary">
                Daftar Sekarang
              </button>
              <a
                href="/about"
                className="btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
        <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
      </section>

      <Footer />
    </main>
  );
}
