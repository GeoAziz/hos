import Link from 'next/link';
<<<<<<< HEAD
import {Hospital, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin} from 'lucide-react';
=======
import {Hospital, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube} from 'lucide-react';
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<<<<<<< HEAD
        <div className="space-y-4">
=======
        <div className="space-y-4 md:col-span-2 lg:col-span-1">
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873
          <Link href="/" className="flex items-center gap-2">
            <Hospital className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">MediBook</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Your partner in health and wellness. Providing quality care since
            1990 with compassion, expertise, and a commitment to your well-being.
          </p>
        </div>
        <div>
<<<<<<< HEAD
          <h3 className="font-semibold mb-4">Our Company</h3>
          <ul className="space-y-2 text-sm">
             <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
             <li><Link href="/media/blog" className="hover:text-primary">Blog</Link></li>
             <li><Link href="/media/news" className="hover:text-primary">News & Events</Link></li>
             <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
             <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
         <div>
          <h3 className="font-semibold mb-4">Patient Resources</h3>
          <ul className="space-y-2 text-sm">
             <li><Link href="/doctors" className="hover:text-primary">Find a Doctor</Link></li>
             <li><Link href="/#appointment" className="hover:text-primary">Book Appointment</Link></li>
             <li><Link href="/patient-info/booking-guide" className="hover:text-primary">Booking Guide</Link></li>
             <li><Link href="/patient-info/insurance" className="hover:text-primary">Insurance Info</Link></li>
             <li><Link href="/patient-info/rights" className="hover:text-primary">Patient Rights</Link></li>
=======
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
             <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
             <li><Link href="/services/departments" className="hover:text-primary">Services</Link></li>
             <li><Link href="/doctors" className="hover:text-primary">Find a Doctor</Link></li>
             <li><Link href="/#appointment" className="hover:text-primary">Book Appointment</Link></li>
             <li><Link href="/media/blog" className="hover:text-primary">Blog</Link></li>
             <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
              <span>(123) 456-7890</span>
            </li>
            <li className="flex items-center">
              <Mail className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
              <a
                href="mailto:contact@medibook.com"
                className="hover:text-primary break-all"
              >
                contact@medibook.com
              </a>
            </li>
            <li className="flex items-start">
              <MapPin className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
              <span>123 Health St, Medical City, 12345</span>
            </li>
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
              <Link href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
              </Link>
               <Link href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
              </Link>
               <Link href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
              </Link>
<<<<<<< HEAD
              <Link href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
              </Link>
=======
>>>>>>> c1c10e9600d6848c7c3c7535079d9699ae989873
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border text-center text-sm">
        <p>&copy; {new Date().getFullYear()} MediBook. All rights reserved.</p>
      </div>
    </footer>
  );
}
