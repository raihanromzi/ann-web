import styles from "../styles/HeroBanner.module.css";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Anugerah Avirama Nawasena 2024</h1>
        <h2 className={styles.subtitle}>
          Menghargai Inovasi Berkelanjutan untuk
          <span className={styles.highlight}>
            {" "}
            Masa Depan yang Lebih Hijau
          </span>{" "}
          💙💜
        </h2>
        <p className={styles.description}>
          Inovasi yang mengedepankan keberlanjutan layak mendapatkan pengakuan.
          Bergabunglah dengan kami untuk merayakan solusi dan ide yang mendukung
          lingkungan, sosial, dan tata kelola yang lebih baik.
        </p>
        <Link href="/register" className={styles.cta}>
          Daftarkan Inovasi Anda Sekarang!
        </Link>
      </div>
    </section>
  );
}
