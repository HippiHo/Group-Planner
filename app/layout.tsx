import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Planner App",
  description: "An app to find available days.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="text-white flex justify-center my-5">
          <div>
            <Link
              href={{ pathname: "/about" }}
              className="hover:text-highlight"
            >
              About this App
            </Link>
            <span className="mx-2"> | </ span>
            <Link href={{ pathname: "/" }} className="hover:text-reddish">
              Refresh and back to the start
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
