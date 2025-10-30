// import React from 'react';
// import { Plane, Globe, DollarSign, Calendar, CheckCircle2 } from 'lucide-react';

// const DentalTourism = () => {
//   const processSteps = [
//     {
//       step: 1,
//       title: 'Initial Consultation',
//       description: 'Contact us with your dental concerns and requirements'
//     },
//     {
//       step: 2,
//       title: 'Treatment Plan',
//       description: 'Receive a detailed treatment plan and cost estimate'
//     },
//     {
//       step: 3,
//       title: 'Travel Arrangements',
//       description: 'We help coordinate your travel and accommodation'
//     },
//     {
//       step: 4,
//       title: 'Dental Treatment',
//       description: 'Receive world-class dental care at our facility'
//     },
//     {
//       step: 5,
//       title: 'Follow-up Care',
//       description: 'Comprehensive aftercare and support'
//     }
//   ];

//   return (
//     <div className="tourism-page">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto">
//             <div className="flex justify-center mb-6">
//               <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center">
//                 <Globe className="text-white" size={40} />
//               </div>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Dental <span className="text-orange-600">Tourism</span>
//             </h1>
//             <p className="text-xl text-gray-600 leading-relaxed">
//               Experience world-class dental care in India at a fraction of the cost
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* What is Dental Tourism */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//             What is <span className="text-orange-600">Dental Tourism?</span>
//           </h2>
          
//           <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
//             <p>
//               Dental tourism refers to the practice of traveling to another country to receive dental care. It has become increasingly popular as people seek high-quality dental treatments at more affordable prices than what is available in their home countries.
//             </p>
            
//             <p>
//               India has emerged as one of the leading destinations for dental tourism, offering a unique combination of:
//             </p>
            
//             <ul className="space-y-3 ml-6">
//               <li className="flex items-start">
//                 <CheckCircle2 className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
//                 <span><strong>Cost Savings:</strong> Dental treatments in India cost 50-70% less compared to Western countries, without compromising on quality.</span>
//               </li>
//               <li className="flex items-start">
//                 <CheckCircle2 className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
//                 <span><strong>World-Class Expertise:</strong> Indian dentists are highly qualified, with many trained internationally and possessing extensive experience.</span>
//               </li>
//               <li className="flex items-start">
//                 <CheckCircle2 className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
//                 <span><strong>Advanced Technology:</strong> Dental clinics in India use state-of-the-art equipment and follow international standards of hygiene and safety.</span>
//               </li>
//               <li className="flex items-start">
//                 <CheckCircle2 className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
//                 <span><strong>No Waiting Time:</strong> Unlike many countries with long waiting lists, you can schedule your treatment quickly and conveniently.</span>
//               </li>
//               <li className="flex items-start">
//                 <CheckCircle2 className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
//                 <span><strong>Travel Opportunity:</strong> Combine your dental treatment with exploring India's rich cultural heritage and beautiful destinations.</span>
//               </li>
//             </ul>
            
//             <p>
//               At Aurobindo Dental Hospital in Hyderabad, we welcome international patients and provide comprehensive support throughout their dental tourism journey. Our experienced team ensures that you receive exceptional dental care while enjoying a comfortable and stress-free experience.
//             </p>
            
//             <p>
//               Hyderabad, known as the "City of Pearls," is a vibrant metropolitan city with excellent connectivity, modern infrastructure, and a rich cultural heritage. It's an ideal destination for dental tourism, offering world-class medical facilities alongside opportunities to explore historical monuments, enjoy delicious cuisine, and experience warm Indian hospitality.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Process Flow */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
//             Dental Tourism <span className="text-orange-600">Process Flow</span>
//           </h2>
          
//           <div className="relative">
//             {/* Connection Line */}
//             <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-orange-200" style={{ top: '80px' }}></div>
            
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
//               {processSteps.map((item, index) => (
//                 <div key={index} className="relative">
//                   <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100">
//                     <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10">
//                       {item.step}
//                     </div>
//                     <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{item.title}</h3>
//                     <p className="text-gray-600 text-sm text-center">{item.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
//             Why Choose <span className="text-orange-600">Aurobindo Dental</span> for Dental Tourism?
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-md text-center border border-orange-100">
//               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <DollarSign className="text-orange-600" size={32} />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Pricing</h3>
//               <p className="text-gray-600">Save up to 70% on dental treatments without compromising quality</p>
//             </div>

