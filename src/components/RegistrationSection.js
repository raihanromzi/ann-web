import Link from "next/link";
import styles from "../styles/RegistrationSection.module.css";

export default function RegistrationSection() {
  const steps = [
    {
      id: 1,
      title: "Isi formulir pendaftaran",
      description: "di [Link Pendaftaran].",
    },
    {
      id: 2,
      title: "Pilih kategori inovasi",
      description: "yang sesuai.",
    },
    {
      id: 3,
      title: "Kirimkan dokumen pendukung,",
      description: "seperti proposal inovasi dan dokumentasi.",
    },
    {
      id: 4,
      title: "Tunggu konfirmasi",
      description: "dari tim kami.",
    },
  ];

  return (
    <section className={styles.registrationSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Bagaimana Cara Mendaftar?</h2>
        <p className={styles.sectionSubtitle}>
          Mendaftar sangat mudah!
          <br />
          Berikut adalah langkah-langkahnya:
        </p>

        <div className={styles.stepsContainer}>
          {steps.map((step) => (
            <div key={step.id} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.id}.</div>
              <div className={styles.stepContent}>
                <p className={styles.stepTitle}>{step.title}</p>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <Link href="/register" className={styles.registerButton}>
            Daftarkan Diri Anda di Avirama Talks Sekarang!
          </Link>
        </div>
      </div>
    </section>
  );
}
