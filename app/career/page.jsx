'use client';

import BannerTop from "@/components/BannerTop";
import CareerForm from "@/components/Career-form";
import PanIndia from "@/components/PanIndia";

export default function Career() {
  return (
    <>
      <BannerTop page="Career with us" />

      {/* Current Openings Section */}
      <section className="py-5 bg-light" id="openings">
        <div className="container" data-aos="fade-up">
          <h2 className="text-center mb-5">Current Openings</h2>
          <div className="row g-4">

            {/* Job Cards */}
            {[
              {
                type: "Full-time",
                title: "Senior Interior Designer",
                desc: "Lead high-end residential and commercial projects from concept to completion.",
                points: [
                  "5+ years of interior design experience",
                  "Proficiency in AutoCAD, SketchUp, and Photoshop",
                  "Strong portfolio with luxury design work"
                ]
              },
              {
                type: "On-Site",
                title: "Interior Supervisor",
                desc: "Oversee and coordinate interior site execution to ensure design fidelity and timely completion.",
                points: [
                  "3+ years of experience in interior site supervision",
                  "Strong understanding of interior drawings and materials",
                  "Ability to manage labor, vendors, and site timelines"
                ]
              },
              {
                type: "Full-time",
                title: "Project Coordinator",
                desc: "Manage timelines, resources, and execution across multiple projects.",
                points: [
                  "Strong communication and planning skills",
                  "Experience in vendor and client coordination",
                  "Interior project execution knowledge"
                ]
              },
              {
                type: "Internship",
                title: "Design Intern",
                badgeClass: "bg-warning text-dark",
                desc: "Kickstart your design career with hands-on mentorship and real projects.",
                points: [
                  "Basic design principles and software skills",
                  "Eagerness to learn and grow",
                  "Degree or diploma in Interior Design"
                ]
              }
            ].map((job, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="card h-100 border-0 shadow-sm hover-career-card">
                  <div className="card-body p-4">
                    <span className={`badge ${job.badgeClass || "bg-primary"} mb-2`}>
                      {job.type}
                    </span>
                    <h3 className="card-title h4">{job.title}</h3>
                    <p className="card-text">{job.desc}</p>
                    <ul className="list-unstyled">
                      {job.points.map((point, i) => (
                        <li className="d-flex align-items-start" key={i}>
                          <span className="icon-wrapper me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-success"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                          </span>
                          <span className="text-wrapper">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <a className="btn bg-primary text-light fw-semibold" href="#contact-form">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-5" id="contact-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow hover-career-card">
                <div className="card-body p-5">
                  <h2 className="text-center mb-4 card-text">Get in Touch</h2>
                  <p className="text-center mb-4 card-text">
                    Interested in joining our interior design team? Fill out the form and we’ll connect with you.
                  </p>
                  <CareerForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PanIndia />
    </>
  );
}
