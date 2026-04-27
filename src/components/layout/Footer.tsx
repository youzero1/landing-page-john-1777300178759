import { Zap, Twitter, Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy', 'Terms', 'Cookies', 'Licenses'],
  Support: ['Documentation', 'Community', 'Contact', 'Status'],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <Zap size={22} className={styles.logoIcon} />
              <span>Lumina</span>
            </a>
            <p className={styles.tagline}>
              Empowering teams to build faster, ship smarter, and grow confidently.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="Twitter" className={styles.socialLink}><Twitter size={18} /></a>
              <a href="#" aria-label="GitHub" className={styles.socialLink}><Github size={18} /></a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}><Linkedin size={18} /></a>
              <a href="#" aria-label="Email" className={styles.socialLink}><Mail size={18} /></a>
            </div>
          </div>

          <div className={styles.links}>
            {Object.entries(footerLinks).map(([category, items]) => (
              <div key={category} className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>{category}</h4>
                <ul className={styles.linkList}>
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className={styles.link}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {new Date().getFullYear()} Lumina, Inc. All rights reserved.</p>
          <p className={styles.madeWith}>Made with ❤️ for builders everywhere</p>
        </div>
      </div>
    </footer>
  );
}
