import type React from "react";
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vendas Pra Valer | Transforme sua Equipe Comercial em 5 Dias",
  description:
    "Aprenda a única estratégia de vendas que toda empresa PME precisa para fazer sua equipe comercial ter uma conversão de 50% ou mais com clientes em potencial.",
  openGraph: {
    title: "Vendas Pra Valer| Transforme sua Equipe Comercial em 5 Dias",
    description:
      "Aprenda a única estratégia de vendas que toda empresa PME precisa para fazer sua equipe comercial ter uma conversão de 50% ou mais com clientes em potencial.",
    url: "https://desafiocodigodavenda.com.br",
    siteName: "Vendas Pra Valer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vendas Pra Valer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendas Pra Valer| Transforme sua Equipe Comercial em 5 Dias",
    description:
      "Aprenda a única estratégia de vendas que toda empresa PME precisa para fazer sua equipe comercial ter uma conversão de 50% ou mais com clientes em potencial.",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
      </head>
      <body className={`${ubuntu.variable} bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
