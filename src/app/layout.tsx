
import type {Metadata} from 'next';
import './globals.css';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import {Toaster} from '@/components/ui/toaster';
import { SocialSidebar } from '@/components/social-sidebar';
<<<<<<< HEAD
<<<<<<< HEAD
import { AuthProvider } from '@/hooks/use-auth';
=======
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873
=======
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873

export const metadata: Metadata = {
  title: 'MediBook',
  description: 'Your Health, Our Priority.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="antialiased">
<<<<<<< HEAD
<<<<<<< HEAD
        <AuthProvider>
            <main>{children}</main>
            <Toaster />
        </AuthProvider>
=======
=======
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873
        <SocialSidebar />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
<<<<<<< HEAD
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873
=======
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873
      </body>
    </html>
  );
}
