"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Testimonial() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-gradient-to-r from-primary/95 to-primary-dark/95 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern opacity-5"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5 }}
            className="w-28 h-28 md:w-32 md:h-32 flex-shrink-0"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/profile.jpg"
                alt="Profile Avatar"
                width={150}
                height={150}
                className="rounded-full border-4 border-white/20 object-cover w-full h-full"
              />
              <div className="absolute inset-0 rounded-full border-4 border-secondary/50 border-t-secondary animate-spin-slow"></div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg
              className="w-12 h-12 text-secondary/40 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391l4.983-2.609v10h-4.983zm-10.017 0v-7.391l4.983-2.609v10h-4.983zm10.017-10.783l-4.983 2.609-4.983-2.609 4.983-2.608 4.983 2.608zm-10.017 0l-4.983 2.609v-10h4.983v7.391zm10.017-7.391v-3.217l4.983-2.609v10l-4.983-2.609v-1.565z" />
            </svg>
            <blockquote className="text-xl md:text-2xl font-light italic text-white mb-4 leading-relaxed">
              "Penghargaan ini mengubah cara kami berinovasi menuju masa depan
              yang lebih baik."
            </blockquote>
            <div className="flex items-center">
              <div className="h-px bg-white/30 w-10 mr-4"></div>
              <p className="text-white/80 font-medium">
                Divina Greenway,{" "}
                <span className="text-secondary">Pemenang AAN 2023</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
