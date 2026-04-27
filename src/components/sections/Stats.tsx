import styles from './Stats.module.css';
import type { Stat } from '@/types';

const stats: Stat[] = [
  { id: 1, value: '10K+', label: 'Teams worldwide' },
  { id: 2, value: '99.9%', label: 'Uptime SLA' },
  { id: 3, value: '200ms', label: 'Avg. deploy time' },
  { id: 4, value: '$2B+', label: 'Revenue processed' },
];

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {stats.map((s) => (
          <div key={s.id} className={styles.stat}>
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
