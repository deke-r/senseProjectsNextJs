import BannerTop from '../../components/BannerTop';
import PanIndia from '../../components/PanIndia';
import SectionHeader from '../../components/SectionHeader';
import ConstructionServices from '../../components/ConstructionServices';
import CTASection from '../../components/CTASection';
import '../../styles/CivilConstructions.css';
import LeadingTrustSection from '@/components/LeadingTrustSection';
import InternalFitoutServies from '@/components/InternalFitoutServies';
import RS from '@/components/RoadServices';

export default function roadConstructionCompanyInIndia() {
  return (
    <>
      {/* Top Banner */}
      <BannerTop page="Road Services In India" page2="Services" />

      {/* Section Header */}


      <div className="container">
        <div className="row">
          <SectionHeader header="#INDIA’S No.1 Road Construction Company" color="#134377" />
        </div>
        <div className="row my-3">
          <h4 className='fw-bold text-center'>Roads that meet the demand of today’s every-changing environment.</h4>
          <p className='fw-semibold'>SPPL is emerging road construction contractors in India, since 2007 we are building our reputation on providing the latest proven technological solutions. We have successfully completed numerous remarkable roads & highway projects across the nation. We are focusing on infrastructure construction segments including, roads, highways, bridges, flyovers, institutional, commercial and residential complexes and other infrastructural construction works.
<br/><br/>
Our core strength lies in constructing high-quality roads, delivering the highest standards, and ensuring safety for all.</p>
        </div>
      </div>


   

      {/* Main Section */}

      <SectionHeader
        header="Trusted Road Contractors in India."
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
               Sense Projects Pvt. Ltd. (SPPL) provides world-class road construction services across India. The company has been actively involved in the construction of highways, roads, and a wide range of infrastructure development projects.<br/><br/>

We are backed by a highly skilled workforce and technical experts with a collective experience of over 200 years. Our team operates within a fully accredited, tested, and integrated management system, ensuring exceptional quality, efficiency, and compliance with industry standards. At SPPL, we prioritize building strong, trust-based relationships with our clients. We take the time to truly understand their needs, allowing us to tailor our services to meet their objectives and the expectations of road users. Our commitment is to deliver reliable service, outstanding performance, and results ahead of schedule to our esteemed clientele.<br/><br/>

Our work culture is rooted in safety, environmental responsibility, and accountability. We foster an environment of growth, respect, and collaboration among our employees and the communities we serve.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="col-md-6">
              <img
                src='/images/road--construction-services.webp'
                alt="Construction Project"
                className="img-fluid"
              />
            </div>
          </div>


        </div>
      </section>






      <RS />
      <CTASection h3="Looking for high quality constructor for your project Residential, Industrial Hotels & Resorts? Call Now" />
      <PanIndia />
    </>
  );
}
