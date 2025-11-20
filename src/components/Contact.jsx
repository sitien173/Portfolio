import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In Touch</h2>

          <div className="contact-content">
            <div className="contact-info">
              <p className="contact-text">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>

              <div className="contact-details">
                <div className="detail-item">
                  <Mail className="detail-icon" size={20} />
                  <span>sitienbmt@gmail.com</span>
                </div>
                <div className="detail-item">
                  <MapPin className="detail-icon" size={20} />
                  <span>Ho Chi Minh City, Vietnam</span>
                </div>
                <div className="detail-item">
                  <Phone className="detail-icon" size={20} />
                  <span>+84 859 887 543</span>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Hello, I'd like to talk about..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        .contact-text {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--text-secondary);
        }

        .detail-icon {
          color: var(--accent);
        }

        .contact-form {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid var(--border);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        input, textarea {
          width: 100%;
          padding: 0.8rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-primary);
          font-family: inherit;
          transition: border-color 0.2s ease;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: var(--accent);
        }

        @media (min-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr 1.5fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
