import { Roboto_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "CineSketcher",
  description: "A simple storyboard sketcher!",

};

const roboto = Roboto_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
