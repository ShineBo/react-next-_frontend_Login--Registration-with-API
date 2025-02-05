import Navbar from '../components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Next.js App with Login and Registration',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="flex flex-col items-center justify-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}