//             <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-md text-center border border-orange-100">
//               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Calendar className="text-orange-600" size={32} />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Scheduling</h3>
//               <p className="text-gray-600">Quick appointments with no long waiting periods</p>
//             </div>

//             <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-md text-center border border-orange-100">
//               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Plane className="text-orange-600" size={32} />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Support</h3>
//               <p className="text-gray-600">Assistance with travel arrangements and accommodation</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-orange-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Ready to Start Your Dental Tourism Journey?
//           </h2>
//           <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
//             Contact us today to discuss your dental needs and plan your visit to Hyderabad
//           </p>
//           <div className="flex flex-wrap justify-center gap-4 text-xl font-semibold">
//             <a href="tel:9866937777" className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">Call: 9866937777</a>
//             <a href="mailto:aurobindodental@gmail.com" className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">Email Us</a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DentalTourism;













import React from 'react';
import { Plane, Globe, DollarSign, Calendar, CheckCircle2 } from 'lucide-react';

const DentalTourism = () => {
  const processSteps = [
    { step: 1, title: 'Initial Consultation', description: 'Contact us with your dental concerns and requirements' },
    { step: 2, title: 'Treatment Plan', description: 'Receive a detailed treatment plan and cost estimate' },
    { step: 3, title: 'Travel Arrangements', description: 'We help coordinate your travel and accommodation' },
    { step: 4, title: 'Dental Treatment', description: 'Receive world-class dental care at our facility' },
    { step: 5, title: 'Follow-up Care', description: 'Comprehensive aftercare and support' }
  ];

  return (
    <div className="tourism-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-sky-600 rounded-full flex items-center justify-center">
                <Globe className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dental <span className="text-sky-600">Tourism</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience world-class dental care in India at a fraction of the cost
            </p>
          </div>
        </div>
      </section>

      {/* What is Dental Tourism */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What is <span className="text-sky-600">Dental Tourism?</span>
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              Dental tourism refers to the practice of traveling to another country to receive dental care.
              It has become increasingly popular as people seek high-quality dental treatments at more affordable prices than what is available in their home countries.
            </p>

            <p>
              India has emerged as one of the leading destinations for dental tourism, offering a unique combination of:
            </p>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <CheckCircle2 className="text-sky-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <span><strong>Cost Savings:</strong> Dental treatments in India cost 50–70% less compared to Western countries, without compromising on quality.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-sky-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <span><strong>World-Class Expertise:</strong> Indian dentists are highly qualified, many trained internationally and possessing extensive experience.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-sky-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <span><strong>Advanced Technology:</strong> Clinics in India use state-of-the-art equipment and follow international hygiene standards.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-sky-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <span><strong>No Waiting Time:</strong> You can schedule treatments quickly and conveniently.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-sky-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <span><strong>Travel Opportunity:</strong> Combine treatment with exploring India's rich culture and heritage.</span>
              </li>
            </ul>

            <p>
              At Aurobindo Dental Hospital in Hyderabad, we welcome international patients and provide full support throughout their journey. Our experienced team ensures exceptional care in a comfortable, stress-free environment.
            </p>

            <p>
              Hyderabad, known as the "City of Pearls," offers excellent connectivity, modern facilities, and a blend of heritage and technology — making it an ideal destination for dental tourism.
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Dental Tourism <span className="text-sky-600">Process Flow</span>
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-sky-200" style={{ top: '80px' }}></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-sky-100">
                    <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{item.title}</h3>
                    <p className="text-gray-600 text-sm text-center">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose <span className="text-sky-600">Aurobindo Dental</span> for Dental Tourism?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-md text-center border border-sky-100">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-sky-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">Save up to 70% on treatments without compromising quality.</p>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-md text-center border border-sky-100">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-sky-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">Quick appointments with no long waiting periods.</p>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-md text-center border border-sky-100">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="text-sky-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Support</h3>
              <p className="text-gray-600">Assistance with travel arrangements and accommodation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Dental Tourism Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to discuss your dental needs and plan your visit to Hyderabad.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xl font-semibold">
            <a
              href="tel:9866937777"
              className="bg-white text-sky-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call: 9866937777
            </a>
            <a
              href="mailto:aurobindodental@gmail.com"
              className="bg-white text-sky-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DentalTourism;
