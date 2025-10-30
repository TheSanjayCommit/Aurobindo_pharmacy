// import React from 'react';
// import { Link } from 'react-router-dom';
// import { CheckCircle2, ArrowRight, Star, Sparkles, Shield, Clock, Award, Users, TrendingUp, Smile, Activity, Zap, Crown, Scissors, Droplet, Camera, Wind } from 'lucide-react';
// import { Button } from '../components/ui/button';
// import CountingAnimation from '../components/CountingAnimation';

// const Home = () => {
//   const treatments = [
//     { name: 'Invisible aligners', icon: Smile },
//     { name: 'Dental Braces', icon: Activity },
//     { name: 'Root canal treatments', icon: Droplet },
//     { name: 'Wisdom tooth removal', icon: Scissors },
//     { name: 'Dentures', icon: Crown },
//     { name: 'Teeth whitening', icon: Sparkles },
//     { name: 'Dental Implants', icon: Zap },
//     { name: 'Cosmetic Dentistry', icon: Camera }
//   ];

//   const stats = [
//     { number: '15', label: 'Years Experience', icon: Award, suffix: '+' },
//     { number: '10000', label: 'Happy Patients', icon: Users, suffix: '+' },
//     { number: '100', label: 'Success Rate', icon: TrendingUp, suffix: '%' },
//     { number: '24/7', label: 'Emergency Care', icon: Clock, suffix: '' }
//   ];

//   return (
//     <div className="home-page">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 overflow-hidden">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6 z-10">
//               <div className="inline-block">
//                 <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
//                   <Sparkles size={16} />
//                   Best Dental Clinic in Madhapur, Hyderabad
//                 </span>
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                 Your Smile, Our <span className="text-orange-600">Priority</span>
//               </h1>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 Aurobindo dental hospital is one of the best dental hospitals in Madhapur, Hyderabad, India. We have all 15+ years experienced dentists working with us. We offer all dental treatments at affordable cost.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link to="/contact">
//                   <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
//                     Book Appointment
//                     <ArrowRight className="ml-2" size={20} />
//                   </Button>
//                 </Link>
//                 <Link to="/treatments">
//                   <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg">
//                     View Treatments
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
//                 <img
//                   src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
//                   alt="Dental Clinic"
//                   className="w-full h-auto"
//                 />
//               </div>
//               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
//                 <div className="flex items-center space-x-2 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={20} className="fill-orange-500 text-orange-500" />
//                   ))}
//                 </div>
//                 <p className="text-gray-900 font-bold text-lg">15+ Years Experience</p>
//                 <p className="text-gray-600 text-sm">Trusted by thousands</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-12 bg-orange-600 text-white">
//         <div className="container mx-auto px-4 lg:px-8 xl:px-16">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {stats.map((stat, index) => {
//               const IconComponent = stat.icon;
//               return (
//                 <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
//                   <div className="flex justify-center mb-3">
//                     <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
//                       <IconComponent size={24} />
//                     </div>
//                   </div>
//                   <div className="text-3xl md:text-4xl font-bold mb-1">
//                     <CountingAnimation end={stat.number} suffix={stat.suffix || ''} />
//                   </div>
//                   <div className="text-sm md:text-base opacity-90">{stat.label}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Image Gallery Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our State-of-the-Art <span className="text-orange-600">Facility</span>
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Modern equipment and comfortable environment for the best dental care experience
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
//               <img
//                 src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80"
//                 alt="Modern Dental Clinic"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 bg-gradient-to-br from-white to-orange-50">
//                 <h3 className="font-bold text-lg text-gray-900">Modern Facility</h3>
//                 <p className="text-gray-600 text-sm">State-of-the-art dental equipment</p>
//               </div>
//             </div>

//             <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
//               <img
//                 src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80"
//                 alt="Comfortable Treatment Rooms"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 bg-gradient-to-br from-white to-orange-50">
//                 <h3 className="font-bold text-lg text-gray-900">Comfortable Rooms</h3>
//                 <p className="text-gray-600 text-sm">Relaxing treatment environment</p>
//               </div>
//             </div>

//             <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
//               <img
//                 src="https://images.unsplash.com/photo-1643660526741-094639fbe53a?w=600&q=80"
//                 alt="Advanced Technology"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 bg-gradient-to-br from-white to-orange-50">
//                 <h3 className="font-bold text-lg text-gray-900">Advanced Technology</h3>
//                 <p className="text-gray-600 text-sm">Latest dental innovations</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Treatments Section */}
//       <section className="py-16 bg-gray-50 overflow-hidden">
//         <div className="container mx-auto px-4 lg:px-8 xl:px-16">
//           <div className="text-center mb-12 animate-fade-in-up">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mobile-slide-right">
//               Our Dental <span className="text-orange-600">Treatments</span>
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto mobile-slide-left">
//               Comprehensive dental care with state-of-the-art technology and experienced specialists
//             </p>
//           </div>

//           {/* Scrolling Treatments Container */}
//           <div className="relative">
//             <div className="treatments-scroll-container">
//               <div className="treatments-scroll-track">
//                 {[...treatments, ...treatments].map((treatment, index) => {
//                   const IconComponent = treatment.icon;
//                   return (
//                     <div
//                       key={index}
//                       className="treatment-scroll-item bg-white p-6 rounded-xl shadow-md border border-orange-100 group hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex-shrink-0"
//                     >
//                       <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
//                         <IconComponent className="text-orange-600 group-hover:text-white transition-colors" size={24} />
//                       </div>
//                       <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors whitespace-nowrap">{treatment.name}</h3>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
//             <Link to="/treatments">
//               <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
//                 View All Treatments
//                 <ArrowRight className="ml-2" size={20} />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Why Choose <span className="text-orange-600">Aurobindo Dental</span>?
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-md border border-orange-100 text-center group hover:shadow-xl transition-shadow">
//               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
//                 <Award className="text-orange-600 group-hover:text-white transition-colors" size={32} />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Doctors</h3>
//               <p className="text-gray-600">All our dentists have 15+ years of experience in their specializations</p>
//             </div>

