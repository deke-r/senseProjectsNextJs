import BannerTop from '../../components/BannerTop';
import PanIndia from '../../components/PanIndia';
import SectionHeader from '../../components/SectionHeader';
import ConstructionServices from '../../components/ConstructionServices';
import CTASection from '../../components/CTASection';
import '../../styles/CivilConstructions.css';
import LeadingTrustSection from '@/components/LeadingTrustSection';

export default function IF() {
  return (
    <>
      {/* Top Banner */}
      <BannerTop page="Interior Fitout Company in India" page2="Services" />

      {/* Section Header */}
 

<div className="container">
    <div className="row">
            <SectionHeader header="Transform Your Dreams into Reality with Professional Interior Fitout Company in India" color="#134377" />
    </div>
    <div className="row my-3">
        <h4 className='fw-bold text-center'>Building Strong Foundations for a Better Tomorrow</h4>
        <p className='fw-semibold'>Sense Project Pvt Ltd, Interior fit-out in India. It involves design and construction of the interiors of buildings like homes, offices, and commercial spaces. It focuses on creating functional and visually appealing environments. Skilled professionals work together to draft the design, select materials, and execute the project. It includes partitioning spaces, installing ceilings, and integrating technology systems. By availing these services, individuals and businesses can transform their spaces into customized and beautiful settings.</p>
    </div>
</div>


      <LeadingTrustSection/>

      {/* Main Section */}

           <SectionHeader
        header="#NO.1 Leading Bespoke Interior Fit-out"
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
              Sense Project Pvt Ltd. As an Interior fit-out service in India. Such as homes, offices, or commercial spaces, to create functional and creative and pleasing environments in India. Interior fit-out services have gained notable popularity due to the growing demand for well-designed spaces.
Moreover, It does involve various steps. Like starting with draft and design. Based on the client's requirements and preferences. This includes selecting the right colours, materials, furniture, and lighting and enhancing the overall look and feel. Skilled professionals. Such as architects, interior designers, and contractors, work together to execute the project efficiently. We are here to help with the same in Interior design outlook.
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
            <h4 className='fw-bold my-2'>If you are looking for interior fit-out in India with extensive experience for any space</h4>
          <p className='fw-semibold mt-2'>
          Sense Project Pvt. Ltd. Interior fit-out projects in India. Similarly, It often involves installing ceilings and electrical and plumbing works and also includes technology systems. Our aim is to maximize the available space by ensuring optimal functionality and comfort.
Comparatively, Quality and time executed are very important aspects of interior fit-out projects. It is essential to work with reputable contractors who have expertise in the field. Adhering to industry standards and regulations by availing of interior fit-out services. Sense Project Pvt Ltd. is excellent at its work. We also believed in the same trustworthiness wisely to make everything perfect. We check everything to complete our project.
          </p>
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
      <ConstructionServices />
      <CTASection h3="Looking for high quality constructor for your project Residential, Industrial Hotels & Resorts? Call Now" />
      <PanIndia />
    </>
  );
}
