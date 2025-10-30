// // import React from 'react';
// // import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
// // import { HelpCircle } from 'lucide-react';

// // const FAQs = () => {
// //   const faqs = [
// //     {
// //       id: 'choosing-dentist',
// //       question: 'What to Look For When Choosing a Dentist',
// //       answer: `When selecting a dentist, consider the following factors:

// // • Qualifications and Experience: Check the dentist's educational background, certifications, and years of practice. Specialists should have additional training in their field.

// // • Reputation and Reviews: Look for patient reviews and testimonials. Ask friends and family for recommendations.

// // • Services Offered: Ensure the practice offers the specific treatments you need, from routine cleanings to specialized procedures.

// // • Technology and Equipment: Modern dental practices should use up-to-date technology for diagnosis and treatment.

// // • Office Location and Hours: Choose a conveniently located practice with hours that fit your schedule.

// // • Emergency Care: Ask about the practice's policy for dental emergencies and after-hours care.

// // • Insurance and Payment Options: Verify that the dentist accepts your insurance or offers flexible payment plans.

// // • Comfort and Communication: You should feel comfortable with the dentist and staff. Good communication is essential for quality care.`
// //     },
// //     {
// //       id: 'pedodontist-role',
// //       question: 'What Does a Pedodontist Do?',
// //       answer: `A pedodontist, also known as a pediatric dentist, specializes in the oral health care of children from infancy through adolescence, including those with special healthcare needs. Their responsibilities include:

// // • Preventive Care: Regular dental cleanings, fluoride treatments, and sealants to prevent cavities.

// // • Early Detection: Identifying and treating dental issues early, such as tooth decay and developmental problems.

// // • Treatment: Filling cavities, repairing damaged teeth, and managing dental emergencies in children.

// // • Education: Teaching children and parents about proper oral hygiene, diet, and habits that affect dental health.

// // • Behavior Guidance: Using specialized techniques to help children feel comfortable during dental visits.

// // • Growth Monitoring: Tracking the development of teeth and jaws and addressing any orthodontic concerns early.

// // Pedodontists have additional training beyond dental school to understand the unique needs of growing children and create a positive dental experience.`
// //     },
// //     {
// //       id: 'choosing-pedodontist',
// //       question: 'How to Choose a Pedodontist',
// //       answer: `Selecting the right pedodontist for your child is important. Consider these factors:

// // • Specialized Training: Ensure the pedodontist has completed a residency program in pediatric dentistry after dental school.

// // • Child-Friendly Environment: The office should be welcoming and designed for children, with a friendly staff.

// // • Communication Style: The pedodontist should be able to explain procedures to both you and your child in an age-appropriate manner.

// // • Behavior Management Techniques: Ask about their approach to managing anxious or fearful children.

// // • Emergency Availability: Check if they provide emergency dental care for children.

// // • Parent Involvement: A good pedodontist will involve parents in treatment decisions and education.

// // • Location and Accessibility: Choose a conveniently located practice with suitable appointment times.

// // • Reviews and Recommendations: Seek recommendations from other parents and read online reviews.`
// //     },
// //     {
// //       id: 'lasers-in-dentistry',
// //       question: 'Lasers in Dentistry',
// //       answer: `Laser dentistry uses focused light beams to perform various dental procedures with precision and minimal discomfort. Benefits include:

// // • Minimally Invasive: Lasers can often eliminate the need for scalpels and drills, reducing tissue damage.

// // • Reduced Bleeding: Lasers cauterize as they work, minimizing bleeding during and after procedures.

// // • Faster Healing: Less trauma to tissues means quicker recovery times.

// // • Reduced Discomfort: Many laser procedures require less or no anesthesia.

// // • Precision: Lasers allow for extremely accurate work, preserving more healthy tissue.

// // • Reduced Risk of Infection: The sterilizing effect of lasers reduces the risk of bacterial infections.

// // Common applications include gum reshaping, cavity treatment, teeth whitening, removal of lesions, and treatment of gum disease. Not all procedures can be performed with lasers, and the technology continues to evolve.`
// //     },
// //     {
// //       id: 'laser-gum-treatment',
// //       question: 'Laser Treatment for Gum Disease',
// //       answer: `Laser-assisted periodontal therapy is an advanced treatment for gum disease that offers several advantages:

// // • Procedure: A dental laser is used to remove diseased gum tissue and bacteria from around the tooth root. The laser also helps stimulate the growth of healthy tissue.

// // • Benefits:
// //   - Less pain and discomfort compared to traditional surgery
// //   - Minimal bleeding during and after treatment
// //   - Reduced swelling and faster healing
// //   - Less gum recession and tooth sensitivity
// //   - No need for sutures in many cases
// //   - Reduced risk of infection due to laser sterilization

