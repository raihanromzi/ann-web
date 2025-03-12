"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScheduleSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const schedules = [
    {
      id: 1,
      period: "9 - 30 September 2024",
      event: "Pendaftaran Early Bird",
      description: "Kesempatan mendaftar lebih awal dengan keuntungan khusus",
    },
    {
      id: 2,
      period: "1 - 31 Oktober 2024",
      event: "Pendaftaran Normal",
      description: "Periode pendaftaran reguler untuk semua kategori",
    },
    {
      id: 3,
      period: "Oktober - November 2024",
      event: "Penilaian",
      description: "Proses penilaian dan seleksi oleh tim juri profesional",
    },
    {
      id: 4,
      period: "10 Desember 2024",
      event: "Pengumuman Nomine Final",
      description:
        "Pengumuman finalis yang akan melanjutkan ke tahap presentasi",
    },
    {
      id: 5,
      period: "15 - 22 Desember 2024",
      event: "Presentasi Finalis",
      description: "Presentasi finalis di depan Dewan Juri Pakar",
    },
    {
      id: 6,
      period: "Januari 2025",
      event: "Acara Penganugerahan",
      description: "Malam penganugerahan dan perayaan inovasi keberlanjutan",
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
    <section className="section bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

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
            Timeline
          </motion.span>
          <motion.h2 variants={itemVariants} className="heading-lg mb-4">
            Jadwal Penting Anugerah Avirama Nawasena 2024
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-secondary mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-primary/30 transform -translate-x-1/2 hidden md:block"></div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-12"
          >
            {schedules.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 relative`}
              >
                {/* Timeline dot for desktop */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-secondary rounded-full border-4 border-white hidden md:block"></div>

                {/* Date */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  } mb-4 md:mb-0`}
                >
                  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                      {item.period}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {item.event}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
