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
                 <h4 className="fw-bold">
             SPPL specializes in delivering hassle-free construction of Residential, Commercial, and Real Estate projects. Partner with us to bring your vision to life.
            </h4>
              <p className='fw-semibold text-muted'>
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
      <SectionHeader header="Our processes" color="#134377" />

      {/* Process List */}
      <section className="services-list-section ptb-50">
        <div className="container">
          <div className="process">
            <ul>
              {[
                {
                  title: 'Project Initiation',
                  steps: [
                    'Detailed site assessment [drawing, suggestions & challenges]',
                    'Engineering & Technological assessments',
                    'Work breakdown structure',
                    'Establishing the prototype',
                  ],
                },
                {
                  title: 'Feasibility Study',
                  steps: [
                    'Understanding BOM, BOQ and SOM',
                    'Meticulous project scheduling',
                    'Examine all potential threats & solutions',
                    'Communication with our client',
                  ],
                },
                {
                  title: 'Execution',
                  steps: [
                    'Detailed Project implementation plan',
                    'Precise Execution',
                    'Critical path identification & reduction plan',
                    'Monitoring and controlling',
                    'Implementation of Engineering and Technicalities',
                    'Communication [daily reports, weekly audits and reviews etc]',
                  ],
                },
                {
                  title: 'Project Report',
                  steps: [
                    'Checklist of completed work',
                    'Checking and audits',
                    'Final report & Handover',
                  ],
                },
              ].map((item, idx) => (
                <li key={idx}>
                  <div className="process-content">
                    <h3>{item.title}</h3>
                    <table>
                      {item.steps.map((step, sIdx) => (
                        <tr key={sIdx}>
                          <td>
                            <i className="fas fa-chevron-circle-right"></i> {step}
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
