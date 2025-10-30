import React from 'react';
import { Check, DollarSign, TrendingDown, BadgePercent, Smile, Activity, Droplet, Scissors, Crown, Sparkles, Zap, Camera, Heart, Wind } from 'lucide-react';

const TreatmentCharges = () => {
  const treatments = [
    { name: 'Invisible aligners', price: '95,000 INR', icon: Smile },
    { name: 'Dental Braces (Ceramic)', price: 'From 50,000 INR', icon: Activity },
    { name: 'Dental Braces (Metal)', price: 'From 35,000 INR', icon: Activity },
    { name: 'Root canal treatments', price: 'From 4,000 INR', icon: Droplet },
    { name: 'Wisdom tooth removal', price: 'From 4,000 INR', icon: Scissors },
    { name: 'Dentures', price: 'From 25,000 INR', icon: Smile },
    { name: 'Teeth whitening', price: 'From 10,000 INR', icon: Sparkles },
    { name: 'Dental Crowns (Zirconia)', price: 'From 7,000 INR', icon: Crown },
    { name: 'Dental Crowns (E-max)', price: 'From 8,000 INR', icon: Crown },
    { name: 'Dental Crowns (Metal)', price: 'From 3,000 INR', icon: Crown },
    { name: 'Dental Implants', price: 'From 25,000 INR per tooth', icon: Zap },
    { name: 'Veneers (Porcelain)', price: 'From 12,000 INR per tooth', icon: Camera },
    { name: 'Teeth Cleaning & Scaling', price: 'From 1,500 INR', icon: Wind },
    { name: 'Tooth Extraction (Simple)', price: 'From 1,000 INR', icon: Scissors },
    { name: 'Gum Treatment', price: 'From 3,000 INR', icon: Heart }
  ];

  const specialPackages = [
    {
      title: 'Full Mouth Rehabilitation',
      description: 'Complete restoration of all teeth',
      price: 'From 2,50,000 INR',
      image: 'https://images.unsplash.com/photo-1670250492416-570b5b7343b1?w=600&q=80',
      features: [
        'Comprehensive oral examination',
        'Complete treatment plan',
        'Crown and bridge work',
        'Implants if required',
        'Follow-up care for 1 year'
      ]
    },
    {
      title: 'All-on-4 Dental Implants',
      description: 'Full arch restoration with 4 implants',
      price: 'From 2,50,000 INR per arch',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80',
      features: [
        '4 premium titanium implants',
        'Temporary prosthesis',
        'Permanent prosthesis',
        'All surgical procedures',
        'Lifetime warranty on implants'
      ]
    },
    {
      title: 'Smile Makeover Package',
      description: 'Complete cosmetic transformation',
      price: 'From 1,50,000 INR',
      image: 'https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?w=600&q=80',
      features: [
        'Teeth whitening',
        'Porcelain veneers',
        'Gum contouring if needed',
        'Digital smile design',
        'Before & after photos'
      ]
    }
  ];

  const affordableReasons = [
    { icon: DollarSign, title: 'Transparent Pricing', desc: 'No hidden costs' },
    { icon: TrendingDown, title: 'Competitive Rates', desc: '30-50% lower than market' },
    { icon: BadgePercent, title: 'Special Offers', desc: 'Regular discounts available' }
  ];

  return (
    <div className="charges-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Treatment <span className="text-orange-600">Charges</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Transparent pricing for all dental treatments at affordable costs
            </p>
            <p className="text-lg text-orange-600 font-semibold">
              Treatment Charges 2022-2023
            </p>
          </div>
        </div>
      </section>

      {/* Why Affordable Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {affordableReasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-md border border-orange-100 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="text-orange-600" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Individual Treatments Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Individual <span className="text-orange-600">Treatments</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => {
              const IconComponent = treatment.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-600 transition-colors">
                        <IconComponent className="text-orange-600 group-hover:text-white transition-colors" size={24} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {treatment.name}
                      </h3>
                      <p className="text-2xl font-bold text-orange-600">
                        {treatment.price}
                      </p>
                    </div>
                    <Check className="text-orange-600 flex-shrink-0" size={24} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Special <span className="text-orange-600">Packages</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold text-orange-600 mb-6">{pkg.price}</div>
                  
                  <div className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            For Details Please Contact:
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-xl font-semibold">
            <a href="tel:9866937777" className="hover:underline">9866937777</a>
            <span>/</span>
            <a href="tel:9032018887" className="hover:underline">9032018887</a>
            <span>/</span>
            <a href="tel:9347294612" className="hover:underline">9347294612</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentCharges;