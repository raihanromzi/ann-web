"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendToDM = () => {
    // Encode the message for use in a URL
    const encodedMessage = encodeURIComponent(message);

    // Instagram doesn't have a direct message URL structure that works consistently,
    // so we'll open their profile where users can then send a DM
    window.open(
      "https://instagram.com/aan.sbmitb",
      "_blank",
      "noopener,noreferrer"
    );

    // Reset the message field after sending
    setMessage("");
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      title: "Email",
      content: "avirama.nawasena@itb.ac.id",
      link: "mailto:avirama.nawasena@itb.ac.id",
    },
    {
      icon: faPhone,
      title: "Phone",
      content: "0812-2899-5982 (Agustin Anandia)",
      link: "tel:+6281228995982",
    },
    {
      icon: faInstagram,
      title: "Instagram",
      content: "@aan.sbmitb",
      link: "https://instagram.com/aan.sbmitb",
    },
    {
      icon: faLocationDot,
      title: "Address",
      content: "SBM ITB, Jl. Ganesa No.10, Lb. Siliwangi, Bandung",
      link: "https://maps.google.com/?q=SBM+ITB+Bandung",
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
              Contact Us
            </h1>
            <p className="text-lg text-white/80 mb-0">
              Terima kasih atas minat Anda pada Anugerah Avirama Nawasena. Untuk
              pertanyaan atau informasi lebih lanjut, hubungi kami melalui
              Instagram DM atau email.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Instagram DM Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-card p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-primary">
                  Kirim Pesan via Instagram
                </h2>
              </div>

              <p className="text-gray-600 mb-6">
                Anda dapat menghubungi kami langsung melalui pesan Instagram.
                Tim kami akan merespons secepat mungkin.
              </p>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleMessageChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tulis pesan Anda di sini, lalu klik tombol 'Kirim ke Instagram' untuk melanjutkan..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  onClick={handleSendToDM}
                  className="btn bg-gradient-to-r from-pink-500 to-purple-500 text-white w-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  Kirim ke Instagram
                </button>

                <div className="text-sm text-gray-500 text-center mt-4">
                  Tombol di atas akan membuka profil Instagram kami. Anda dapat
                  langsung mengirim DM dari profil tersebut.
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-8">
                Informasi Kontak
              </h2>

              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mr-4">
                      <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <a
                        href={item.link}
                        target={
                          item.title === "Instagram" || item.title === "Address"
                            ? "_blank"
                            : ""
                        }
                        rel={
                          item.title === "Instagram" || item.title === "Address"
                            ? "noopener noreferrer"
                            : ""
                        }
                        className="text-gray-600 hover:text-primary transition-colors duration-300"
                      >
                        {item.content}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-primary/5 rounded-xl">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Jam Operasional
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Senin - Jumat</span>
                    <span className="font-medium">08:00 - 16:00 WIB</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sabtu</span>
                    <span className="font-medium">09:00 - 13:00 WIB</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Minggu & Hari Libur</span>
                    <span className="font-medium">Tutup</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
