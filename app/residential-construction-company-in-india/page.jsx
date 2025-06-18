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
            <BannerTop page='Residential Construction Company in India
' page2='Services' />

            <SectionHeader
                header={
                    <>
                        Are You Looking for Top Residential <br /> Construction Companies in India?
                    </>
                }
                color="#134377"
            />

            <h5 className='text-center mt-5 fw-bold'>“ YOUR WISH IS OUR COMMAND”</h5>
            <div className="container mb-5">

                <p className='fw-semibold text-secondary'>Sense Projects Pvt. Ltd., a luxury residential construction company since 2007. We specialize in designing and building exceptional homes. With a team of skilled architects and designers, we turn your dream home into a reality. Our focus is on delivering premium construction services at an affordable price, without compromising on quality. With over a decade of experience in the industry, we bring expertise and learning from each project to ensure excellence in every endeavor. Trust us to provide world-class amenities and timely project completion, as we continue to grow and learn with every project we undertake.</p>
            </div>


            <LeadingTrustSection />

            <section className="why_choose_page ptb-50">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Column - Text Content */}
                        <div className="col-md-6">
                            <div className="heading-title-2">
                                <SectionHeader
                                    header='Who We Do?'
                                    color="#134377"
                                />

                            </div>
                            <div className="span-head mb-3">
                                <h4>
                                    Constructing Dreams, <span className='text-warning'>Brick by Brick</span>
                                </h4>
                            </div>
                            <p className='fw-semibold text-muted'>
                                Sense Projects provides residential building works. We not only deliver high-quality work, but we also guide you
                                throughout the entire construction process. Our primary service revolves around constructing new homes. We
                                construct homes from scratch, turning your dreams into a tangible reality. Furthermore, we specialize in
                                renovations and remodeling. Our team of experts is passionate about both interior and exterior design. With
                                meticulous architectural planning, we can create stunning and functional spaces inside and outside your home.
                                We also have professionals in structural engineering who ensure the strength and safety of your home's structure.
                                We handle plumbing and electrical work to ensure the efficient functioning of your home's systems. Additionally,
                                we offer various flooring and tiling options to make your space beautiful.
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

                {/* Second Section */}
                <div className="container pt-30">
                    <div className="row">
                        <div className="col-12">
                            <div className="span-head mb-3">
                                <h4>
                                    Leading <span className='text-warning'>Residential Construction Contractors</span> in India
                                </h4>
                            </div>
                            <p className='fw-semibold text-muted'>
                                Sense Projects Pvt. Ltd. is an award-winning home building contractor in India. Since 2007, we have become one
                                of the top construction companies. Our premium services include high-quality materials, skilled workers, and a
                                qualified technical team, gained through valuable experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <WhoWeAre/>
            <WhyChooseUs/>

            <CTASection h3='Looking for high quality constructor for your project Residential, Industrial Hotels & Resorts? Call N' />
            <PanIndia />

        </>
    )
}

export default ResidentialConstruction