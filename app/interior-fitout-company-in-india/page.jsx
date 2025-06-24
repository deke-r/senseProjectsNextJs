import BannerTop from '../../components/BannerTop';
import PanIndia from '../../components/PanIndia';
import SectionHeader from '../../components/SectionHeader';
import ConstructionServices from '../../components/ConstructionServices';
import CTASection from '../../components/CTASection';
import '../../styles/CivilConstructions.css';
import LeadingTrustSection from '@/components/LeadingTrustSection';
import InternalFitoutServies from '@/components/InternalFitoutServies';

export default function IF() {
  return (
    <>
      {/* Top Banner */}
      <BannerTop page="Complete Interior Fit-Out Solutions — Designed to Inspire, Built to Last" page2="Services" />

      {/* Section Header */}


      <div className="container">
        <div className="row">
          <SectionHeader header="From Concept to Completion — Interior Fit-Out Solutions That Deliver Your Dream Space" color="#134377" />
        </div>
        <div className="row my-3">
          <h4 className='fw-bold text-center'>Building Strong Foundations for a Better Tomorrow</h4>
          <p className='fw-semibold'>Sense Projects Pvt. Ltd. – Interior Fit-Out Solutions Across India

At Sense Projects, we create functional and visually striking interiors for homes, offices, and commercial spaces. From space planning and partitions to ceilings and smart integrations, we handle every detail with precision and care.

Our expert team ensures seamless execution, transforming your space into a customized environment that reflects your vision and enhances utility.</p>
        </div>
      </div>


      <LeadingTrustSection />

      {/* Main Section */}

      <SectionHeader
        header="#No.1 Leading Bespoke Interior Fit-Out Company in India"
        color="#134377"
      />
      <section className="bg-white">
        <div className="container">
          <div className="row">

          </div>
          <div className="row align-items-center">
            {/* Left Column - Text */}
            <div className="col-md-6 mb-4 mb-md-0">
              <p className='fw-semibold'>
               Sense Projects Pvt. Ltd. is a trusted name in interior fit-out services across India, delivering tailored solutions for homes, offices, and commercial spaces. Our focus is on creating functional, creative, and aesthetically pleasing environments that reflect each client’s vision and purpose.

As demand for professionally designed interiors grows, our expertise stands out. We begin with conceptual design based on your requirements, followed by careful selection of materials, furniture, lighting, and finishes — all managed by experienced architects, interior designers, and contractors.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="col-md-6">
              <img
                src='/images/interior-fitout-company.webp'
                alt="Construction Project"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row">
            <h4 className='fw-bold my-2'>Interior Fit-Out + Construction Expertise</h4>
            <p className='fw-semibold mt-2'>
             From design to execution, Sense Projects handles every stage of fit-out, including partitioning, ceiling installation, electrical and plumbing work, and smart technology integration. We aim to maximize space efficiency while ensuring comfort, quality, and compliance with all industry standards.
Timely delivery and quality execution are at the core of every project we undertake. Our team works with transparency and precision to ensure excellence from start to finish.
            </p>
          </div>
        </div>
      </section>



      {/* Process Header */}
      <SectionHeader header="Our Interior Fit-Out Process" color="#134377" />

      {/* Process List */}
      <section className="services-list-section ptb-50">
        <div className="container">
          <div className="process">
            <ul>
            {[
                {
                  title: 'Project Initiation',
                  steps: [
                    'Detailed site assessment (drawings, inputs, constraints)',
                    'Engineering and technology review',
                    'Work breakdown structure',
                    'Prototype establishment',
                  ],
                },
                {
                  title: 'Feasibility Study',
                  steps: [
                    'BOM, BOQ & SOM evaluation',
                    'Detailed project scheduling',
                    'Risk analysis & solution planning',
                    'Transparent client communication',
                  ],
                },
                {
                  title: 'Execution',
                  steps: [
                    'Comprehensive implementation plan',
                    'Critical path tracking & risk mitigation',
                    'Daily reporting & weekly audits',
                    'Seamless execution with technical precision',
                  ],
                },
                {
                  title: 'Completion & Handover',
                  steps: [
                    'Final checklist and audits',
                    'Project summary report',
                    'Professional handover of the completed work',
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
      <InternalFitoutServies />
      <CTASection h3="Looking for high quality constructor for your project Residential, Industrial Hotels & Resorts? Call Now" />
      <PanIndia />
    </>
  );
}
