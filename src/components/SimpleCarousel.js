"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/SimpleCarousel.module.css";

export default function SimpleCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      category: "Inovasi produk berkelanjutan",
      name: "PLN Nusantara Power",
      image: "/images/placeholder-image.svg",
    },
    {
      id: 2,
      category: "Layanan yang Ramah Lingkungan",
      name: "EcoWaste Solutions",
      image: "/images/placeholder-image.svg",
    },
    {
      id: 3,
      category: "Kampanye Komunikasi ESG",
      name: "Green Initiative Indonesia",
      image: "/images/placeholder-image.svg",
    },
    {
      id: 4,
      category: "Penerapan Diversity, Equality, and Inclusion (DEI)",
      name: "Inclusive Workspace Foundation",
      image: "/images/placeholder-image.svg",
    },
    {
      id: 5,
      category: "Inisiatif Sosial yang Mendukung Keberlanjutan",
      name: "Komunitas Peduli Sampah",
      image: "/images/placeholder-image.svg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>List pemegang AAN 2023</h2>

      <div className={styles.carousel}>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={prevSlide}
        >
          &#10094;
        </button>

        <div className={styles.slideContainer}>
          <div className={styles.slide}>
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].name}
              width={400}
              height={300}
              className={styles.slideImage}
            />
            <div className={styles.slideInfo}>
              <h3 className={styles.slideCategory}>
                {slides[currentSlide].category}
              </h3>
              <p className={styles.slideName}>{slides[currentSlide].name}</p>
            </div>
          </div>
        </div>

        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.activeDot : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
