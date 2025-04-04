import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/context/auth-context";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/context/theme-provider";

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-kufi",
  subsets: ["latin", "arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Why?
// ✅ getUser() runs on the server → no client fetch needed
// ✅ User is passed to all components automatically
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className={`${notoKufiArabic.variable}`}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            // disableTransitionOnChange
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
