export type NavLink = {
  label: string;
  href: string;
};

export type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
};

export type PricingPlan = {
  id: number;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
};

export type Stat = {
  id: number;
  value: string;
  label: string;
};
