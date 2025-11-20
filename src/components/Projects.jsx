import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Identity Verification Service",
      description: "A secure microservice for KYC/KYB verification using ASP.NET Core and AWS Lambda.",
      tags: ["C#", ".NET Core", "MySQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Trulioo Workflow Studio",
      description: "A no-code workflow builder that allows customers to combine multiple Trulioo solutions in configurable, logic-driven identity workflows. It helps businesses close security gaps, identify risk, and adapt to new regulations by optimizing identity verification at onboarding.",
      tags: ["React", "TypeScript", "Java", "Scala", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "Address Cleaning Tool",
      description: "A Python CLI tool for standardizing and correcting address data using heuristics and ML models. Features country-specific formatting, detailed change logging, and automated data augmentation to ensure high-quality identity data.",
      tags: ["Python", "NLP", "Machine Learning", "Pandas", "CLI"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="project-card"
              >
                <div className="card-header">
                  <Folder size={40} className="folder-icon" />
                  <div className="card-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid var(--border);
          transition: transform 0.2s ease, border-color 0.2s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .folder-icon {
          color: var(--accent);
        }

        .card-links {
          display: flex;
          gap: 1rem;
        }

        .card-links a {
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .card-links a:hover {
          color: var(--accent);
        }

        .project-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex-grow: 1;
          line-height: 1.6;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-top: auto;
        }

        .tag {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-family: monospace;
        }
      `}</style>
    </section>
  );
};

export default Projects;
