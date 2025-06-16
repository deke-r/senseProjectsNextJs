import React, { useEffect, useRef, useState } from 'react';

const LeadingTrustSection = () => {
  const [trigger, setTrigger] = useState(0);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: 'assets/images/icon-image/noun_Checkbox.png',
      value: 2368,
      caption: 'Project Completed',
    },
    {
      icon: 'assets/images/icon-image/home2017_005.png',
      value: 130,
      caption: 'Workers Employed',
    },
    {
      icon: 'assets/images/icon-image/noun_Trophy_4000019.png',
      value: 27,
      caption: 'Awards Won',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrigger((prev) => prev + 1); // increment to trigger reanimation
        }
      },
      { threshold: 0.3 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const Counter = ({ target, trigger }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = target;
      const duration = 1000;
      const incrementTime = 10;
      const step = Math.ceil((end - start) / (duration / incrementTime));

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(start);
      }, incrementTime);

      return () => clearInterval(counter);
    }, [trigger]);

    return <div className="timer fw-bold fs-4">{count}</div>;
  };

  return (
    <section className="bg-fix-content position-relative py-5" ref={sectionRef}>
      <div className="video-overlay"></div>
      <div className="container py-5 px-md-3">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="leading-content">
              <div className="span-head">
                <h3 className='text-light'  style={{zIndex:400}}>
                  <span className='text-warning'>Sense Projects:</span> a name of trust
                </h3>
                <p className='text-light'>
                  We're known as top leaders in Design-Build. Our <strong>reliable project delivery</strong> and
                  trustworthiness make us a leading home construction company nationwide.
                </p>
                <h5 className='text-light'>We Build Smart Goals, an Acronym that Stands for:</h5>
                <ul className="list-unstyled text-light">
                  <li className=''>
                    <i className="fas fa-chevron-right me-2 text-warning"></i> Service-oriented
                  </li>
                  <li>
                    <i className="fas fa-chevron-right me-2 text-warning"></i> Maestro
                  </li>
                  <li>
                    <i className="fas fa-chevron-right me-2 text-warning"></i> Admirable
                  </li>
                  <li>
                    <i className="fas fa-chevron-right me-2 text-warning"></i> Realistic
                  </li>
                  <li>
                    <i className="fas fa-chevron-right me-2 text-warning"></i> Time-sensitive
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6 counter-section mt-4 mt-md-0">
            <h2 className='text-warning'>Growth By Numbers</h2>
            <p className="para text-light">We have grown from strength to strength over the past 14 years</p>
            <div className="row">
              {stats.map((stat, index) => (
                <div className="col-md-4 count-box text-center" key={index}>
                  <img src={stat.icon} alt="" className="mx-auto d-block mb-2" />
                  <Counter target={stat.value} className='' trigger={trigger} />
                  <div className="caption">
                    <h4 className="stat-caption text-light">{stat.caption}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingTrustSection;
