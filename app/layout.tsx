import type React from "react";
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Ubuntu } from 'next/font/google';
import Script from 'next/script';

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

const GTM_ID = 'GTM-558RLVX3';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {GTM_ID && (
          <Script
            id="google-tag-manager-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
      </head>
      <body className={`${ubuntu.variable} bg-background`}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        )}

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