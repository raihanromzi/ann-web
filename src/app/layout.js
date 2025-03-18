import { Inter, Poppins } from "next/font/google";
import "./global.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Initialize Font Awesome
config.autoAddCss = false;

// Initialize fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Anugerah Avirama Nawasena 2024",
  description:
    "Menghargai Inovasi Berkelanjutan untuk Masa Depan yang Lebih Hijau",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
