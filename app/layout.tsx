import '../styles/globals.css';
import Head from 'next/head';

import { Navigation } from "../components/Navigations";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Pokemon APP</title>
      <Head>
        <link rel="shortcut icon" href="/pkmn.ico" />
      </Head>
      <body>

        <Navigation />

        {children}
      </body>
    </html>
  );
}
