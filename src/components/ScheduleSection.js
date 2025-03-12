import styles from "../styles/ScheduleSection.module.css";

export default function ScheduleSection() {
  const schedules = [
    {
      id: 1,
      period: "9 - 30 September 2024",
      event: "Pendaftaran Early Bird",
    },
    {
      id: 2,
      period: "1 - 31 Oktober 2024",
      event: "Pendaftaran Normal",
    },
    {
      id: 3,
      period: "Oktober - November 2024",
      event: "Penilaian",
    },
    {
      id: 4,
      period: "10 Desember 2024",
      event: "Pengumuman Nomine Final",
    },
    {
      id: 5,
      period: "15 - 22 Desember 2024",
      event: "Presentasi Finalis di Depan Dewan Juri Pakar",
    },
    {
      id: 6,
      period: "Januari 2025",
      event: "Acara Penganugerahan",
    },
  ];

  return (
    <section className={styles.scheduleSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Jadwal Penting Anugerah Avirama Nawasena 2024
        </h2>

        <div className={styles.timelineContainer}>
          <div className={styles.timeline}>
            {schedules.map((schedule, index) => (
              <div key={schedule.id} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div
                  className={`${styles.timelineContent} ${
                    index % 2 === 0 ? styles.left : styles.right
                  }`}
                >
                  <span className={styles.period}>{schedule.period}</span>
                  <p className={styles.event}>{schedule.event}</p>
                </div>
              </div>
            ))}
            <div className={styles.timelineLine}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
