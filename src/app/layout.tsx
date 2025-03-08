import "./globals.css";
import Link from "next/link";
import { ErrorWrapper } from "./error-wrapper";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MyWebsite
        </Link>
        <nav className="flex space-x-6">
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-6 mt-10 text-center">
      <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
    </footer>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto p-4">
          <ErrorWrapper>{children}</ErrorWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
