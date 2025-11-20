import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Tien Ngo. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/sitien173" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/nst" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 2rem 0;
          border-top: 1px solid var(--border);
          margin-top: 4rem;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .footer-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-links a:hover {
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
