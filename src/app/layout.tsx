import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Container from "@/components/Container";
import SiteMap from "@/components/SiteMap";
import { getSiteUrl } from "@/lib/site";

const site = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "넥스트뉴스 - 최신 뉴스와 심층 분석",
    template: "%s - 넥스트뉴스",
  },
  description:
    "정치, 경제, 사회, 세계, 문화, 스포츠 등 최신 뉴스를 빠르게 전달합니다.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site,
    title: "넥스트뉴스 - 최신 뉴스와 심층 분석",
    description:
      "정치, 경제, 사회, 세계, 문화, 스포츠 등 최신 뉴스를 빠르게 전달합니다.",
    siteName: "넥스트뉴스",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "넥스트뉴스 - 최신 뉴스와 심층 분석",
    description:
      "정치, 경제, 사회, 세계, 문화, 스포츠 등 최신 뉴스를 빠르게 전달합니다.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ? (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        ) : null}
      </head>
      <body className="antialiased">
        <Header />
        <Container>{children}</Container>
        <SiteMap />
      </body>
    </html>
  );
}
