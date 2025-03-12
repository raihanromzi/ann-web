import Image from "next/image";
import Link from "next/link";
import styles from "../styles/AviramaTalksPage.module.css";

export default function AviramaTalksPage() {
  const webinars = [
    {
      id: 1,
      title: "Webinar 1:",
      subtitle: "Transforming Our Society to Sustainability",
      date: "Tanggal: 27 September 2024",
      speaker: "Pembicara: Pemimpin perubahan sosial, pakar keberlanjutan.",
      image: "/images/webinar-1.jpg",
    },
    {
      id: 2,
      title: "Webinar 2:",
      subtitle: "Social Entrepreneurship for Sustainable Development",
      date: "Tanggal: 4 Oktober 2024",
      speaker:
        "Pembicara: Pemimpin gerakan sosial, wirausaha sosial yang sukses.",
      image: "/images/webinar-2.jpg",
    },
    {
      id: 3,
      title: "Webinar 3:",
      subtitle: "Prioritising Supply Chain Resilience in ESG",
      date: "Tanggal: 11 Oktober 2024",
      speaker: "Pembicara: Ahli rantai pasok dan ESG, pemimpin industri.",
      image: "/images/webinar-3.jpg",
    },
    {
      id: 4,
      title: "Webinar 4:",
      subtitle: "Circular Economy – A Sustainable Future",
      date: "Tanggal: 18 Oktober 2024",
      speaker: "Pembicara: Ahli ekonomi sirkular, pemimpin inovasi sirkular.",
      image: "/images/webinar-4.jpg",
    },
    {
      id: 5,
      title: "Webinar 5:",
      subtitle:
        "Financial Innovation for ESG: Leveraging Sustainable Finance for Impact",
      date: "Tanggal: 25 Oktober 2024",
      speaker:
        "Pembicara: Pakar Keuangan berkelanjutan, CEO Fintech Inovatif, Perwakilan Bank Pembangunan",
      image: "/images/webinar-5.jpg",
    },
  ];

  return (
    <section className={styles.aviramaTalksPage}>
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <div className={styles.headerText}>
            <span className={styles.subtitle}>Avirama Talks -</span>
            <h2 className={styles.mainTitle}>
              Webinar Series Anugerah Avirama Nawasena
            </h2>
            <ul className={styles.bulletPoints}>
              <li>Tanggal: 27 September 2024</li>
              <li>Pembicara: Pemimpin perubahan sosial pakar keberlanjutan.</li>
            </ul>
          </div>
          <div className={styles.headerImage}>
            <Image
              src="/images/avirama-webinar-main.jpg"
              alt="Avirama Talks Webinar"
              width={400}
              height={300}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.webinarsGrid}>
          {webinars.map((webinar) => (
            <div key={webinar.id} className={styles.webinarItem}>
              <div className={styles.webinarContent}>
                <h3 className={styles.webinarTitle}>
                  <span className={styles.webinarNumber}>{webinar.title}</span>
                  <span className={styles.webinarSubtitle}>
                    {webinar.subtitle}
                  </span>
                </h3>
                <ul className={styles.webinarDetails}>
                  <li>{webinar.date}</li>
                  <li>{webinar.speaker}</li>
                </ul>
              </div>
              <div className={styles.webinarImage}>
                <Image
                  src={webinar.image}
                  alt={`${webinar.title} ${webinar.subtitle}`}
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <Link href="/register-talks" className={styles.ctaButton}>
            Daftarkan Diri Anda di Avirama Talks Sekarang!
          </Link>
        </div>
      </div>
    </section>
  );
}
