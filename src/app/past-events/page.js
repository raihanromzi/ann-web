import Header from "@/components/Header";
import SimpleCarousel from "@/components/SimpleCarousel";
import styles from "./past-events.module.css";
import Footer from "@/components/Footer";
import "@/globals.css";

export const metadata = {
  title: "Past AAN 2023 | Anugerah Avirama Nawasena",
  description:
    "Review of previous Anugerah Avirama Nawasena events and past winners",
};

export default function PastEvents() {
  return (
    <main>
      <Header />
      <div className={styles.pastEventsPage}>
        <div className={styles.container}>
          <SimpleCarousel />
        </div>
      </div>
      <Footer />
    </main>
  );
}
