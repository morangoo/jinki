import "@/app/styles/globals.css";
import { ThemeProvider } from "@/app/context/ThemeContext";
import TopBar from "@/app/components/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <TopBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
