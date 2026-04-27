import { Check } from 'lucide-react';
import styles from './Pricing.module.css';
import type { PricingPlan } from '@/types';

const plans: PricingPlan[] = [
  {
    id: 1,
    name: 'Starter',
    price: 0,
    period: 'month',
    description: 'Perfect for side projects and indie hackers getting started.',
    features: [
      '3 projects',
      '10K monthly events',
      'Basic analytics',
      'Community support',
      '1 team member',
      '1GB storage',
    ],
    highlighted: false,
    cta: 'Get started free',
  },
  {
    id: 2,
    name: 'Pro',
    price: 49,
    period: 'month',
    description: 'For growing teams that need more power and flexibility.',
    features: [
      'Unlimited projects',
      '1M monthly events',
      'Advanced analytics',
      'Priority support',
      '10 team members',
      '50GB storage',
      'Custom domains',
      'API access',
    ],
    highlighted: true,
    cta: 'Start free trial',
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 199,
    period: 'month',
    description: 'For large organizations with custom needs and compliance requirements.',
    features: [
      'Everything in Pro',
      'Unlimited events',
      'Dedicated infrastructure',
      '24/7 SLA support',
      'Unlimited team members',
      '1TB storage',
      'SSO & SAML',
      'Audit logs',
      'Custom contracts',
    ],
    highlighted: false,
    cta: 'Contact sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Pricing</span>
          <h2 className={styles.heading}>Simple, transparent pricing</h2>
          <p className={styles.sub}>
            Start for free. Scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''}`}
            >
              {plan.highlighted && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              <div className={styles.planTop}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>/{plan.period}</span>
                </div>
                <p className={styles.planDesc}>{plan.description}</p>
              </div>

              <ul className={styles.featureList}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={`${styles.checkIcon} ${plan.highlighted ? styles.checkHighlighted : ''}`}>
                      <Check size={14} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`${styles.cta} ${plan.highlighted ? styles.ctaHighlighted : ''}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
