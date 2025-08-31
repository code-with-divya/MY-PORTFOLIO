import React from 'react';
import '../styles/Certificates.css';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      title: "Cyber Security",
      provider: "Course completed at Simplilearn",
      description: "Completed foundational training in cyber security concepts and practices.",
      image: "/image/certification/cyber-securtity.jpg",
      icon: <FaAward />,
      date: "2023"
    },
    {
      title: "AI Generative Model",
      provider: "Sandip University – Workshop Course",
      description: "Covered basic AI concepts",
      image: "/image/certification/ai-generative-model.jpg",
      icon: <FaAward />,
      date: "2024"
    },
    {
      title: "Basic Programming in Python",
      provider: "Workshop offered by the FOSSEE Project, IIT Bombay",
      description: "Introductory workshop covering Python programming fundamentals.",
      image: "/image/certification/basic_python_programming.jpg",
      icon: <FaAward />,
      date: "2025"
    },
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="section-header">
        <h2>Certificates</h2>
        <div className="underline"></div>
      </div>
      
      <div className="certificates-container">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <div className="certificate-icon">
              {certificate.icon}
            </div>

            <img 
              src={certificate.image}
              alt={certificate.title}
              className="certificate-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300x200?text=Certificate+Image+Missing";
              }}
            />

            <div className="certificate-content">
              <h3>{certificate.title}</h3>
              <p className="certificate-provider">
                {certificate.provider} • {certificate.date}
              </p>
              <p className="certificate-description">{certificate.description}</p>
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