// // • Recovery: Most patients can return to normal activities immediately after treatment with minimal downtime.

// // • Effectiveness: Studies show laser therapy can be as effective as traditional surgery for treating moderate gum disease, with added patient comfort.

// // Your dentist will evaluate whether laser treatment is suitable for your specific condition, as severe cases may still require traditional surgical approaches.`
// //     },
// //     {
// //       id: 'gum-graft',
// //       question: 'Gum Graft Surgery',
// //       answer: `Gum graft surgery is a periodontal procedure to treat gum recession and restore healthy gum tissue:

// // • Purpose: To cover exposed tooth roots, reduce sensitivity, prevent further recession, and improve the appearance of your smile.

// // • Types of Grafts:
// //   - Connective Tissue Graft: Most common; tissue is taken from the roof of the mouth
// //   - Free Gingival Graft: Similar to connective tissue graft but uses surface tissue
// //   - Pedicle Graft: Tissue is taken from gum near the affected tooth

// // • Procedure: The graft tissue is secured over the exposed root area. The procedure is typically performed under local anesthesia.

// // • Recovery: Most patients experience some discomfort for a few days. Soft diet and special care are needed during healing (1-2 weeks).

// // • Success Rate: Gum grafts have high success rates and can significantly improve both function and aesthetics.

// // • Long-term Benefits: Protects tooth roots, reduces sensitivity, prevents further gum loss, and enhances smile appearance.`
// //     },
// //     {
// //       id: 'scaling-root-planing',
// //       question: 'Scaling and Root Planing',
// //       answer: `Scaling and root planing is a deep cleaning procedure to treat gum disease:

// // • Scaling: Removes plaque, tartar, and bacteria from tooth surfaces and below the gum line. Special instruments or ultrasonic devices are used to clean areas that regular brushing can't reach.

// // • Root Planing: Smooths the tooth root surfaces to help gums reattach to teeth and prevent bacteria from accumulating.

// // • When Needed: Recommended when gum disease has caused deep pockets between teeth and gums (typically deeper than 3-4mm).

// // • Procedure: Usually performed in sections under local anesthesia over multiple visits.

// // • Benefits:
// //   - Stops progression of gum disease
// //   - Reduces inflammation and bleeding
// //   - Decreases pocket depth
// //   - Promotes healing of gum tissue
// //   - May prevent tooth loss

// // • Aftercare: Maintain good oral hygiene, use prescribed mouthwash, and attend regular follow-up appointments.

// // • Success: Most effective when combined with improved home care and regular dental visits.`
// //     },
// //     {
// //       id: 'regenerative-procedures',
// //       question: 'Regenerative Gum Procedures',
// //       answer: `Regenerative procedures aim to restore lost bone and gum tissue caused by periodontal disease:

// // • Bone Grafts: Fragments of your own bone, synthetic bone, or donated bone are placed where bone has been lost. This provides a foundation for natural bone regrowth.

// // • Tissue Stimulating Proteins: Special proteins are applied to encourage the body's natural ability to regenerate bone and tissue.

// // • Guided Tissue Regeneration (GTR): A special membrane is placed between the bone and gum tissue to allow bone and connective tissue to regrow while preventing gum tissue from growing into the area.

// // • Benefits:
// //   - Restores lost bone and tissue
// //   - Reduces pocket depth
// //   - Improves tooth stability
// //   - Enhances long-term tooth preservation
// //   - Creates better foundation for dental implants

// // • Recovery: Healing typically takes several months as new bone and tissue develop.

// // • Success Factors: Depends on extent of damage, patient's overall health, oral hygiene maintenance, and smoking cessation.

// // These advanced procedures can save teeth that might otherwise be lost to severe gum disease.`
// //     },
// //     {
// //       id: 'crown-lengthening',
// //       question: 'Dental Crown Lengthening',
// //       answer: `Crown lengthening is a surgical procedure that reshapes gum tissue and sometimes bone to expose more of a tooth:

// // • Purposes:
// //   - Cosmetic: To correct a "gummy smile" where too much gum shows when smiling
// //   - Restorative: To expose enough tooth structure for a crown or filling
// //   - Functional: To access tooth decay below the gum line

// // • Procedure: The dentist or periodontist removes excess gum tissue and, if necessary, some bone to expose more of the tooth. Performed under local anesthesia.

// // • Recovery: Initial healing takes 2-3 weeks; complete healing may take 2-3 months. During recovery:
// //   - Avoid hard or chewy foods
// //   - Maintain gentle oral hygiene
// //   - Use prescribed pain medication if needed
// //   - Attend follow-up appointments

// // • Results: The procedure creates a more balanced gum line and provides adequate tooth structure for restorations.

// // • Long-term: Results are permanent, though normal aging changes may occur over time.

