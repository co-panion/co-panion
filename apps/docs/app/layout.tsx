import type { ReactNode } from "react";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";

export const metadata = {
  title: "Co-panion Docs",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pageMap = await getPageMap();

  const navbar = (
    <Navbar
      logo={<span className="font-bold text-xl">Co-panion Docs</span>}
      projectLink="https://github.com/co-panion/co-panion"
    />
  );

  const footer = (
    <Footer>Co-panion Developer Portal © {new Date().getFullYear()}</Footer>
  );

  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/co-panion/co-panion/tree/main/apps/docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
