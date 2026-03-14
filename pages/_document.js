import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0b1b2b" />
        <meta name="description" content="CCC AI咨询 - 为中国传统企业提供AI转型、AI Agent与战略咨询服务。" />
        <meta name="keywords" content="AI咨询, AI Agent, 企业AI转型, 战略咨询" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

