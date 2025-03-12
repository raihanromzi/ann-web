import Image from "next/image";
import styles from "../styles/CategoriesSection.module.css";

export default function CategoriesSection() {
  const categories = [
    {
      id: 1,
      title: "Inovasi Produk Berkelanjutan",
      icon: "/images/lightbulb-icon.png",
    },
    {
      id: 2,
      title: "Layanan yang Ramah Lingkungan",
      icon: "/images/leaf-icon.png",
    },
    {
      id: 3,
      title: "Kampanye Komunikasi ESG",
      icon: "/images/megaphone-icon.png",
    },
    {
      id: 4,
      title: "Penerapan Diversity, Equality, and Inclusion (DEI)",
      icon: "/images/fist-icon.png",
    },
    {
      id: 5,
      title: "Inisiatif Sosial yang Mendukung Keberlanjutan",
      icon: "/images/community-icon.png",
    },
  ];

  return (
    <section className={styles.categoriesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Kategori Penghargaan</h2>
        <p className={styles.sectionDescription}>
          Penghargaan ini terbuka untuk berbagai inovasi yang memiliki dampak
          besar dalam keberlanjutan. Kategori meliputi:
        </p>

        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <div key={category.id} className={styles.categoryCard}>
              <div className={styles.iconWrapper}>
                <Image
                  src={category.icon}
                  alt={category.title}
                  width={60}
                  height={60}
                  className={styles.categoryIcon}
                />
              </div>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
