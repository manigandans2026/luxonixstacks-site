import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import companyConfig from '../../config/company';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Direct Contact */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/" className="inline-block">
                <img
                  src={companyConfig.logo.src}
                  alt={companyConfig.name}
                  className="h-8 w-auto brightness-0 invert"
                />
              </Link>
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-sm leading-relaxed">
              {companyConfig.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <a
                  href={`mailto:${companyConfig.contact.email}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {companyConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <a
                  href={`tel:${companyConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {companyConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 tracking-wide uppercase text-xs">
              Engineering Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {companyConfig.footerLinks.services.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 tracking-wide uppercase text-xs">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {companyConfig.footerLinks.company.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <div>{companyConfig.copyright}</div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-6">
            <Link to="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link to="/#services" className="hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link to="/#contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
