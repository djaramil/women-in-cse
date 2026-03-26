import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Women in Computer Science & Engineering</h3>
            <p className="text-white/80 mb-4">
              Empowering women in technology at Florida Atlantic University through mentorship, 
              community, and professional development opportunities.
            </p>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:wicse@fau.edu" className="hover:text-[#CC0000] transition-colors">
                wicse@fau.edu
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/events" className="text-white/80 hover:text-white">Events</Link></li>
              <li><Link href="/mentorship" className="text-white/80 hover:text-white">Mentorship</Link></li>
              <li><Link href="/opportunities" className="text-white/80 hover:text-white">Opportunities</Link></li>
              <li><Link href="/resources" className="text-white/80 hover:text-white">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/80 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
              <li><a href="https://www.fau.edu" className="text-white/80 hover:text-white">FAU Website</a></li>
              <li><a href="https://www.fau.edu/engineering/cs/" className="text-white/80 hover:text-white">CS Department</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Women in Computer Science & Engineering at FAU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
