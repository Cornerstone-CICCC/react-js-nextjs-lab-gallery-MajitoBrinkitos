import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "./globals.css";

export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 h-screen">
        <Navbar />
        {children}
        {modal}
        <Footer />
      </body>
    </html>
  );
}