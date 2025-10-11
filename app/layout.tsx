import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import "./globals.scss";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "CosmoFox",
  description: "CosmoFox",
  icons: {
    icon: "/images/logo.png"
  }
};

export default async function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
