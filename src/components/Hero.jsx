import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-layout">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-content"
          >
            <span className="greeting">Hello, I'm</span>
            <h1 className="name">Tien Ngo</h1>
            <h2 className="role">Mid-Level Full-Stack Developer</h2>
            <p className="bio">
              Specializing in C# .NET, React, Angular, and TypeScript.
              I deliver secure, high-performance enterprise applications and scalable microservices.
            </p>

            <div className="cta-group">
              <a href="#projects" className="btn btn-primary">
                View Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/sitien173" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={20} /></a>
              <a href="https://linkedin.com/in/nst" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
              <a href="mailto:sitienbmt@gmail.com" className="social-icon"><Mail size={20} /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-image-container"
          >
            <div className="hero-image-wrapper">
              <img src="/Portfolio/Avata.jpg" alt="Tien Ngo" className="hero-image" />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: var(--header-height);
        }

        .hero-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-content {
          max-width: 600px;
        }

        .hero-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          order: -1; /* Image on top for mobile */
        }

        .hero-image-wrapper {
          position: relative;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--accent);
          box-shadow: 0 0 20px rgba(100, 255, 218, 0.2);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .greeting {
          color: var(--accent);
          font-weight: 500;
          margin-bottom: 1rem;
          display: block;
        }

        .name {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .role {
          font-size: 2rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .bio {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border-radius: 4px;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .btn-primary {
          background: var(--text-primary);
          color: var(--bg-primary);
        }

        .btn-primary:hover {
          background: #fff;
          transform: translateY(-2px);
        }

        .btn-outline {
          border: 1px solid var(--border);
          color: var(--text-primary);
        }

        .btn-outline:hover {
          border-color: var(--text-primary);
          background: rgba(255,255,255,0.05);
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-icon {
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .social-icon:hover {
          color: var(--accent);
        }

        @media (min-width: 768px) {
          .hero-layout {
            grid-template-columns: 1.5fr 1fr;
            order: unset;
          }
          
          .hero-image-container {
            order: unset; /* Reset order for desktop */
            justify-content: flex-end;
          }

          .hero-image-wrapper {
            width: 300px;
            height: 300px;
          }

          .name {
            font-size: 4rem;
          }

          .role {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
