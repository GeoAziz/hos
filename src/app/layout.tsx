
import type {Metadata} from 'next';
import './globals.css';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import {Toaster} from '@/components/ui/toaster';
import { SocialSidebar } from '@/components/social-sidebar';
import { AuthProvider } from '@/hooks/use-auth';

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
        <AuthProvider>
            <main>{children}</main>
            <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
