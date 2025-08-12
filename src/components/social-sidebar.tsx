
<<<<<<< HEAD
import { Instagram, Youtube, Twitter, Facebook, Linkedin } from 'lucide-react';
=======
import { Instagram, Youtube, Twitter, Facebook } from 'lucide-react';
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873
import Link from 'next/link';

const socialLinks = [
    {
        name: 'Instagram',
        href: '#',
        icon: <Instagram className="h-5 w-5" />,
        hoverBg: 'hover:bg-pink-500',
    },
    {
        name: 'YouTube',
        href: '#',
        icon: <Youtube className="h-5 w-5" />,
        hoverBg: 'hover:bg-red-600',
    },
    {
        name: 'Twitter',
        href: '#',
        icon: <Twitter className="h-5 w-5" />,
        hoverBg: 'hover:bg-sky-500',
    },
    {
        name: 'Facebook',
        href: '#',
        icon: <Facebook className="h-5 w-5" />,
        hoverBg: 'hover:bg-blue-600',
<<<<<<< HEAD
    },
    {
        name: 'LinkedIn',
        href: '#',
        icon: <Linkedin className="h-5 w-5" />,
        hoverBg: 'hover:bg-sky-700',
=======
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873
    }
]

export function SocialSidebar() {
  return (
<<<<<<< HEAD
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:block">
=======
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:block">
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873
      <div className="flex flex-col space-y-2">
        {socialLinks.map(link => (
            <Link 
                key={link.name}
                href={link.href}
<<<<<<< HEAD
                aria-label={`Follow us on ${link.name}`}
                className={`group flex items-center justify-end h-10 w-10 bg-background border border-border rounded-l-lg hover:w-32 ${link.hoverBg} hover:text-white transition-all duration-300 ease-in-out`}
            >
                <span className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pr-2">
                    {link.name}
                </span>
                <div className="px-2.5">
                    {link.icon}
                </div>
=======
                className={`group flex items-center h-10 w-10 bg-background border border-border rounded-r-lg hover:w-32 ${link.hoverBg} hover:text-white transition-all duration-300 ease-in-out`}
            >
                <div className="px-2.5">
                    {link.icon}
                </div>
                <span className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {link.name}
                </span>
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873
            </Link>
        ))}
      </div>
    </div>
  );
}
