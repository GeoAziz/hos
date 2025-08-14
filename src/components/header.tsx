
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
  Map,
  Users,
  Building,
  GraduationCap,
  Newspaper,
  Image as ImageIcon,
  Video,
  BookOpen,
  HelpCircle,
  FileText,
  Shield,
  HeartHandshake
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const aboutUsItems: { title: string; href: string; description: string, icon: React.ReactNode }[] = [
  {
    title: 'About MediBook',
    href: '/about',
    description: 'Our mission, vision, and history of providing excellent care.',
    icon: <Building className="h-6 w-6" />
  },
  {
    title: 'Our Doctors',
    href: '/doctors',
    description: 'Meet our team of dedicated and experienced medical professionals.',
     icon: <Users className="h-6 w-6" />
  },
  {
    title: 'Management Team',
    href: '/management',
    description: 'The leadership guiding our hospital to a healthier future.',
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    title: 'Careers',
    href: '/careers',
    description: 'Join our team and help us make a difference.',
    icon: <Briefcase className="h-6 w-6" />
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

const patientInfoItems: { title: string; href: string; description: string, icon: React.ReactNode }[] = [
    {
        title: "How to Book",
        href: "/patient-info/booking-guide",
        description: "A step-by-step guide to using our online appointment system.",
        icon: <HelpCircle className="h-6 w-6" />
    },
     {
        title: "Patient Stories",
        href: "/patient-stories",
        description: "Read real stories from patients we've cared for.",
        icon: <BookOpen className="h-6 w-6" />
    },
    {
        title: "Insurance Partners",
        href: "/patient-info/insurance",
        description: "View our list of accepted insurance providers.",
        icon: <FileText className="h-6 w-6" />
    },
    {
        title: "Patient Rights & Responsibilities",
        href: "/patient-info/rights",
        description: "Understand your rights and responsibilities as our patient.",
        icon: <Shield className="h-6 w-6" />
    }
];

const mediaItems: { title: string; href: string; description: string, icon: React.ReactNode }[] = [
  {
    title: 'News & Events',
    href: '/media/news',
    description: 'Read our latest announcements and find out about upcoming events.',
     icon: <Newspaper className="h-6 w-6" />
  },
  {
    title: 'Photo Gallery',
    href: '/media/gallery',
    description: 'Explore our facilities, staff, and moments from our community.',
     icon: <ImageIcon className="h-6 w-6" />
  },
  {
    title: 'Video Gallery',
    href: '/media/videos',
    description: 'Watch videos about our services, patient stories, and health tips.',
     icon: <Video className="h-6 w-6" />
  },
  {
    title: 'Blog',
    href: '/media/blog',
    description: 'Check out our blog for articles on health, wellness, and more.',
     icon: <BookOpen className="h-6 w-6" />
  },
];


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
               <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
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
                      icon={component.icon}
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
                        <Link href={item.href} legacyBehavior passHref>
                          <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            {item.icon}
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {item.title}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {item.description}
                            </p>
                          </a>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/branches">Branches</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>

             <NavigationMenuItem>
              <NavigationMenuTrigger>Media</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {mediaItems.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      icon={component.icon}
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
                      icon={component.icon}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
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
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Hospital className="h-6 w-6 text-primary" />
                            <span className="font-bold text-lg">MediBook</span>
                        </Link>
                    </SheetTitle>
                    <SheetDescription>
                        Navigate through our services and options.
                    </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                    <Accordion type="multiple" className="w-full">
                        <SheetClose asChild>
                            <Link href="/" className="flex items-center p-2 rounded-md hover:bg-accent font-medium">Home</Link>
                        </SheetClose>
                        
                        <AccordionItem value="about">
                            <AccordionTrigger className="hover:no-underline">About Us</AccordionTrigger>
                            <AccordionContent className="pl-4">
                                {aboutUsItems.map(item => (
                                    <SheetClose asChild key={item.href}>
                                        <Link href={item.href} className="block p-2 rounded-md hover:bg-accent">{item.title}</Link>
                                    </SheetClose>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="services">
                            <AccordionTrigger className="hover:no-underline">Services</AccordionTrigger>
                            <AccordionContent className="pl-4">
                                {servicesItems.map(item => (
                                    <SheetClose asChild key={item.href}>
                                        <Link href={item.href} className="block p-2 rounded-md hover:bg-accent">{item.title}</Link>
                                    </SheetClose>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                        
                        <SheetClose asChild>
                           <Link href="/branches" className="flex items-center p-2 rounded-md hover:bg-accent font-medium">Branches</Link>
                        </SheetClose>

                        <AccordionItem value="media">
                            <AccordionTrigger className="hover:no-underline">Media</AccordionTrigger>
                            <AccordionContent className="pl-4">
                                {mediaItems.map(item => (
                                    <SheetClose asChild key={item.href}>
                                        <Link href={item.href} className="block p-2 rounded-md hover:bg-accent">{item.title}</Link>
                                    </SheetClose>
                                ))}
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="patient-info">
                            <AccordionTrigger className="hover:no-underline">Patient Info</AccordionTrigger>
                            <AccordionContent className="pl-4">
                                {patientInfoItems.map(item => (
                                    <SheetClose asChild key={item.href}>
                                        <Link href={item.href} className="block p-2 rounded-md hover:bg-accent">{item.title}</Link>
                                    </SheetClose>
                                ))}
                            </AccordionContent>
                        </AccordionItem>

                        <SheetClose asChild>
                           <Link href="/contact" className="flex items-center p-2 rounded-md hover:bg-accent font-medium">Contact</Link>
                        </SheetClose>
                    </Accordion>
                </div>
                <Button variant="destructive" className="mt-6 w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency
                </Button>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={props.href || ''}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && <div className="text-primary">{icon}</div>}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground ml-8">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
