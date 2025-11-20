import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                I am a Fullstack Developer with 3 years of experience delivering secure, high-performance enterprise applications.
                                My expertise spans across C# .NET, TypeScript, Angular, and React.
                            </p>
                            <p>
                                I have experience working with both microservices and monolithic architectures, utilizing SQL/NoSQL databases
                                like SQL Server, MySQL, PostgreSQL, and MongoDB. I am well-versed in Agile development methodologies,
                                Clean Architecture, and Domain-Driven Design (DDD).
                            </p>
                            <p>
                                Currently, I am working as a Software Engineer at Trulioo, optimizing backend services for global identity verification.
                            </p>
                        </div>
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">2</span>
                                <span className="stat-label">Companies</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Major Projects</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        .about-text p {
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding: 2rem;
          background: var(--bg-secondary);
          border-radius: 8px;
          border: 1px solid var(--border);
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        @media (min-width: 768px) {
          .about-content {
            grid-template-columns: 2fr 1fr;
          }
          
          .about-stats {
            grid-template-columns: 1fr;
            align-content: center;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
