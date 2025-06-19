import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const footerLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const quickServices = [
    'Mobile Recharge',
    'Cycle Repairs',
    'Money Transfer',
    'AEPS Services'
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">ओम साइकिल स्टोर</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              ओम साइकिल और रिचार्ज पॉइंट, मोबाइल रिचार्ज, साइकिल और टायर मरम्मत और मनी ट्रांसफर सेवाओं के लिए आपका पसंदीदा स्थान है। हर दिन तेज़, किफ़ायती और भरोसेमंद समाधानों के साथ समुदाय की सेवा करना गर्व की बात है।
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400">Currently Open</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {quickServices.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Police Lines Chauraha</p>
                  <p className="text-gray-400 text-sm"> Barhaj Road, Deoria, Uttar Pradesh 274001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+919876543210" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  +91 9935156392, +91 7905647282
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:info@quickserve.com" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  omcyclestorejio@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-400 text-sm">Sunday:  9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ओम साइकिल स्टोर. All rights reserved.
            </p>

            <div className="flex space-x-6">
             <a href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
               Privacy Policy
             </a>
             <a href="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
               Terms of Service
             </a>
             <a href="/support" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
               Support
             </a>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;