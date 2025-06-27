export const metadata = {
  title: 'Collaborative Construction & Agile Project Services – Sense Projects Pvt. Ltd.',
  description:
    'Sense Projects enables efficient collaboration in construction projects across India. Our approach combines Agile construction methods with real-time communication and team integration.',
  keywords: [
    'Collaborative Project Delivery India',
    'Agile Construction Services',
    'Integrated Construction Management',
    'Lean Construction Practices',
    'Construction Partnering Solutions',
    'Team-Based Building Approach',
    'Digital Construction Coordination',
    'Real-Time Project Communication',
    'Construction Workflow Integration',
    'Cross-Disciplinary Construction Teams'
  ],
  alternates: {
    canonical: 'https://senseprojects.in/construction-collaboration-in-india',
    types: {
      'application/rss+xml': [
        {
          title: 'Agile Collaboration in Construction India » Feed',
          url: 'https://senseprojects.in/feed/',
        },
        {
          title: 'Collaborative Construction & Agile Project Services – Sense Projects Pvt. Ltd.',
          url: 'https://senseprojects.in/comments/feed/',
        },
      ],
    },
  },
  openGraph: {
    title: 'Collaborative Construction & Agile Project Services – Sense Projects Pvt. Ltd.',
    description:
      'Sense Projects enables efficient collaboration in construction projects across India. Our approach combines Agile construction methods with real-time communication and team integration.',
    locale: 'en_US',
    type: 'website',
    siteName: 'Sense Projects Pvt. Ltd.',
    url: 'https://senseprojects.in/construction-collaboration-in-india',
  },
};



import BannerTop from '../../components/BannerTop';
import PanIndia from '../../components/PanIndia';
import SectionHeader from '../../components/SectionHeader';
import ConstructionServices from '../../components/ConstructionServices';
import CTASection from '../../components/CTASection';
import '../../styles/CivilConstructions.css';
import CollaborationServices from '@/components/CollabrationServices';

export default function ConstructionCollaborationInIndia() {
  return (
    <>
      {/* Top Banner */}
      <BannerTop page="Collaboration Services Provider in India" page2="Services" />

      {/* Section Header */}
      <SectionHeader
        header="LET’S BUILD TOGETHER | We Are Best Builders in India."
        color="#134377"
      />

      {/* Main Section */}
      <section className="bg-white">
        <div className="container">
     
          <div className="row align-items-center">
            {/* Left Column - Text */}
            <div className="col-md-6 mb-4 mb-md-0">
                 <h4 className="fw-bold text-justify">
             SPPL specializes in delivering hassle-free construction of Residential, Commercial, and Real Estate projects. Partner with us to bring your vision to life.
            </h4>
              <p className='fw-semibold text-muted text-justify'>
               We are one of the leading builders based in Delhi, with extensive experience in real estate collaboration projects across India. Since 2007, we have continuously evolved, delivering impactful contributions to society through our work. Our team comprises highly experienced professionals from the real estate industry with proven expertise in sourcing, acquiring, managing, and developing real estate projects. We actively operate across the country and are open to collaborations pan-India.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="col-md-6">
              <img
                src='/images/construction-collaboration.webp'
                alt="Construction Project"
                className="img-fluid"
              />
            </div>
          </div>

 
        </div>
      </section>

 

      {/* Process Header */}
      <SectionHeader header="Our collaboration processes" color="#134377" />

      {/* Process List */}
      <section className="services-list-section ptb-50">
        <div className="container">
          <div className="process">
            <ul>
              {[
                {
                  title: 'Evaluation of Property & Legal Documentation',
                  steps: [
                    "Our process begins with a thorough evaluation of your property's value by our technical team. Based on this assessment, we present you with the best possible deal. To maintain full transparency, all transactions are backed by legally documented agreements.",
                   
                  ],
                },
                {
                  title: 'Execution',
                  steps: [
                    'This stage is particularly exciting, as we handle all the complexities while you enjoy selecting the design elements—such as raw materials, furnishings, color schemes, ceiling designs, and more',
                   
                  ],
                },
                {
                  title: 'Handover',
                  steps: [
                  "'We deliver a high-quality finish backed by a 10-year warranty*, ensuring long-lasting value and peace of mind. Our commitment to excellence guarantees durability, safety, and satisfaction in every project.*Terms & conditions apply."
                  
                  ],
                },
               
              ].map((item, idx) => (
                <li key={idx}>
                  <div className="process-content">
                    <h3>{item.title}</h3>
                    <table>
                      {item.steps.map((step, sIdx) => (
                        <tr key={sIdx}>
                          <td className='text-justify text-muted '>
                           {step}
                          </td>
                        </tr>
                      ))}
                    </table>
                  </div>
                  <div className="time">
                    <h4>{String(idx + 1).padStart(2, '0')}</h4>
                  </div>
                </li>
              ))}
              <div style={{ clear: 'both' }}></div>
            </ul>
          </div>
        </div>
      </section>

      {/* Other Components */}
      <CollaborationServices />
      <CTASection h3="Looking for high quality constructor for your project Residential, Industrial Hotels & Resorts? Call Now" />
      <PanIndia />
    </>
  );
}
