import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

const LinksData=[
  
   { 
    Text: 'Book Appointment',
    Link: '/book-appointment'
  },
  {
    Text: 'Hair Form',
    Link: '/patient-form/hair'
  },
  {
    Text: 'Skin Form',
    Link: '/patient-form/skin'
  },
  {
    Text: 'Blog',
    Link: '/blog'
  },
  { 
    Text: 'About Us',
    Link: '/about-us'
  },
  {
    Text: 'Clinic',
    Link: '/clinic'
  },
 
  { 
    Text: 'Contact Us',
    Link: '/contact-us'
  },
  {
    Text: 'Quick Links',
    Link: '/quick-links'
  }
]

const IconData=[
  {
    icon: Facebook,
    link: 'https://www.facebook.com/radianceclinicnagpur1/'
  },
  {
    icon: Instagram,
    link: 'https://www.instagram.com/radianceclinicnagpur/'
  },

  {
    icon: Youtube,
    link: 'https://www.youtube.com/channel/UCcca28C8TbpVCiCj2sKsWmw'
  },
]
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('footer-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <footer id="footer-section" className="bg-[#2D2840] overflow-hidden text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap md:grid md:grid-cols-4 justify-items-center gap-8">
          {/* Links Section */}
          <div className={`transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-lg font-semibold mb-4  duration-300 transition-transform">Links</h2>
            <ul className="space-y-2">
              {LinksData.map((item, index) => (
                <li key={index} className={`transition-all duration-500 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <Link to={item.Link} className="hover:underline hover:text-gray-300">
                    {item.Text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Section */}
          <div className={`transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-lg font-semibold mb-4  duration-300 transition-transform">Our Services</h3>
            <ul className="space-y-2">
              {["Hair", "Skin", "Laser", "Anti-Aging", "Cosmetic-Surgery"].map((service, index) => (
                <li key={index} className={`transition-all duration-500 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`} style={{ transitionDelay: `${(index * 100) + 300}ms` }}>
                  <Link to={`/services/${service.toLowerCase()}`} className="hover:underline hover:text-gray-300">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className={`transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <h3 className="text-lg font-semibold mb-4  duration-300 transition-transform">Contact Us</h3>
            <ul className="space-y-2">
              <li className={`transition-all duration-500 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`} style={{ transitionDelay: '500ms' }}>(+91) 9822179877</li>
              <li className={`transition-all duration-500 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`} style={{ transitionDelay: '600ms' }}>(+91) 8888069877</li>
              <li className={`text-sm transition-all duration-500 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`} style={{ transitionDelay: '700ms' }}>
                Address: Shop No. 6, Firdoushi Tower,<br />
                Wardha Rd, besides Hitavda Press &<br />
                Shaliini Hospital, near Dhantoli, Nagpur,<br />
                Maharashtra 440012
              </li>
              <li className={`text-sm mt-2 transition-all duration-500 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`} style={{ transitionDelay: '800ms' }}>Email: radianceclinicnagpur@gmail.com</li>
              <li className={`text-sm transition-all duration-500 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`} style={{ transitionDelay: '900ms' }}>Opening Hours: Mon-Sat 10:30am – 08:00pm</li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className={`transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            <h3 className="text-lg font-semibold mb-4  duration-300 transition-transform">Socials</h3>
            <div className="flex space-x-4">
              {IconData.map((Icon, index) => (
                <a key={index} href={Icon.link} className={`hover:text-gray-300 hover:-translate-y-1 hover:scale-110 transition-all duration-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`} >
                  <Icon.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className={`border-t border-gray-700 py-4 transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`} style={{ transitionDelay: '1000ms' }}>
        <div className="container mx-auto px-4 text-sm text-center">
          © {currentYear} Radiance Clinic | All Rights Reserved | Designed & Developed by <a href="https://www.magnifyx.co.uk/" className='hover:underline' target='_blank'>Magnify X</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;