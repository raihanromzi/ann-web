"use client";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Hubungi Kami</h2>

        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
            </div>
            <span className={styles.contactText}>
              <a href="mailto:avirama.nawasena@itb.ac.id">
                avirama.nawasena@itb.ac.id
              </a>
            </span>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <span className={styles.contactText}>
              <a href="tel:+6281228995982">0812-2899-5982</a> (Agustin Anandia)
            </span>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" />
              </svg>
            </div>
            <span className={styles.contactText}>
              <a
                href="https://instagram.com/aan.sbmitb"
                target="_blank"
                rel="noopener noreferrer"
              >
                @aan.sbmitb
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>
          &copy; {new Date().getFullYear()} Anugerah Avirama Nawasena. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
