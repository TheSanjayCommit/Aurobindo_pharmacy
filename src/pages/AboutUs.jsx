import React from 'react';
import { GraduationCap, Award, UserCheck, Heart, Stethoscope } from 'lucide-react';

const AboutUs = () => {
  const doctors = [
    {
      name: 'Dr. B. Sarala Kumari',
      qualification: 'MDS',
      specialization: 'Prosthodontist, Implantologist & TMD Specialist',
      image: 'https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=400&q=80'
    },
    {
      name: 'Dr. Ch. Dharmendra',
      qualification: 'MDS',
      specialization: 'Orthodontist',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
    },
    {
      name: 'Dr. P. Sandhya',
      qualification: 'MDS',
      specialization: 'Endodontist',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&q=80'
    },
    {
      name: 'Dr. Ashwin',
      qualification: 'MDS',
      specialization: 'Oral Surgeon and Implantologist',
      image: 'https://images.unsplash.com/photo-1667133295308-9ef24f71952e?w=400&q=80'
    },
    {
      name: 'Dr. Lavanya',
      qualification: 'MDS',
      specialization: 'Periodontist',
      image: 'https://images.pexels.com/photos/6502544/pexels-photo-6502544.jpeg?w=400&q=80'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Your comfort and wellbeing are our top priorities'
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'Committed to delivering the highest quality dental care'
    },
    {
      icon: Stethoscope,
      title: 'Advanced Techniques',
      description: 'Using the latest technology and proven methods'
    },
    {
      icon: UserCheck,
      title: 'Trusted Expertise',
      description: '15+ years of combined dental experience'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-blue-600">Aurobindo Dental Hospital</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We have all 15+ years experienced Dentists working with us, providing exceptional dental care with dedication and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/6502552/pexels-photo-6502552.jpeg?w=800&q=80"
                alt="Dental Team"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?w=800&q=80"
                alt="Modern Equipment"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-600">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Consultants Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Expert <span className="text-blue-600">Consultants</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our team of highly qualified dental specialists with extensive experience in their respective fields
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 text-center group hover:scale-105"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-3 border-blue-200 shadow-md group-hover:border-blue-400 transition-colors">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {doctor.name}
                </h3>
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Award className="text-blue-600" size={16} />
                  <p className="text-blue-600 font-semibold text-sm">{doctor.qualification}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {doctor.specialization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group hover:scale-105 transition-transform">
                <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-gray-600 text-lg">Years Experience</p>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-5xl font-bold text-blue-600 mb-2">5</div>
                <p className="text-gray-600 text-lg">Specialist Doctors</p>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-600 text-lg">Patient Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-500 leading-relaxed">
            <p>
              best dental clinic in madhapur, hyderabad, best dental hospital in madhapur, hyderabad, dental braces cost in hyderabad, Dental implant cost in hyderabad, root canal treatment cost in hyderabad, cosmetic dentistry, dental crowns cost in hyderabad, dentures cost in hyderabad, Invisible aligners cost in hyderabad, Root canal treatments cost in hyderabad, teeth whitening cost in hyderabad, wisdom tooth removal cost in hyderabad, ceramic braces cost in hyderabad, Metal braces cost in hyderabad, zirconia crowns cost in hyderabad, E max crowns cost in hyderabad, Metal crowns cost in hyderabad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
