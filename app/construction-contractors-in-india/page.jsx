import BannerTop from '../../components/BannerTop';
import PanIndia from '../../components/PanIndia';
import SectionHeader from '../../components/SectionHeader';
import ConstructionServices from '../../components/ConstructionServices';
import CTASection from '../../components/CTASection';
import '../../styles/CivilConstructions.css';

export default function CivilConstructionsPage() {
  return (
    <>
      {/* Top Banner */}
      <BannerTop page="Civil Constructions" page2="Services" />

      {/* Section Header */}
      <SectionHeader
        header="#NO.1 Leading Construction Contractors in India | Highest Quality Standards"
        color="#134377"
      />

      {/* Main Section */}
      <section className="bg-white">
        <div className="container">
          <div className="row">
            <h4 className="fw-bold text-justify">
              Are you trying to find the best construction contractors in India? If so, then Sense Project Pvt. Ltd. is the best choice for you. We have a lot of experience and are known for reliability. You can trust us <br /> to do a great job!
            </h4>
          </div>
          <div className="row align-items-center">
            {/* Left Column - Text */}
            <div className="col-md-6 mb-4 mb-md-0">
              <p className='fw-semibold text-justify'>
              We are the top construction contractors in India. We handle everything from planning, buying, and building to finishing and giving the project to the End-User.
              </p>
              <p className='fw-semibold text-justify'>
              Sense Projects Pvt. Ltd. is a well known company in the Building and Housing sector. With expertise, experience, and skilled workers, we can do any type of building project across India. We offer great support for India's growing infrastructure.
              </p>
              <p className='fw-semibold text-justify'>
               Hon'ble Prime Minister Shri. Narendra Modi, during his 2017 Independence Day address, underscored the vision of building a 'New India' by 2022. One of the crucial aspects of 'New India' is its infrastructure, as it will lay the foundation for future success. As a rapidly growing Engineering, Procurement, and Construction (EPC) company in India, Sense Projects Private Limited is actively supporting India's vision for growth. We contribute effectively by utilizing our execution process and engineering knowledge along India's path to progress.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="col-md-6">
              <img
                src='/images/construction-contractors.jpg'
                alt="Construction Project"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row">
          <p className='fw-semibold mt-2 text-justify'>
          We have dedicated design and engineering teams that utilize advanced construction methods to successfully complete complex projects in various terrains.<br/> With our background in infrastructure, commercial, and residential construction, we bring valuable expertise to each project. This is why we are the preferred<br/> civil construction contractors, trusted to deliver quality results.
          </p>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="">
        <div className="container">
        

          <h2 className=" mt-5 mb-4 fw-bold">Quality Management</h2>
          <p className='fw-semibold text-justify'>
           We take great pride in our work and always aim for excellence, which leads to outstanding results reflecting high quality. Our primary objective is to fulfill our clients' requirements and exceed their expectations by going the extra mile. We consistently work towards enhancing our processes and methods to achieve reliable and consistent results. Instead of relying solely on inspections, we promote a culture of quality awareness, aiming for zero defects. To be the preferred choice for our clients, we utilize Total Quality Management and six sigma tools, ensuring top-notch quality and completing projects on time.
          </p>
          <p className='fw-semibold text-justify'>
           We value recognition and empowerment, and we encourage our team to enhance their skills to contribute positively towards achieving our organizational goals. We keep ourselves well-informed about the latest equipment and technical advancements to stay up-to-date with industry standards. By implementing lean construction, we minimize wastage in our processes. We evaluate performance using statistical tools and make timely decisions to enhance efficiency.
          </p>

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
                  <div className="process-content text-start">
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