// // Crown lengthening is a safe, effective procedure that can significantly improve both function and aesthetics.`
// //     },
// //     {
// //       id: 'pocket-reduction',
// //       question: 'Periodontal Pocket Reduction',
// //       answer: `Pocket reduction surgery, also called flap surgery, treats advanced gum disease:

// // • What are Periodontal Pockets? When gum disease progresses, the gums pull away from teeth, creating pockets where bacteria accumulate. Pockets deeper than 5mm are difficult to clean and require surgical treatment.

// // • Procedure:
// //   - Gums are gently folded back to expose tooth roots
// //   - Bacteria, tartar, and diseased tissue are removed
// //   - Tooth roots are cleaned and smoothed
// //   - If needed, bone is reshaped to eliminate areas where bacteria collect
// //   - Gums are sutured back in place to fit snugly around teeth

// // • Benefits:
// //   - Eliminates bacteria and infection
// //   - Reduces pocket depth for easier cleaning
// //   - Prevents further bone and tissue loss
// //   - Saves teeth that might otherwise be lost
// //   - Improves overall oral health

// // • Recovery: 1-2 weeks for initial healing; several months for complete healing. Pain medication and antibiotics may be prescribed.

// // • Maintenance: Regular professional cleanings and excellent home care are essential to maintain results.

// // This procedure has a high success rate in stopping gum disease progression and preserving teeth.`
// //     },
// //     {
// //       id: 'tooth-whitening',
// //       question: 'Tooth Whitening',
// //       answer: `Tooth whitening is a popular cosmetic dental procedure to brighten and enhance your smile:

// // • How It Works: Whitening products contain peroxide-based bleaching agents that penetrate tooth enamel to break down stains and discoloration.

// // • Professional Whitening Options:

// //   In-Office Whitening:
// //   - Performed at the dental office
// //   - Uses high-concentration bleaching gel
// //   - Special light or laser may activate the gel
// //   - Results visible in one visit (typically 1-2 hours)
// //   - Can lighten teeth 3-8 shades
// //   - Most expensive but fastest option

// //   Take-Home Professional Kits:
// //   - Custom-fitted trays made by your dentist
// //   - Professional-grade bleaching gel
// //   - Worn for specified time (usually 2-4 weeks)
// //   - More gradual results
// //   - More affordable than in-office treatment

// // • Over-the-Counter Products:
// //   - Whitening strips, gels, and toothpastes
// //   - Lower concentration of bleaching agent
// //   - Takes longer to see results
// //   - Less expensive but less effective

// // • Who Should Whiten:
// //   - Adults with healthy teeth and gums
// //   - Those with yellowed teeth (usually more responsive)
// //   - People seeking a brighter smile for special occasions

// // • Who Should Avoid:
// //   - Pregnant or nursing women
// //   - Those with sensitive teeth or gum disease
// //   - People with very dark or gray tooth discoloration
// //   - Those with crowns, veneers, or bonding on front teeth (these won't whiten)

// // • Side Effects:
// //   - Temporary tooth sensitivity
// //   - Mild gum irritation (usually from poorly fitted trays)
// //   - Usually resolve shortly after treatment

// // • Results Duration:
// //   - Typically last 1-3 years
// //   - Varies based on diet, oral hygiene, and habits
// //   - Coffee, tea, red wine, and smoking can stain teeth
// //   - Touch-up treatments can maintain brightness

// // • Safety: Professional teeth whitening is safe when supervised by a dentist. Always consult your dentist before starting any whitening treatment.

// // • Maintenance Tips:
// //   - Avoid staining foods and drinks
// //   - Use a straw for colored beverages
// //   - Brush and floss regularly
// //   - Use whitening toothpaste occasionally
// //   - Schedule regular dental cleanings
// //   - Consider touch-up treatments every 6-12 months

// // • Cost: Varies by method, typically from 10,000 INR for professional treatment at our hospital.

// // Professional whitening offers safer, more effective, and longer-lasting results compared to over-the-counter products.`
// //     }
// //   ];

