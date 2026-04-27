import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';
import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'Vercel-like startup',
    avatar: 'SJ',
    quote:
      'Lumina cut our deployment time from 40 minutes to under 30 seconds. The team adoption was instant — the UX is just that intuitive.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Head of Engineering',
    company: 'FinTech Scale-up',
    avatar: 'MC',
    quote:
      'The analytics alone are worth the price. We discovered a major bottleneck we had missed for 6 months within the first week.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Product Lead',
    company: 'Series B SaaS',
    avatar: 'PP',
    quote:
      'We evaluated 8 platforms and Lumina won on every dimension — speed, reliability, support. It\'s become core infrastructure for us.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Tom Williams',
    role: 'Founder',
    company: 'Dev Tools Company',
    avatar: 'TW',
    quote:
      'Customer support is phenomenal. Any issue gets resolved in minutes, not days. That kind of reliability is priceless at our stage.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Aisha Osei',
    role: 'Engineering Manager',
    company: 'E-commerce Platform',
    avatar: 'AO',
    quote:
      'Scaling to Black Friday traffic used to keep me up at night. With Lumina\'s auto-scaling, I slept soundly through our biggest sale ever.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Lucas Ferreira',
    role: 'DevOps Lead',
    company: 'Healthcare Tech',
    avatar: 'LF',
    quote:
      'The security features gave us confidence to pass our compliance audit on the first try. Enterprise-grade without the enterprise complexity.',
    rating: 5,
  },
];

const avatarColors = [
  { bg: '#eef2ff', color: '#6366f1' },
  { bg: '#f0fdf4', color: '#16a34a' },
  { bg: '#fdf2f8', color: '#db2777' },
  { bg: '#fff7ed', color: '#ea580c' },
  { bg: '#f0f9ff', color: '#0284c7' },
  { bg: '#f5f3ff', color: '#7c3aed' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Testimonials</span>
          <h2 className={styles.heading}>Loved by builders everywhere</h2>
          <p className={styles.sub}>
            Don't just take our word for it — here's what teams shipping with Lumina have to say.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={t.id} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={14} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.author}>
                <div
                  className={styles.avatar}
                  style={{
                    background: avatarColors[i % avatarColors.length].bg,
                    color: avatarColors[i % avatarColors.length].color,
                  }}
                >
                  {t.avatar}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role} · {t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
