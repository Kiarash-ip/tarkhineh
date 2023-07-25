import "@/styles/globals.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const estedad = localFont({
  src: [
    {
      path: "../../public/fonts/Estedad-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Estedad-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Estedad-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Estedad-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-estedad",
});

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <>
      <style jsx global>{`
        :root {
          --font-base: ${estedad.style.fontFamily};
        }
      `}</style>
      <main className={`${estedad.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
