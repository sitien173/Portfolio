import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    // Add 1 month to include the starting month in the count
    // (e.g. Oct to Oct is usually considered 1 year, but diff is 0 months if we don't count inclusive)
    // However, standard diff is usually what's expected for "X years Y months"

    const yearString = years > 0 ? `${years} Year${years > 1 ? 's' : ''}` : '';
    const monthString = months > 0 ? `${months} Month${months > 1 ? 's' : ''}` : '';

    const parts = [];
    if (yearString) parts.push(yearString);
    if (monthString) parts.push(monthString);

    return parts.length > 0 ? parts.join(' ') : 'Less than a month';
  };

  const experiences = [
    {
      role: "Software Engineer",
      company: "Trulioo",
      startDate: "2022-10-01",
      endDate: null, // Current
      description: "Developed and optimized ASP.NET Core backend services for KYC/KYB verification. Optimized matching logic algorithms, increasing match signal accuracy by 40%. Collaborated with Agile teams to deliver features on time in 95% of releases."
    },
    {
      role: ".NET Associate Engineer",
      company: "ELCA Vietnam",
      startDate: "2022-01-01",
      endDate: "2022-06-01",
      description: "Built Angular components and optimized NHibernate queries. Migrated legacy modules to ASP.NET Core, improving maintainability and system security."
    }
  ];

  const formatDate = (dateString) => {
    if (!dateString) return 'Current';
    const date = new Date(dateString);
    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience</h2>

          <div className="timeline">
            {experiences.map((exp, index) => {
              const duration = calculateDuration(exp.startDate, exp.endDate);
              const period = `${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}`;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="timeline-item"
                >
                  <div className="timeline-content">
                    <div className="period-wrapper">
                      <span className="period">{period}</span>
                      <span className="duration">• {duration}</span>
                    </div>
                    <h3 className="role">{exp.role}</h3>
                    <h4 className="company">{exp.company}</h4>
                    <p className="description">{exp.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background: var(--border);
        }

        .timeline-item {
          position: relative;
          padding-left: 3rem;
          padding-bottom: 3rem;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -5px;
          top: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--accent);
          border: 2px solid var(--bg-primary);
        }

        .timeline-content {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid var(--border);
          transition: transform 0.2s ease;
        }

        .timeline-content:hover {
          transform: translateX(10px);
        }

        .period-wrapper {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }

        .period {
          font-size: 0.9rem;
          color: var(--accent);
          font-weight: 500;
        }

        .duration {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-style: italic;
        }

        .role {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .company {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .description {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 20px;
          }
          .timeline-item {
            padding-left: 3.5rem;
          }
          .timeline-item::before {
            left: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
