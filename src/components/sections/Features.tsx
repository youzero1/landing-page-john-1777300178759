import { Zap, Shield, BarChart2, Globe, RefreshCw, Layers } from 'lucide-react';
import styles from './Features.module.css';

type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bg: string;
};

const features: FeatureItem[] = [
  {
    icon: <Zap size={22} />,
    title: 'Lightning Fast',
    description: 'Deploy in seconds with our optimized infrastructure. Sub-100ms response times globally.',
    color: '#f59e0b',
    bg: '#fffbeb',
  },
  {
    icon: <Shield size={22} />,
    title: 'Enterprise Security',
    description: 'SOC2 Type II certified with end-to-end encryption, SSO, and advanced access controls.',
    color: '#22c55e',
    bg: '#f0fdf4',
  },
  {
    icon: <BarChart2 size={22} />,
    title: 'Deep Analytics',
    description: 'Real-time dashboards and AI-powered insights to help you make smarter decisions, faster.',
    color: '#6366f1',
    bg: '#eef2ff',
  },
  {
    icon: <Globe size={22} />,
    title: 'Global CDN',
    description: '200+ edge locations ensure your users get the fastest experience no matter where they are.',
    color: '#0ea5e9',
    bg: '#f0f9ff',
  },
  {
    icon: <RefreshCw size={22} />,
    title: 'Auto Scaling',
    description: 'Handle traffic spikes effortlessly. Our platform scales up and down automatically.',
    color: '#ec4899',
    bg: '#fdf2f8',
  },
  {
    icon: <Layers size={22} />,
    title: '100+ Integrations',
    description: 'Connect your favourite tools: Slack, GitHub, Jira, Figma, Stripe, and many more.',
    color: '#8b5cf6',
    bg: '#f5f3ff',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Features</span>
          <h2 className={styles.heading}>Everything you need to ship</h2>
          <p className={styles.sub}>
            Stop juggling tools. Lumina brings everything together in one powerful, intuitive platform.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.iconWrap} style={{ color: f.color, background: f.bg }}>
                {f.icon}
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
