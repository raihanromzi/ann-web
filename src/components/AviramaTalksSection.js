"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import ImageWebinar1 from "../../public/webinar1.jpg";
import ImageWebinar2 from "../../public/webinar2.jpeg";
import ImageWebinar3 from "../../public/webinar3.jpg";
import ImageWebinar4 from "../../public/webinar4.jpg";
import ImageWebinar5 from "../../public/webinar5.jpg";

export default function AviramaTalksSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const webinars = [
    {
      id: 1,
      title: "Webinar 1:",
      subtitle: "Transforming Our Society to Sustainability",
      date: "Tanggal: 27 September 2024",
      speaker: "Pembicara: Pemimpin perubahan sosial, pakar keberlanjutan.",
      image: ImageWebinar2,
    },
    {
      id: 2,
      title: "Webinar 2:",
      subtitle: "Social Entrepreneurship for Sustainable Development",
      date: "Tanggal: 4 Oktober 2024",
      speaker:
        "Pembicara: Pemimpin gerakan sosial, wirausaha sosial yang sukses.",
      image: ImageWebinar3,
    },
    {
      id: 3,
      title: "Webinar 3:",
      subtitle: "Prioritising Supply Chain Resilience in ESG",
      date: "Tanggal: 11 Oktober 2024",
      speaker: "Pembicara: Ahli rantai pasok dan ESG, pemimpin industri.",
      image: ImageWebinar4,
    },
    {
      id: 4,
      title: "Webinar 4:",
      subtitle: "Circular Economy – A Sustainable Future",
      date: "Tanggal: 18 Oktober 2024",
      speaker: "Pembicara: Ahli ekonomi sirkular, pemimpin inovasi sirkular.",
      image: ImageWebinar5,
    },
  ];

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
    <section className="section relative py-20 bg-gradient-to-br from-primary/95 to-primary-dark/95 text-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-light opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-dark opacity-20"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <motion.div variants={itemVariants} className="lg:w-1/2">
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
                Avirama Talks
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Webinar Series Anugerah Avirama Nawasena
              </h2>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Tanggal: 27 September 2024</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Pembicara: Pemimpin perubahan sosial, pakar keberlanjutan.
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={ImageWebinar1}
                  alt="Avirama Talks Webinar"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-secondary text-primary font-bold px-4 py-2 rounded-full text-sm">
                  Series #1
                </div>
              </div>
            </motion.div>
          </div>

          {/* Webinars list */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Jadwal Webinar Series
            </h3>

            <div className="space-y-8">
              {webinars.map((webinar) => (
                <div
                  key={webinar.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/20 border border-white/10"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative h-56 md:h-auto">
                      <Image
                        src={webinar.image}
                        alt={`${webinar.title} ${webinar.subtitle}`}
                        width={1080}
                        height={1350}
                        className="w-full h-auto object-cover"
                      />

                      <div className="absolute top-4 left-4 bg-secondary text-primary px-3 py-1 rounded-full text-sm font-bold">
                        {webinar.title.replace(":", "")}
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h4 className="text-xl font-bold mb-2">
                        {webinar.subtitle}
                      </h4>
                      <ul className="space-y-2 text-white/80 mb-4">
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span>{webinar.date}</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          <span>{webinar.speaker}</span>
                        </li>
                      </ul>
                      <button className="text-secondary hover:text-white transition-colors duration-200 flex items-center text-sm font-medium">
                        Lihat Detail
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA button */}
          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/register-talks"
              className="inline-block bg-secondary text-primary font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-secondary-light hover:-translate-y-1 hover:shadow-lg"
            >
              Daftarkan Diri Anda di Avirama Talks Sekarang!
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
