import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Testimonial from "@/components/Testimonial";
import AboutSection from "@/components/AboutSection";
import CategoriesSection from "@/components/CategoriesSection";
import ScheduleSection from "@/components/ScheduleSection";
import RegistrationSection from "@/components/RegistrationSection";
import AviramaTalksSection from "@/components/AviramaTalksSection";
import CompleteTestimonial from "@/components/CompleteTestimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <HeroBanner />
      <Testimonial />
      <AboutSection />
      <CategoriesSection />
      <ScheduleSection />
      <RegistrationSection />
      <AviramaTalksSection />
      <CompleteTestimonial />
      <Footer />
    </main>
  );
}
