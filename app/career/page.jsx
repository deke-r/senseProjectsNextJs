'use client';

import BannerTop from "@/components/BannerTop";
import CareerForm from "@/components/Career-form";
import PanIndia from "@/components/PanIndia";

export default function Career() {
  return (
    <>
      <BannerTop page="Career With Us" />

      {/* Current Openings Section */}
      <section className="py-5 bg-light" id="openings">
        <div className="container" data-aos="fade-up">
          <h2 className="text-center mb-5">Current Openings</h2>
          <div className="row g-4">

            {[
              {
                type: "Full-time",
                title: "Senior Project Engineer",
                desc: "Lead large-scale residential and commercial construction projects from planning to handover.",
                points: [
                  "5+ years of experience in civil engineering or construction management",
                  "Proficiency in AutoCAD, MS Project, and project tracking tools",
                  "Strong knowledge of construction codes, safety, and quality standards"
                ]
              },
              {
                type: "On-Site",
                title: "Site Supervisor",
                desc: "Oversee daily site operations to ensure project progress, safety compliance, and quality execution.",
                points: [
                  "3+ years of site supervision experience in construction",
                  "Ability to read and interpret civil drawings and BOQs",
                  "Skilled in labor and contractor coordination"
                ]
              },
              {
                type: "Full-time",
                title: "Project Coordinator",
                desc: "Manage schedules, documentation, and communication between stakeholders for multiple construction projects.",
                points: [
                  "Excellent coordination and reporting skills",
                  "Experience in managing vendors, clients, and procurement",
                  "Familiar with construction timelines and execution workflows"
                ]
              },
              {
                type: "Internship",
                title: "Civil Engineering Intern",
                badgeClass: "bg-warning text-dark",
                desc: "Gain hands-on experience in construction project workflows under the guidance of experienced engineers.",
                points: [
                  "Basic understanding of civil engineering concepts and drawings",
                  "Strong learning attitude and field adaptability",
                  "Pursuing or completed a degree/diploma in Civil Engineering"
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
                    <p className="card-text text-justify">{job.desc}</p>
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
                  <h2 className="text-center mb-4 fw-bold card-text">Get in Touch</h2>
                  <p className="text-center mb-4 f_15 fw-bold card-text">
                    Interested in joining our construction team? Fill out the form and we’ll connect with you.
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
