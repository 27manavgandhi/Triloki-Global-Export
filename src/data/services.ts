export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'global-brokerage',
    name: 'Global Brokerage Services',
    description: 'Specialist in agricultural commodities connecting credible buyers and sellers worldwide.',
    features: [
      'International market access',
      'Buyer-seller matching',
      'Price negotiation support',
      'Contract facilitation'
    ]
  },
  {
    id: 'trade-consulting',
    name: 'Trade & Hedge Consulting',
    description: 'Expert guidance from contract negotiation to final delivery.',
    features: [
      'Contract negotiation support',
      'Risk management strategies',
      'Market timing advice',
      'Delivery coordination'
    ]
  },
  {
    id: 'market-analysis',
    name: 'Market Analysis & Reporting',
    description: 'Real-time global pricing, demand, and supply intelligence.',
    features: [
      'Price trend analysis',
      'Supply-demand forecasts',
      'Market opportunity identification',
      'Regular market updates'
    ]
  },
  {
    id: 'quality-assurance',
    name: 'Quality Assurance',
    description: 'Meticulous follow-up at every stage of trade.',
    features: [
      'Pre-shipment inspection',
      'Quality control monitoring',
      'Documentation verification',
      'Standards compliance'
    ]
  }
];

export const coreValues = [
  {
    id: 'expertise',
    name: 'Expertise',
    description: 'Technical understanding and hands-on capabilities'
  },
  {
    id: 'commitment',
    name: 'Commitment',
    description: 'End-to-end support from sourcing to contract conclusion'
  },
  {
    id: 'integrity',
    name: 'Integrity',
    description: 'Honesty, transparency, and trustworthiness'
  },
  {
    id: 'execution',
    name: 'Execution',
    description: 'Adherence to sound trade practices'
  },
  {
    id: 'innovation',
    name: 'Innovation',
    description: 'Constantly enhancing Standard Operating Procedures'
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    description: 'Collaborative approach to deliver excellence'
  }
];