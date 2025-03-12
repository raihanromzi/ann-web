import Image from "next/image";
import styles from "../styles/Testimonial.module.css";

export default function Testimonial() {
  return (
    <section className={styles.testimonial}>
      <div className={styles.container}>
        <div className={styles.quote}>
          <blockquote>
            "Penghargaan ini mengubah cara kami berinovasi menuju masa depan
            yang lebih baik."
          </blockquote>
          <p className={styles.author}>[Nama Pemenang AAN 2023]</p>
        </div>
        <div className={styles.avatar}>
          <Image
            src="/images/profile.jpg"
            alt="Profile avatar"
            width={150}
            height={150}
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
}
