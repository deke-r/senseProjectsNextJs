'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Bootstrap from '../utils/Bootstrap';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="d-flex flex-column min-vh-100">
        {/* <TawkToWidget/> */}
        <Bootstrap />
        <PopupForm/>
        {/* <TopBar/> */}
        {/* <Navbar /> */}
        <main className="flex-grow-1">
        
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}