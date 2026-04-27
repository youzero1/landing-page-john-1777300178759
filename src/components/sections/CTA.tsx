import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.glow} />
          <div className={styles.content}>
            <div className={styles.icon}>
              <Sparkles size={28} />
            </div>
            <h2 className={styles.heading}>
              Ready to build something amazing?
            </h2>
            <p className={styles.sub}>
              Join 10,000+ teams already shipping faster with Lumina. Set up in minutes, scale to millions.
            </p>
            <div className={styles.actions}>
              <a href="#" className={styles.primaryBtn}>
                Start for free
                <ArrowRight size={18} />
              </a>
              <a href="#" className={styles.secondaryBtn}>
                Talk to sales
              </a>
            </div>
            <p className={styles.note}>No credit card required · Free forever plan available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
