
import { Instagram, Youtube, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

export function SocialSidebar() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col space-y-2">
        <Link 
            href="#"
            className={cn(
                buttonVariants({ variant: 'outline', size: 'icon' }),
                "rounded-l-none hover:bg-pink-500 hover:text-white transition-colors duration-300"
            )}
        >
            <Instagram className="h-5 w-5" />
        </Link>
        <Link 
            href="#"
            className={cn(
                buttonVariants({ variant: 'outline', size: 'icon' }),
                "rounded-l-none hover:bg-red-600 hover:text-white transition-colors duration-300"
            )}
        >
            <Youtube className="h-5 w-5" />
        </Link>
        <Link 
            href="#"
            className={cn(
                buttonVariants({ variant: 'outline', size: 'icon' }),
                "rounded-l-none hover:bg-sky-500 hover:text-white transition-colors duration-300"
            )}
        >
            <Twitter className="h-5 w-5" />
        </Link>
        <Link 
            href="#"
            className={cn(
                buttonVariants({ variant: 'outline', size: 'icon' }),
                "rounded-l-none hover:bg-blue-600 hover:text-white transition-colors duration-300"
            )}
        >
            <Facebook className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
