import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/fraunces";
import "@fontsource/press-start-2p";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Pocket World", template: "%s · Pocket World" },
  description: "Explore real country data and a growing collection of cultural stories.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html suppressHydrationWarning><body>{children}</body></html>;
}
