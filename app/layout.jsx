import { NotificationContext } from "@/app/contexts/notification";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Suspense } from "react";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Brainz",
  description: "Play Trivia, Win Crypto Rewards"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Suspense>
          <NotificationContext>
            <ToastContainer hideProgressBar={true} position="bottom-center" />
            <Providers> {children}</Providers>
          </NotificationContext>
          <GoogleAnalytics gaId="G-68EFCMX8V4" />
        </Suspense>
      </body>
    </html>
  );
}
