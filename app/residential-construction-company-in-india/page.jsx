export const metadata = {
  title: 'Premium Residential Builders in India – Sense Projects Pvt. Ltd.',
  description:
    'From luxury villas to modern apartments, Sense Projects offers high-quality residential construction services across India. We deliver durable homes with top-class architecture and timely execution.',
  keywords: [
    'Custom Home Builders India',
    'Villa Construction Services',
    'Luxury Residential Developers',
    'Apartment Construction Companies',
    'House Construction Specialists',
    'Gated Community Builders',
    'Independent Home Contractors',
    'Smart Home Construction India',
    'Urban Residential Projects',
    'Sustainable Housing Contractors'
  ],
  alternates: {
    canonical: 'https://senseprojects.in/residential-construction-company-in-india',
    types: {
      'application/rss+xml': [
        {
          title: 'Residential Construction Services India » Feed',
          url: 'https://senseprojects.in/feed/',
        },
        {
          title: 'Premium Residential Builders in India – Sense Projects Pvt. Ltd.',
          url: 'https://senseprojects.in/comments/feed/',
        },
      ],
    },
  },
  openGraph: {
    title: 'Premium Residential Builders in India – Sense Projects Pvt. Ltd.',
    description:
      'From luxury villas to modern apartments, Sense Projects offers high-quality residential construction services across India. We deliver durable homes with top-class architecture and timely execution.',
    locale: 'en_US',
    type: 'website',
    siteName: 'Sense Projects Pvt. Ltd.',
    url: 'https://senseprojects.in/residential-construction-company-in-india',
  },
};



import BannerTop from '../../components/BannerTop'
import PanIndia from '../../components/PanIndia'
import CTASection from '../../components/CTASection'
import SectionHeader from '../../components/SectionHeader'
import LeadingTrustSection from '../../components/LeadingTrustSection'
import WhoWeAre from '@/components/WhoWeAre'
import WhyChooseUs from '@/components/WhyChooseUs'


const ResidentialConstruction = () => {
    return (
        <>
            <BannerTop page='Residential Construction Company In India
' page2='Services' />

            <SectionHeader
                header={
                    <>
                        Looking for the Leading Residential Construction Company In India?
                    </>
                }
                color="#134377"
            />

            <h5 className='text-center mt-5 fw-bold'>“Your Vision, Our Commitment”</h5>
            <div className="container mb-5">

                <p className='fw-semibold text-secondary text-justify'>Since 2007, Sense Projects Pvt. Ltd. has been synonymous with luxury residential construction. We specialize in crafting exceptional homes that reflect your unique style and aspirations.

Our team of expert architects and designers works closely with you to transform your dream home into a stunning reality—blending premium quality, innovative design, and functional elegance. With over a decade of experience, we consistently deliver world-class construction services at competitive prices, without ever compromising on quality. We pride ourselves on timely project completion and seamless execution, ensuring every detail exceeds your expectations.

Choose Sense Projects—where excellence meets affordability, and your dream home becomes our masterpiece.

</p>
            </div>


            <LeadingTrustSection />

            <section className="why_choose_page ptb-50">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Column - Text Content */}
                        <div className="col-md-6">
                            <div className="heading-title-2">
                                <SectionHeader
                                    header='Constructing Dreams, Brick by Brick'
                                    color="#134377"
                                />

                            </div>
                            <div className="span-head mb-3">

                            </div>
                            <p className='fw-semibold text-muted text-justify'>
                                At Sense Projects Pvt. Ltd., we specialize in residential construction services that bring your vision to life. Whether you’re building a home from the ground up or upgrading an existing one, we deliver quality craftsmanship, guided expertise, and complete transparency throughout the entire construction process.

                                Our core strength lies in new home construction, where we transform your dreams into structurally sound, beautifully designed living spaces. We also excel in renovation and remodeling projects, offering a perfect blend of style and functionality—both inside and out.

                                From meticulous architectural planning to expert interior and exterior design, our team ensures that every element aligns with your lifestyle. Our structural engineers prioritize strength and safety, while our plumbing and electrical specialists ensure all systems run efficiently. Additionally, we offer a wide range of flooring and tiling solutions to add the finishing touch to your dream home.


                            </p>
                        </div>

                        {/* Right Column - Image */}
                        <div className="col-md-6 text-center">
                            <img
                                src='images/residential-construction-company.jpg'
                                alt="Residential Construction Company in India"
                                className="img-fluid mt-5"
                            />
                        </div>
                    </div>
                </div>

            </section>

            <WhoWeAre />
            <WhyChooseUs />

            <CTASection h3='Looking for high quality constructor for your project Residential, Industrial Hotels & Resorts? Call N' />
            <PanIndia />

        </>
    )
}

export default ResidentialConstruction