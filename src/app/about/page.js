import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./about.module.css";
import "@/globals.css";

export default function About() {
  return (
    <main>
      <Header />
      <div className={styles.aboutPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Tentang Anugerah Avirama Nawasena</h1>

          <section className={styles.section}>
            <h2>Latar Belakang</h2>
            <p>
              Anugerah Avirama Nawasena (AAN) adalah penghargaan prestisius yang
              diinisiasi oleh Sekolah Bisnis dan Manajemen Institut Teknologi
              Bandung (SBM ITB) untuk mengakui dan menghargai inovasi-inovasi
              berkelanjutan yang berkontribusi positif terhadap aspek
              Environmental, Social, and Governance (ESG).
            </p>
            <p>
              Dalam era di mana keberlanjutan menjadi semakin penting, AAN hadir
              untuk mendorong praktik bisnis yang tidak hanya menguntungkan
              secara finansial, tetapi juga bertanggung jawab terhadap
              lingkungan dan sosial.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Visi & Misi</h2>
            <h3>Visi</h3>
            <p>
              Menjadi penghargaan terkemuka yang menginspirasi dan mendorong
              inovasi berkelanjutan di Indonesia untuk menciptakan masa depan
              yang lebih hijau dan inklusif.
            </p>

            <h3>Misi</h3>
            <ul>
              <li>
                Mengakui dan menghargai inovasi berkelanjutan yang memiliki
                dampak positif.
              </li>
              <li>
                Mendorong integrasi prinsip ESG dalam strategi bisnis dan
                inovasi.
              </li>
              <li>
                Membangun ekosistem yang mendukung pertumbuhan inovasi
                berkelanjutan.
              </li>
              <li>
                Mempromosikan kesadaran tentang pentingnya keberlanjutan dalam
                bisnis.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Kategori Penghargaan</h2>
            <p>
              AAN memberikan penghargaan dalam beberapa kategori yang mencakup
              berbagai aspek keberlanjutan:
            </p>
            <ul>
              <li>
                <strong>Inovasi Ramah Lingkungan</strong> - Untuk inovasi yang
                memberikan dampak positif terhadap lingkungan.
              </li>
              <li>
                <strong>Inovasi Sosial</strong> - Untuk inovasi yang mengatasi
                tantangan sosial dan meningkatkan kesejahteraan masyarakat.
              </li>
              <li>
                <strong>Inovasi Tata Kelola</strong> - Untuk praktik tata kelola
                yang mendukung transparansi dan akuntabilitas.
              </li>
              <li>
                <strong>Startup Berkelanjutan</strong> - Untuk startup dengan
                model bisnis yang berkelanjutan.
              </li>
              <li>
                <strong>Wirausaha Sosial</strong> - Untuk wirausahawan yang
                mengatasi masalah sosial melalui pendekatan bisnis.
              </li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
