import Image from "next/image";
import Link from "next/link";
import styles from "../styles/AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Apa Itu Anugerah Avirama Nawasena?
        </h2>

        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Anugerah Avirama Nawasena adalah penghargaan tahunan yang
              diinisiasi oleh Sekolah Bisnis dan Manajemen ITB. Penghargaan ini
              bertujuan untuk mengakui dan memberikan penghargaan kepada
              perusahaan, UKM, startup, dan wirausahawan sosial yang telah
              menciptakan inovasi berkelanjutan.
            </p>
            <p>
              Fokus penghargaan ini adalah mendukung solusi yang relevan dengan
              <strong> Environmental, Social, and Governance (ESG).</strong>
            </p>
            <Link href="/about" className={styles.learnMore}>
              Pelajari Lebih Lanjut
            </Link>
          </div>

          <div className={styles.image}>
            <Image
              src="/images/awards.jpg"
              alt="Anugerah Avirama Nawasena Awards"
              width={500}
              height={300}
              className={styles.awardsImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
