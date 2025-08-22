import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Đặt xe sân bay Nội Bài nhanh chóng, uy tín, giá tốt | xedisanbay.com",
  description: "Đặt xe sân bay Nội Bài nhanh chóng, uy tín, giá tốt. Hotline 0865910922. Phục vụ 24/7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBgzaSBtPwZ3aYVcW3xnNvLTl5uB_KpLiU&libraries=places"
          async
          defer
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
