import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learning NextJS",
    template: "%s| Learning NextJS",
  },
  keywords: ["Next.js", "React", "JavaScript", "Learning", "PlayGround"],
  description: "Trying to learn NExtJS as best as we can",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <main className="min-h-[95vh]"> {children}</main>
        <footer className="text-center text-white bg-slate-600">
          Awesome NextJs project
        </footer>
      </body>
    </html>
  );
}
