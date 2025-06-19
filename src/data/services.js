import { 
  Smartphone, 
  Settings, 
  Bike, 
  CreditCard, 
  Send, 
  Zap 
} from 'lucide-react';

export const services = [
  {
    id: 1,
    name: 'Mobile Recharge',
    icon: Smartphone,
    description: 'Quick and easy mobile recharge for all networks. Instant activation with competitive rates.',
    color: 'from-blue-500 to-blue-600',
    features: [
      'All Network Support',
      'Instant Activation',
      'Competitive Rates',
      '24/7 Available'
    ]
  },
  {
    id: 2,
    name: 'Cycle Repairs',
    icon: Settings,
    description: 'Professional cycle repair services. From basic maintenance to complex repairs.',
    color: 'from-green-500 to-green-600',
    features: [
      'Expert Mechanics',
      'Quality Parts',
      'Quick Service',
      'Warranty Available'
    ]
  },
  {
    id: 3,
    name: 'Motorcycle Tyres',
    icon: Bike,
    description: 'Premium motorcycle tyres from top brands. Installation and balancing services available.',
    color: 'from-red-500 to-red-600',
    features: [
      'Top Brands',
      'Professional Installation',
      'Wheel Balancing',
      'Quality Guarantee'
    ]
  },
  {
    id: 4,
    name: 'Cycle Parts',
    icon: Settings,
    description: 'Genuine cycle parts and accessories. Wide range of components for all cycle types.',
    color: 'from-purple-500 to-purple-600',
    features: [
      'Genuine Parts',
      'Wide Range',
      'All Brands',
      'Competitive Pricing'
    ]
  },
  {
    id: 5,
    name: 'AEPS Services',
    icon: CreditCard,
    description: 'Aadhaar Enabled Payment System for cash withdrawal, balance inquiry, and mini statements.',
    color: 'from-indigo-500 to-indigo-600',
    features: [
      'Cash Withdrawal',
      'Balance Inquiry',
      'Mini Statements',
      'Secure Transactions'
    ]
  },
  {
    id: 6,
    name: 'Money Transfer',
    icon: Send,
    description: 'Secure money transfer services across India. Quick, reliable, and affordable.',
    color: 'from-orange-500 to-orange-600',
    features: [
      'Pan India Coverage',
      'Instant Transfer',
      'Secure & Safe',
      'Low Charges'
    ]
  },
  {
    id: 7,
    name: 'Top-up Services',
    icon: Zap,
    description: 'DTH recharge, broadband bill payments, and other utility top-up services.',
    color: 'from-teal-500 to-teal-600',
    features: [
      'DTH Recharge',
      'Broadband Bills',
      'Utility Payments',
      'Instant Processing'
    ]
  }
];

export const featuredServices = services.slice(0, 6);