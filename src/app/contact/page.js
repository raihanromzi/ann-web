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
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
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
              formulir di bawah atau email.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-card p-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">
                Kirim Pesan
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nama
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Email Anda"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Subjek pesan"
                  />
                </div>
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>

                {submitSuccess && (
                  <div className="bg-green-100 text-green-700 p-3 rounded-lg">
                    Pesan Anda telah berhasil terkirim. Kami akan segera
                    menghubungi Anda kembali.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
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
