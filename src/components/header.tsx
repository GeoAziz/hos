'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Menu,
  Hospital,
  Phone,
  Stethoscope,
  HeartPulse,
  Briefcase,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const aboutUsItems: { title: string; href: string; description: string }[] = [
  {
    title: 'About MediBook',
    href: '/about',
    description: 'Our mission, vision, and history of providing excellent care.',
  },
  {
    title: 'Our Doctors',
    href: '/doctors',
    description: 'Meet our team of dedicated and experienced medical professionals.',
  },
  {
    title: 'Management Team',
    href: '/management',
    description: 'The leadership guiding our hospital to a healthier future.',
  },
  {
    title: 'Careers',
    href: '/careers',
    description: 'Join our team and help us make a difference.',
  },
];

const servicesItems: { title: string; href: string; description: string, icon: React.ReactNode }[] = [
    {
        title: "Medical Departments",
        href: "/services/departments",
        description: "Explore a wide range of specialties like Cardiology and Pediatrics.",
        icon: <Stethoscope className="h-6 w-6" />
    },
    {
        title: "Specialist Clinics",
        href: "/services/specialist-clinics",
        description: "Advanced care centers for dialysis, imaging, and physiotherapy.",
        icon: <HeartPulse className="h-6 w-6" />
    },
    {
        title: "Emergency & Critical Care",
        href: "/services/emergency",
        description: "24/7 access to life-saving emergency and trauma services.",
        icon: <Briefcase className="h-6 w-6" />
    }
]

const branchesItems: { title: string; href: string; description: string }[] = [
    {
        title: "All Branches",
        href: "/branches",
        description: "View a list of all our locations with details and booking options."
    },
    {
        title: "Find a Branch Near You",
        href: "/branches/map",
        description: "Use our interactive map to find the closest MediBook facility."
    }
]


const patientInfoItems: { title: string; href: string; description: string }[] = [
    {
        title: "How to Book",
        href: "/patient-info/booking-guide",
        description: "A step-by-step guide to using our online appointment system."
    },
    {
        title: "Insurance Partners",
        href: "/patient-info/insurance",
        description: "View our list of accepted insurance providers."
    },
    {
        title: "Patient Rights & Responsibilities",
        href: "/patient-info/rights",
        description: "Understand your rights and responsibilities as our patient."
    }
]


export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Hospital className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">MediBook</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {aboutUsItems.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

             <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-3">
                  {servicesItems.map((item) => (
                     <li key={item.title}>
                        <NavigationMenuLink asChild>
                           <Link
                            href={item.href}
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          >
                           {item.icon}
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {item.title}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Branches</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {branchesItems.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Patient Info</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {patientInfoItems.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

             <NavigationMenuItem>
               <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
            <Button variant="destructive" className="hidden sm:flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>Emergency Call</span>
            </Button>
            <Button asChild>
                <Link href="/#appointment">Book Appointment</Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>
                        <Link href="/" className="flex items-center gap-2 mb-8">
                            <Hospital className="h-6 w-6 text-primary" />
                            <span className="font-bold text-lg">MediBook</span>
                        </Link>
                    </SheetTitle>
                    <SheetDescription>
                        Navigate through our services and options.
                    </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col p-6 pt-0">
                    <nav className="flex flex-col gap-4">
                       {/* Mobile Nav items here */}
                       <SheetClose asChild><Link href="/">Home</Link></SheetClose>
                       <SheetClose asChild><Link href="/about">About Us</Link></SheetClose>
                       <SheetClose asChild><Link href="/doctors">Doctors</Link></SheetClose>
                       <SheetClose asChild><Link href="/services/departments">Services</Link></SheetClose>
                       <SheetClose asChild><Link href="/branches">Branches</Link></SheetClose>
                       <SheetClose asChild><Link href="/contact">Contact</Link></SheetClose>
                    </nav>
                    <Button variant="destructive" className="mt-6">
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

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';