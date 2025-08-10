import Link from 'next/link';
import {Hospital, Phone, Mail, MapPin} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Hospital className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">City Hospital</span>
          </Link>
          <p className="text-sm">
            Your partner in health and wellness. Providing quality care since
            1990.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#services" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#appointment" className="hover:text-primary">
                Appointment
              </a>
            </li>
            <li>
              <a href="#branches" className="hover:text-primary">
                Branches
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-primary" />
              <span>(123) 456-7890</span>
            </li>
            <li className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              <a
                href="mailto:contact@cityhospital.com"
                className="hover:text-primary"
              >
                contact@cityhospital.com
              </a>
            </li>
            <li className="flex items-start">
              <MapPin className="h-4 w-4 mr-2 mt-1 text-primary" />
              <span>123 Health St, Medical City, 12345</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <p className="text-sm">Social media links coming soon.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-border text-center text-sm">
        <p>&copy; {new Date().getFullYear()} City Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
}
