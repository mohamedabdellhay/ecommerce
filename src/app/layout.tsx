import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../Components/Header/Header";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
           <div style={{
            margin: "0 5%",
           }}>
             <Header />
          
            {children}
           </div>
        </body>
    </html>
  );
}