// //   return (
// //     <div className="faqs-page">
// //       {/* Hero Section */}
// //       <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-16">
// //         <div className="container mx-auto px-4">
// //           <div className="text-center max-w-3xl mx-auto">
// //             <div className="flex justify-center mb-6">
// //               <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center">
// //                 <HelpCircle className="text-white" size={40} />
// //               </div>
// //             </div>
// //             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// //               Frequently Asked <span className="text-orange-600">Questions</span>
// //             </h1>
// //             <p className="text-xl text-gray-600 leading-relaxed">
// //               Find answers to common dental questions and learn more about our treatments
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* FAQs Accordion Section */}
// //       <section className="py-16 bg-white">
// //         <div className="container mx-auto px-4 max-w-5xl">
// //           <Accordion type="single" collapsible className="space-y-4">
// //             {faqs.map((faq) => (
// //               <AccordionItem
// //                 key={faq.id}
// //                 value={faq.id}
// //                 className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
// //               >
// //                 <AccordionTrigger className="px-6 py-4 hover:bg-orange-50 transition-colors">
// //                   <div className="flex items-center space-x-4">
// //                     <HelpCircle className="text-orange-600 flex-shrink-0" size={24} />
// //                     <h3 className="text-lg font-bold text-gray-900 text-left">{faq.question}</h3>
// //                   </div>
// //                 </AccordionTrigger>
// //                 <AccordionContent className="px-6 py-4 bg-gradient-to-br from-white to-orange-50">
// //                   <div className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.answer}</div>
// //                 </AccordionContent>
// //               </AccordionItem>
// //             ))}
// //           </Accordion>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-16 bg-orange-600 text-white">
// //         <div className="container mx-auto px-4 text-center">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-4">
// //             Still Have Questions?
// //           </h2>
// //           <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
// //             Our team is here to help! Contact us for personalized answers to your dental concerns.
// //           </p>
// //           <div className="flex flex-wrap justify-center gap-4">
// //             <a href="tel:9866937777" className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
// //               Call Us: 9866937777
// //             </a>
// //             <a href="mailto:aurobindodental@gmail.com" className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
// //               Email Us
// //             </a>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default FAQs;













// import React from 'react';
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
// import { HelpCircle } from 'lucide-react';

// const FAQs = () => {
//   const faqs = [
//     // ... your FAQ data remains unchanged ...
//   ];

//   return (
//     <div className="faqs-page">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto">
//             <div className="flex justify-center mb-6">
//               <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center">
//                 <HelpCircle className="text-white" size={40} />
//               </div>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Frequently Asked <span className="text-sky-600">Questions</span>
//             </h1>
//             <p className="text-xl text-gray-600 leading-relaxed">
//               Find answers to common dental questions and learn more about our treatments
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* FAQs Accordion Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4 max-w-5xl">
//           <Accordion type="single" collapsible className="space-y-4">
//             {faqs.map((faq) => (
//               <AccordionItem
//                 key={faq.id}
//                 value={faq.id}
//                 className="bg-white border border-sky-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
//               >
//                 <AccordionTrigger className="px-6 py-4 hover:bg-sky-50 transition-colors">
//                   <div className="flex items-center space-x-4">
//                     <HelpCircle className="text-sky-600 flex-shrink-0" size={24} />
//                     <h3 className="text-lg font-bold text-gray-900 text-left">{faq.question}</h3>
//                   </div>
//                 </AccordionTrigger>
//                 <AccordionContent className="px-6 py-4 bg-gradient-to-br from-white to-sky-50">
//                   <div className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.answer}</div>
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-sky-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Still Have Questions?
//           </h2>
//           <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
//             Our team is here to help! Contact us for personalized answers to your dental concerns.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <a
//               href="tel:9866937777"
//               className="bg-white text-sky-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
//             >
//               Call Us: 9866937777
//             </a>
//             <a
//               href="mailto:aurobindodental@gmail.com"
//               className="bg-white text-sky-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
//             >
//               Email Us
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FAQs;








import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQs = () => {
  const faqs = [
    // (Your FAQ data remains unchanged)
    {
      id: 'choosing-dentist',
      question: 'What to Look For When Choosing a Dentist',
      answer: `When selecting a dentist, consider the following factors:

• Qualifications and Experience: Check the dentist's educational background, certifications, and years of practice. Specialists should have additional training in their field.

• Reputation and Reviews: Look for patient reviews and testimonials. Ask friends and family for recommendations.

• Services Offered: Ensure the practice offers the specific treatments you need, from routine cleanings to specialized procedures.

• Technology and Equipment: Modern dental practices should use up-to-date technology for diagnosis and treatment.

• Office Location and Hours: Choose a conveniently located practice with hours that fit your schedule.

• Emergency Care: Ask about the practice's policy for dental emergencies and after-hours care.

• Insurance and Payment Options: Verify that the dentist accepts your insurance or offers flexible payment plans.

• Comfort and Communication: You should feel comfortable with the dentist and staff. Good communication is essential for quality care.`
    },
    // ... (all other FAQ items same as before)
  ];

  return (
    <div className="faqs-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                <HelpCircle className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find answers to common dental questions and learn more about our treatments
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Accordion Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white border border-blue-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-blue-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <HelpCircle className="text-blue-600 flex-shrink-0" size={24} />
                    <h3 className="text-lg font-bold text-gray-900 text-left">{faq.question}</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gradient-to-br from-white to-blue-50">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our team is here to help! Contact us for personalized answers to your dental concerns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9866937777"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Call Us: 9866937777
            </a>
            <a
              href="mailto:aurobindodental@gmail.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;

