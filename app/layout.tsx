import type { Metadata } from "next";
import { Murecho } from "next/font/google";
import "./globals.css";

const murecho = Murecho({
  variable: "--font-murecho",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Gallery",
  description: "Digital Gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${murecho.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