//             <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-md border border-orange-100 text-center group hover:shadow-xl transition-shadow">
//               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
//                 <Shield className="text-orange-600 group-hover:text-white transition-colors" size={32} />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Pricing</h3>
//               <p className="text-gray-600">High-quality dental care at competitive and transparent prices</p>
//             </div>

//             <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-md border border-orange-100 text-center group hover:shadow-xl transition-shadow">
//               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
//                 <Sparkles className="text-orange-600 group-hover:text-white transition-colors" size={32} />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Technology</h3>
//               <p className="text-gray-600">State-of-the-art equipment for precise and comfortable treatments</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Before/After Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Beautiful <span className="text-orange-600">Smiles</span> We Create
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               See the transformative results of our dental treatments
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             <div className="rounded-xl overflow-hidden shadow-xl">
//               <img
//                 src="https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?w=600&q=80"
//                 alt="Beautiful Smile"
//                 className="w-full h-80 object-cover"
//               />
//             </div>
//             <div className="rounded-xl overflow-hidden shadow-xl">
//               <img
//                 src="https://images.unsplash.com/photo-1670250492416-570b5b7343b1?w=600&q=80"
//                 alt="Dental Care Result"
//                 className="w-full h-80 object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-orange-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Ready to Transform Your Smile?
//           </h2>
//           <p className="text-xl mb-8 opacity-90">
//             Book your appointment today and experience world-class dental care
//           </p>
//           <Link to="/contact">
//             <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
//               Contact Us Now
//               <ArrowRight className="ml-2" size={20} />
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;








import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Star,
  Sparkles,
  Shield,
  Clock,
  Award,
  Users,
  TrendingUp,
  Smile,
  Activity,
  Zap,
  Crown,
  Scissors,
  Droplet,
  Camera
} from 'lucide-react';
import { Button } from '../components/ui/button';
import CountingAnimation from '../components/CountingAnimation';

const Home = () => {
  const treatments = [
    { name: 'Invisible Aligners', icon: Smile },
    { name: 'Dental Braces', icon: Activity },
    { name: 'Root Canal Treatments', icon: Droplet },
    { name: 'Wisdom Tooth Removal', icon: Scissors },
    { name: 'Dentures', icon: Crown },
    { name: 'Teeth Whitening', icon: Sparkles },
    { name: 'Dental Implants', icon: Zap },
    { name: 'Cosmetic Dentistry', icon: Camera }
  ];

  const stats = [
    { number: '15', label: 'Years Experience', icon: Award, suffix: '+' },
    { number: '10000', label: 'Happy Patients', icon: Users, suffix: '+' },
    { number: '100', label: 'Success Rate', icon: TrendingUp, suffix: '%' },
    { number: '24/7', label: 'Emergency Care', icon: Clock, suffix: '' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 z-10">
              <span className="bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Sparkles size={16} />
                Best Dental Clinic in Madhapur, Hyderabad
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Smile, Our <span className="text-sky-600">Priority</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Aurobindo Dental Hospital is one of the best dental hospitals in Madhapur, Hyderabad. 
                Our expert dentists with 15+ years of experience offer world-class treatments at affordable prices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 text-lg">
                    Book Appointment
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/treatments">
                  <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 px-8 py-6 text-lg">
                    View Treatments
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
                  alt="Dental Clinic"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-sky-100">
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-sky-500 text-sky-500" />
                  ))}
                </div>
                <p className="text-gray-900 font-bold text-lg">15+ Years Experience</p>
                <p className="text-gray-600 text-sm">Trusted by thousands</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-50 text-gray-900">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                      <IconComponent size={24} className="text-sky-700" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-gray-900">
                    <CountingAnimation end={stat.number} suffix={stat.suffix || ''} />
                  </div>
                  <div className="text-sm md:text-base text-gray-700">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Dental <span className="text-sky-600">Treatments</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care with advanced equipment and experienced specialists
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => {
              const IconComponent = treatment.icon;
              return (
                <div
                  key={index}
                  className="bg-sky-50 hover:bg-sky-100 border border-sky-100 hover:border-sky-300 rounded-xl shadow-sm hover:shadow-md transition-all p-6 text-center"
                >
                  <div className="w-12 h-12 bg-sky-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-sky-700" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{treatment.name}</h3>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/treatments">
              <Button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 text-lg">
                View All Treatments
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-sky-600">Aurobindo Dental</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-sky-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-sky-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Doctors</h3>
              <p className="text-gray-600">All our dentists have 15+ years of specialized experience</p>
            </div>

            <div className="bg-white border border-sky-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-sky-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">Quality dental care with transparent pricing</p>
            </div>

            <div className="bg-white border border-sky-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-sky-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Technology</h3>
              <p className="text-gray-600">Cutting-edge tools for precise and comfortable care</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Updated CTA Section (Light Version) */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-cyan-50 text-center rounded-t-3xl border-t border-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience world-class dental care.
          </p>
          <Link to="/contact">
            <Button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-transform hover:scale-105">
              Contact Us Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
