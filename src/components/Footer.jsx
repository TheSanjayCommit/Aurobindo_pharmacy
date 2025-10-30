// import React from 'react';
// import { Link } from 'react-router-dom';
// import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="container mx-auto px-4 lg:px-8 xl:px-16 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* About Us Column */}
//           <div>
//             <h3 className="text-white text-lg font-bold mb-4 border-b border-orange-600 pb-2 inline-block">
//               ABOUT US
//             </h3>
//             <p className="text-sm leading-relaxed">
//               best dental clinic in madhapur, hyderabad, best dental hospital in madhapur, hyderabad, dental braces cost in hyderabad, Dental implant cost in hyderabad, root canal treatment cost in hyderabad, cosmetic dentistry, dental crowns cost in hyderabad, dentures cost in hyderabad, Invisible aligners cost in hyderabad, Root canal treatments cost in hyderabad, teeth whitening cost in hyderabad, wisdom tooth removal cost in hyderabad, ceramic braces cost in hyderabad, Metal braces cost in hyderabad, zirconia crowns cost in hyderabad, E max crowns cost in hyderabad, Metal crowns cost in hyderabad.
//             </p>
//           </div>

//           {/* Treatments Column */}
//           <div>
//             <h3 className="text-white text-lg font-bold mb-4 border-b border-orange-600 pb-2 inline-block">
//               TREATMENTS
//             </h3>
//             <div className="text-sm leading-relaxed">
//               <p className="mb-3">We offer all Dental treatments at affordable cost. Treatment Charges at our hospital in 2022–2023:</p>
//               <ul className="space-y-1">
//                 <li>• Invisible aligners – 95,000 INR</li>
//                 <li>• Dental Braces – From 35,000 INR</li>
//                 <li>• Root canal treatments – From 4,000 INR</li>
//                 <li>• Wisdom tooth removal – From 4,000 INR</li>
//                 <li>• Dentures – From 25,000 INR</li>
//                 <li>• Teeth whitening – From 10,000 INR</li>
//               </ul>
//             </div>
//           </div>

//           {/* Contact Us Column */}
//           <div>
//             <h3 className="text-white text-lg font-bold mb-4 border-b border-orange-600 pb-2 inline-block">
//               CONTACT US
//             </h3>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-start space-x-3">
//                 <MapPin size={18} className="text-orange-600 mt-1 flex-shrink-0" />
//                 <p>
//                   Flat no-503, 5th floor, MVS Heights, Vinayaka Nagar, Khanamet, Madhapur, Hyderabad-500081, Telangana.
//                 </p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone size={18} className="text-orange-600 flex-shrink-0" />
//                 <div>
//                   <a href="tel:9866937777" className="hover:text-orange-600 transition-colors">9866937777</a>
//                   <span className="mx-1">/</span>
//                   <a href="tel:9032018887" className="hover:text-orange-600 transition-colors">9032018887</a>
//                   <span className="mx-1">/</span>
//                   <a href="tel:9347294612" className="hover:text-orange-600 transition-colors">9347294612</a>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail size={18} className="text-orange-600 flex-shrink-0" />
//                 <a href="mailto:aurobindodental@gmail.com" className="hover:text-orange-600 transition-colors">
//                   aurobindodental@gmail.com
//                 </a>
//               </div>
//             </div>

//             {/* Social Media Links */}
//             <div className="mt-6">
//               <h4 className="text-white font-semibold mb-3">Follow Us</h4>
//               <div className="flex space-x-4">
//                 <a href="https://www.facebook.com/aurobindodental" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-600 transition-colors">
//                   <Facebook size={20} />
//                 </a>
//                 <a href="https://x.com/dentalaurobindo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-600 transition-colors">
//                   <Twitter size={20} />
//                 </a>
//                 <a href="https://www.instagram.com/aurobindodentalhospital" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-600 transition-colors">
//                   <Instagram size={20} />
//                 </a>
//                 <a href="https://www.linkedin.com/company/aurobindodentalhospital" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-600 transition-colors">
//                   <Linkedin size={20} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
//           <p>© Aurobindo Dental Hospital | All Rights Reserved</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;











import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Us Column */}
          <div>
            <h3 className="text-gray-900 text-lg font-bold mb-4 border-b-2 border-orange-500 pb-2 inline-block">
              ABOUT US
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Best dental clinic in Madhapur, Hyderabad. We offer top-quality treatments including braces, implants, root canals, crowns, dentures, cosmetic dentistry, and more — all at affordable prices.
            </p>
          </div>

          {/* Treatments Column */}
          <div>
            <h3 className="text-gray-900 text-lg font-bold mb-4 border-b-2 border-orange-500 pb-2 inline-block">
              TREATMENTS
            </h3>
            <div className="text-sm leading-relaxed text-gray-600">
              <p className="mb-3">
                We offer all dental treatments at affordable costs. Estimated charges:
              </p>
              <ul className="space-y-1">
                <li>• Invisible Aligners – ₹95,000</li>
                <li>• Dental Braces – From ₹35,000</li>
                <li>• Root Canal Treatments – From ₹4,000</li>
                <li>• Wisdom Tooth Removal – From ₹4,000</li>
                <li>• Dentures – From ₹25,000</li>
                <li>• Teeth Whitening – From ₹10,000</li>
              </ul>
            </div>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-gray-900 text-lg font-bold mb-4 border-b-2 border-orange-500 pb-2 inline-block">
              CONTACT US
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                <p>
                  Flat No-503, 5th Floor, MVS Heights, Vinayaka Nagar, Khanamet, 
                  Madhapur, Hyderabad-500081, Telangana.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-600 flex-shrink-0" />
                <div>
                  <a href="tel:9866937777" className="hover:text-orange-600 transition-colors">9866937777</a>
                  <span className="mx-1">/</span>
                  <a href="tel:9032018887" className="hover:text-orange-600 transition-colors">9032018887</a>
                  <span className="mx-1">/</span>
                  <a href="tel:9347294612" className="hover:text-orange-600 transition-colors">9347294612</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-600 flex-shrink-0" />
                <a href="mailto:aurobindodental@gmail.com" className="hover:text-orange-600 transition-colors">
                  aurobindodental@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-gray-900 font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/aurobindodental" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-600 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://x.com/dentalaurobindo" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-600 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://www.instagram.com/aurobindodentalhospital" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/company/aurobindodentalhospital" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-600 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>© Aurobindo Dental Hospital | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
