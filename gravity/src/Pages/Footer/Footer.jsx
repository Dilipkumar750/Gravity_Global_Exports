import React from 'react';
import { SiFacebook } from "react-icons/si";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: "Product List",
    links: [
      { name: "Forklift", link: "/OurProducts" },
      { name: "Medical Apparatus", link: "/OurProducts" },
      { name: "Engineering Machinery", link: "/OurProducts" },
      { name: "Food Machinery", link: "/OurProducts" },
      { name: "Electric Motorcycle", link: "/OurProducts" },
    ],
  },
  {
    title: "Product List",
    links: [
      { name: "Farm Machinery", link: "/OurProducts" },
      { name: "Packing Machine", link: "/OurProducts" },
      { name: "Other Machinery", link: "/OurProducts" },
      { name: "Grain Processing", link: "/OurProducts" },
      { name: "Animal Husbandry", link: "/OurProducts" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { name: "info@gravityglobalexports.com", link: "mailto:info@gravityglobalexports.com" },
      { name: "60184641754", link: "tel:60184641754" },
      { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/60184641754" },    ],
  },
  {
    title: "Information",
    links: [
      { name: "Home", link: "/" },
      { name: "Product List", link: "/OurProducts" },
      { name: "About Us", link: "/About" },
      { name: "Terms & Conditions", link: "/TermsAndConditions" },
      { name: "Privacy Policy", link: "/PrivacyPolicy" },
    ],
  },
];

const socialIcons = [
  { icon: <SiFacebook />, link: "#", label: "Facebook" },
  { icon: <FaInstagram />, link: "#", label: "Instagram" },
  { icon: <FaYoutube />, link: "#", label: "YouTube" },
  { icon: <FaWhatsapp />, link: "https://wa.me/60184641754", label: "WhatsApp" },
];

const ColorFoot = () => (
  <footer className="bg-orange-400 p-10 font-[sans-serif] tracking-wide">
    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-4 mt-1">
      <div className="mt-3">
        <address className='font-bold'>
          Gravity Global Exports SDN.BHD<br />
          Co. Reg.No. 202101037574 (1437874-D)<br />
          No: 7, Jalan PU 7E, <br />
          Taman Tasik Prima,<br />
          47140 Puchong, Selangor.
        </address>
        <img src={logo} alt="Gravity Global Exports Logo" className="w-52 my-4" />
        <ul className="flex space-x-6">
          {socialIcons.map((social, index) => (
            <li key={index}>
              <a href={social.link} aria-label={social.label} className="text-black hover:text-white">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {footerLinks.map((section, index) => (
        <div key={index}>
          <h4 className="text-lg font-semibold mb-6 text-black">{section.title}</h4>
          <ul className="space-y-4">
            {section.links.map((item, i) => (
              <li key={`${index}-${i}`}>
                <Link
                  to={item.link}
                  className="text-white hover:text-black text-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <p className="text-black text-sm mt-10 text-center">© Gravity Global Exports Sdn. Bhd. All rights reserved.</p>
  </footer>
);

export default ColorFoot;
