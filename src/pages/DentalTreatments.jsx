import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Heart, Baby, Smile, Sparkles, Shield, Scissors, Wrench, Zap, Stethoscope } from 'lucide-react';

const DentalTreatments = () => {
  const treatments = [
    {
      id: 'endodontics',
      icon: Heart,
      title: 'ENDODONTICS',
      image: 'https://images.pexels.com/photos/3762408/pexels-photo-3762408.jpeg?w=600&q=80',
      content: `Endodontics is the branch of dentistry concerning dental pulp and tissues surrounding the roots of a tooth. "Endo" is the Greek word for "inside" and "odont" is Greek for "tooth." Endodontic treatment, or root canal treatment, treats the soft pulp tissue inside the tooth. An endodontist is a specialist who focuses on performing root canal treatment.`
    },
    {
      id: 'pedodontics',
      icon: Baby,
      title: 'PEDODONTICS',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
      content: `Pedodontics, also known as pediatric dentistry, is the branch of dentistry dealing with children from birth through adolescence. This specialty focuses on the dental development, oral health needs, and treatment of children. Pediatric dentists are trained to manage the unique dental issues that occur in growing children and provide a comfortable, child-friendly environment.`
    },
    {
      id: 'orthodontics',
      icon: Smile,
      title: 'ORTHODONTICS',
      image: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?w=600&q=80',
      content: `Orthodontics is a specialty of dentistry that deals with the diagnosis, prevention, and correction of malpositioned teeth and jaws. Treatment includes dental braces, clear aligners (invisible aligners), and other appliances to straighten teeth and correct bite problems. Orthodontic treatment can improve both the function and appearance of your smile.`
    },
    {
      id: 'cosmetic',
      icon: Sparkles,
      title: 'COSMETIC DENTISTRY',
      image: 'https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?w=600&q=80',
      content: `Cosmetic dentistry is dentistry aimed at creating a positive change to your teeth and smile. Common procedures include teeth whitening, veneers, dental bonding, and smile makeovers. Cosmetic dentistry can dramatically improve the appearance of your smile, boosting your confidence and self-esteem. Our experienced cosmetic dentists use the latest techniques to give you the smile you've always wanted.`
    },
    {
      id: 'periodontics',
      icon: Shield,
      title: 'PERIODONTICS',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80',
      content: `Periodontics is the dental specialty focusing on the prevention, diagnosis, and treatment of diseases affecting the gums and supporting structures of the teeth. This includes treatment of gum disease (gingivitis and periodontitis), dental implant placement, gum grafting, and cosmetic periodontal procedures. Healthy gums are essential for healthy teeth and overall oral health.`
    },
    {
      id: 'oral-surgery',
      icon: Scissors,
      title: 'ORAL AND MAXILLOFACIAL SURGERY',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80',
      content: `Oral and Maxillofacial Surgery is the specialty of dentistry that includes the diagnosis, surgical treatment, and management of diseases, injuries, and defects involving both the functional and aesthetic aspects of the hard and soft tissues of the oral and maxillofacial region. Common procedures include wisdom tooth extraction, dental implants, corrective jaw surgery, and treatment of facial trauma.`
    },
    {
      id: 'prosthodontics',
      icon: Wrench,
      title: 'PROSTHODONTICS',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80',
      content: `Prosthodontics is the dental specialty pertaining to the diagnosis, treatment planning, rehabilitation, and maintenance of the oral function, comfort, appearance, and health of patients with clinical conditions associated with missing or deficient teeth. This includes dental crowns, bridges, dentures, and dental implants. Prosthodontists are experts in restoring your smile.`
    },
    {
      id: 'implants',
      icon: Zap,
      title: 'DENTAL IMPLANTS',
      image: 'https://images.unsplash.com/photo-1643660526741-094639fbe53a?w=600&q=80',
      content: `Dental implants are artificial tooth roots that provide a permanent base for fixed, replacement teeth. They are an excellent long-term solution for people suffering from missing teeth, failing teeth, or chronic dental problems. Implants look, feel, and function like natural teeth. The implant process involves placing a titanium post into the jawbone, which integrates with the bone over time, providing a strong foundation for artificial teeth.`
    },
    {
      id: 'oral-medicine',
      icon: Stethoscope,
      title: 'ORAL MEDICINE AND RADIOLOGY',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80',
      content: `Oral Medicine and Radiology is concerned with the diagnosis and management of non-dental pathologies affecting the oral and maxillofacial region. It involves the diagnosis of oral diseases through clinical examination and radiographic imaging. This specialty also deals with the management of medically complex patients and those with special healthcare needs. Advanced imaging techniques like digital X-rays, CBCT scans, and panoramic radiographs help in accurate diagnosis.`
    }
  ];

  return (
    <div className="treatments-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mobile-slide-right">
              Our Dental <span className="text-orange-600">Treatments</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mobile-slide-left">
              Comprehensive dental care services provided by experienced specialists using state-of-the-art technology
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Images Gallery */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80"
                alt="Dental Treatment"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1667133295308-9ef24f71952e?w=400&q=80"
                alt="Orthodontics"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?w=400&q=80"
                alt="Teeth Care"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?w=400&q=80"
                alt="Beautiful Smile"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Accordion Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <Accordion type="single" collapsible className="space-y-4">
            {treatments.map((treatment) => {
              const IconComponent = treatment.icon;
              return (
                <AccordionItem
                  key={treatment.id}
                  value={treatment.id}
                  className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-orange-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-orange-600" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 text-left">{treatment.title}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-gradient-to-br from-white to-orange-50">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img
                          src={treatment.image}
                          alt={treatment.title}
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-gray-700 leading-relaxed">{treatment.content}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default DentalTreatments;