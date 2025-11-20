import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    "Languages & Frameworks": ["C#", ".NET Core", "TypeScript", "React", "Angular", "JavaScript", "Python"],
    "Databases": ["SQL Server", "MySQL", "PostgreSQL", "MongoDB"],
    "Cloud & DevOps": ["AWS Lambda", "API Gateway", "S3", "Docker", "Git", "GitHub Actions"],
    "Concepts": ["OOP", "DDD", "Clean Architecture", "Microservices", "Agile/Scrum"]
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="skill-category"
              >
                <h3 className="category-title">{category}</h3>
                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid var(--border);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .skill-category:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
        }

        .category-title {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }

        .skill-tag:hover {
          background: var(--accent-glow);
          color: var(--accent);
          border-color: var(--accent);
        }
      `}</style>
    </section>
  );
};

export default Skills;
