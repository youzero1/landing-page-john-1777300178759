import { ArrowRight, Play, Star } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.grid} />
      </div>

      <div className={styles.container}>
        <div className={styles.badge}>
          <Star size={13} className={styles.badgeStar} />
          <span>Trusted by 10,000+ teams worldwide</span>
        </div>

        <h1 className={styles.heading}>
          Build products that
          <span className={styles.highlight}> users love</span>
        </h1>

        <p className={styles.sub}>
          Lumina gives your team the tools, insights, and infrastructure to ship
          exceptional products — faster than ever before.
        </p>

        <div className={styles.actions}>
          <a href="#pricing" className={styles.primaryBtn}>
            Start for free
            <ArrowRight size={18} />
          </a>
          <button className={styles.secondaryBtn}>
            <div className={styles.playIcon}>
              <Play size={14} fill="currentColor" />
            </div>
            Watch demo
          </button>
        </div>

        <div className={styles.social}>
          <div className={styles.avatars}>
            {['A', 'B', 'C', 'D'].map((letter) => (
              <div key={letter} className={styles.avatar}>{letter}</div>
            ))}
          </div>
          <div className={styles.socialText}>
            <div className={styles.stars}>
              {[1,2,3,4,5].map((s) => (
                <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <span>Loved by <strong>10,000+</strong> builders</span>
          </div>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardDots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <span className={styles.cardTitle}>lumina.app / dashboard</span>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.metricRow}>
              {[
                { label: 'Revenue', value: '$124K', change: '+18%' },
                { label: 'Users', value: '48.2K', change: '+34%' },
                { label: 'Conversion', value: '6.4%', change: '+2.1%' },
              ].map((m) => (
                <div key={m.label} className={styles.metric}>
                  <span className={styles.metricLabel}>{m.label}</span>
                  <span className={styles.metricValue}>{m.value}</span>
                  <span className={styles.metricChange}>{m.change}</span>
                </div>
              ))}
            </div>
            <div className={styles.chartPlaceholder}>
              <svg viewBox="0 0 400 80" className={styles.chartSvg}>
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,70 C50,60 80,40 120,35 C160,30 180,50 220,30 C260,10 300,20 340,15 C370,12 390,10 400,8 L400,80 L0,80 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M0,70 C50,60 80,40 120,35 C160,30 180,50 220,30 C260,10 300,20 340,15 C370,12 390,10 400,8"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
