import Image from "next/image";
import Link from "next/link";
import styles from "../styles/CompleteTestimonial.module.css";

export default function CompleteTestimonial() {
  return (
    <section className={styles.CompleteTestimonialSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Testimoni dari Pemenang Sebelumnya</h2>

        <div className={styles.testimonialContainer}>
          <div className={styles.quoteBox}>
            <p className={styles.quote}>
              "Kami sangat bangga menjadi bagian dari Anugerah Avirama Nawasena.
              Penghargaan ini memberikan pengakuan atas upaya kami dalam
              keberlanjutan, dan membantu kami menjangkau lebih banyak mitra
              bisnis yang peduli dengan masa depan yang lebih hijau."
            </p>
            <p className={styles.author}>[Nama Pemenang 2023]</p>

            <div className={styles.ctaContainer}>
              <Link href="/success-stories" className={styles.ctaButton}>
                Baca Kisah Sukses Lainnya
              </Link>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/images/testimonial-winner.svg"
              alt="Pemenang Anugerah Avirama Nawasena 2023"
              width={500}
              height={350}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
