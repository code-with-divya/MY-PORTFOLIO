import React from 'react';
import '../styles/Certificates.css';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      title: "SQL (Intermediate)",
      provider: "HackerRank",
      description: "Complex joins, unions, and sub-queries",
      link: "https://www.hackerrank.com/certificates/9020d928c317",
      icon: <FaAward />,
      date: "2023"
    },
    {
      title: "CSS (Basic)",
      provider: "HackerRank",
      description: "Cascading, inheritance, text styling, layouts, and box model",
      link: "https://www.hackerrank.com/certificates/e60b2407db09",
      icon: <FaAward />,
      date: "2023"
    },
    {
      title: "Java (Basic)",
      provider: "HackerRank",
      description: "Classes, data structures, inheritance, and exception handling",
      link: "https://www.hackerrank.com/certificates/6781866e6938",
      icon: <FaAward />,
      date: "2023"
    },
    {
      title: "JavaScript (Basic)",
      provider: "HackerRank",
      description: "Functions, currying, hoisting, scope, inheritance, and error handling",
      link: "https://www.hackerrank.com/certificates/f3399ae0ce2a",
      icon: <FaAward />,
      date: "2023"
    },
    {
      title: "React (Basic)",
      provider: "HackerRank",
      description: "Routing, rendering elements, state management, handling events, and form validation",
      link: "https://www.hackerrank.com/certificates/612ffe5ee87b",
      icon: <FaAward />,
      date: "2023"
    }
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
            <div className="certificate-content">
              <h3>{certificate.title}</h3>
              <p className="certificate-provider">{certificate.provider} • {certificate.date}</p>
              <p className="certificate-description">{certificate.description}</p>
              <a 
                href={certificate.link} 
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