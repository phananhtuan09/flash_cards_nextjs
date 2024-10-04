import { getDictionary } from "@/utils/dictionaries";
import MainLayoutClient from "@/components/layout/MainLayoutClient";

interface IRootLayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

export default async function RootLayout({
  children,
  params,
}: IRootLayoutProps) {
  const currentLang = params.lang;

  const dict = await getDictionary(currentLang);

  return <MainLayoutClient dict={dict}>{children}</MainLayoutClient>;
}
