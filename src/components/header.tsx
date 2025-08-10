
'use client';

import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Menu, Hospital, Phone} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {useState} from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {href: '#services', label: 'Services'},
    {href: '#appointment', label: 'Book Now'},
    {href: '#testimonials', label: 'Testimonials'},
    {href: '#branches', label: 'Branches'},
    {href: '#contact', label: 'Contact'},
  ];

  const NavLink = ({
    href,
    label,
    isSheet = false,
  }: {
    href: string;
    label: string;
    isSheet?: boolean;
  }) => {
    const Comp = isSheet ? SheetClose : 'a';
    return (
      <Comp
        asChild={isSheet}
        href={href}
        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
        onClick={() => setIsOpen(false)}
      >
        {label}
      </Comp>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Hospital className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">City Hospital</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="destructive" className="hidden sm:flex">
            <Phone className="mr-2 h-4 w-4" />
            Emergency
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col p-6">
                <Link href="/" className="flex items-center gap-2 mb-8">
                  <Hospital className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg">City Hospital</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} isSheet />
                  ))}
                </nav>
                <Button variant="destructive" className="mt-8">
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
