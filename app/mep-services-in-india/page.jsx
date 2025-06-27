export const metadata = {
  title: 'Mechanical, Electrical & Plumbing (MEP) Solutions – Sense Projects Pvt. Ltd.',
  description:
    'Get reliable MEP engineering and contracting services across India. Sense Projects specializes in HVAC design, fire safety systems, power distribution, and plumbing integration for commercial and industrial projects.',
  keywords: [
    'MEP Engineering Consultants India',
    'HVAC Contractors Delhi NCR',
    'Plumbing and Firefighting Systems',
    'Electrical System Integrators',
    'Building Services Engineering India',
    'Technical Services Contractors',
    'Fire Protection Installation India',
    'MEP Design and Build Solutions',
    'Energy-Efficient HVAC Systems',
    'Power and Utility Service Experts'
  ],
  alternates: {
    canonical: 'https://senseprojects.in/mep-contractor-in-delhi/',
    types: {
      'application/rss+xml': [
        {
          title: 'MEP Solutions & Building Services » Feed',
          url: 'https://senseprojects.in/feed/',
        },
        {
          title: 'Mechanical, Electrical & Plumbing (MEP) Solutions – Sense Projects Pvt. Ltd.',
          url: 'https://senseprojects.in/comments/feed/',
        },
      ],
    },
  },
  openGraph: {
    title: 'Mechanical, Electrical & Plumbing (MEP) Solutions – Sense Projects Pvt. Ltd.',
    description:
      'Get reliable MEP engineering and contracting services across India. Sense Projects specializes in HVAC design, fire safety systems, power distribution, and plumbing integration for commercial and industrial projects.',
    locale: 'en_US',
    type: 'website',
    siteName: 'Sense Projects Pvt. Ltd.',
    url: 'https://senseprojects.in/mep-contractor-in-delhi/',
  },
};



import BannerTop from '../../components/BannerTop';
import PanIndia from '../../components/PanIndia';
import SectionHeader from '../../components/SectionHeader';
import ConstructionServices from '../../components/ConstructionServices';
import CTASection from '../../components/CTASection';
import '../../styles/CivilConstructions.css';
import MepServices from '@/components/MepServices';

export default function MepServicesInIndia() {
  return (
    <>
      {/* Top Banner */}
      <BannerTop page="#No. 1 - MEP Services Contractor in India" page2="Services" />

      {/* Section Header */}
      <SectionHeader
        header="#INDIA’S No.1 MEP Services Company"
        color="#134377"
      />

      {/* Main Section */}
      <section className="bg-white">
        <div className="container">

          <div className="row align-items-center">
            {/* Left Column - Text */}
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="row">
                <h4 className="fw-bold">
                  Looking For MEP & Fire Fighting Services in India?
                </h4>
                <h6 className='fw-bold my-2 text-justify'>SPPL is a top MEP (Mechanical, Electrical, and Plumbing) company in India, <br />delivering end-to-end MEP services with quality and efficiency.</h6>
              </div>
              <p className='fw-semibold mt-2 text-muted text-justify'>
                SPPL is renowned for its expertise in MEP services in India, our team comprises of best interior designers, experienced MEP engineers, veteran project managers and skilled laborers. This enables us to satisfy diverse requirements of residential, commercial, institutional, hospitality, industrial and retail projects.
              </p>
              <p className='fw-semibold text-muted text-justify'>
                Since MEP plays an important role in building construction and known as lifeline of any building, therefore it is important they are developed with utmost accuracy and perfection, we ensure attention to detail and best material and top brands to be used at your space, so that you get lifelong satisfaction.
              </p>
              <p className='fw-semibold text-muted text-justify'>
                SPPL has gained popularity as best MEP contractors in India within a very short period of time, our MEP services includes a package of mechanical and electrical services for a number of facilities ranging from residential to commercial buildings, namely processing industries, shopping malls, and housing compounds, including towers. These engineering solutions consist of installing air-condition systems, setting up power and lighting systems, water supply and drainage, fire- fighting systems, Building Management Systems, telephone and data systems.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="col-md-6">
              <img
                src='/images/mep-services-in-india.webp'
                alt="Construction Project"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row">
            <h4 className='fw-bold'>Heating, Ventilation & Air Conditioning Services in India</h4>
            <p className='fw-semibold mt-2 text-muted text-justify'>
              Our company has extensive experience handling large-scale, high-value projects involving sophisticated and complex installations. We offer comprehensive end-to-end turnkey solutions and accept projects at any stage across MEP, firefighting, and related services throughout India
            </p>
            <p className='fw-semibold mt-2 text-muted text-justify'>
              Sense Projects is a rapidly growing HVAC contractor, delivering Heating, Ventilation, and Air Conditioning solutions to clients nationwide. As a leading MEP contractor, we successfully execute turnkey HVAC projects across pan India with a strong commitment to quality and client satisfaction.
            </p>
            <p className='fw-semibold mt-2 text-justify'>
              Our team has extensive experience working with commercial, residential, and industrial buildings. We specialize in the installation, inspection, and maintenance of fire protection systems.
            </p>
          </div>
        </div>
      </section>





      <MepServices />
      <CTASection h3="Looking for high quality constructor for your project Residential, Industrial Hotels & Resorts? Call Now" />
      <PanIndia />
    </>
  );
}
