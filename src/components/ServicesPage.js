import React, { useState } from 'react';
import { 
  Smartphone, 
  Wrench, 
  CreditCard, 
  Users, 
  Wifi,
  Settings,
  CheckCircle,
  Clock,
  IndianRupee,
  Phone,
  Banknote,
  UserCheck,
  Eye,
  FileText,
  Zap
} from 'lucide-react';

const ServicesPage = ({ setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', label: 'All Services', icon: <Settings className="w-5 h-5" /> },
    { id: 'mobile', label: 'Mobile Services', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'repair', label: 'Repair Services', icon: <Wrench className="w-5 h-5" /> },
    { id: 'financial', label: 'Financial Services', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'aeps', label: 'AEPS Services', icon: <Users className="w-5 h-5" /> }
  ];

  const services = [
    // Mobile Services
    {
      category: 'mobile',
      title: 'Mobile Recharge',
      subtitle: 'All Networks Available',
      description: 'Quick and secure mobile recharge for all major networks including Airtel, Jio, Vi, BSNL, and more.',
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        'All major networks supported',
        'Instant recharge confirmation',
        'Special offers and cashback',
        'Bulk recharge options'
      ],
      pricing: 'No extra charges',
      time: 'Instant',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      category: 'mobile',
      title: 'DTH Recharge',
      subtitle: 'All DTH Providers',
      description: 'Recharge your DTH connection for uninterrupted entertainment across all service providers.',
      icon: <Wifi className="w-8 h-8" />,
      features: [
        'Tata Sky, Dish TV, Airtel Digital TV',
        'Sun Direct, Videocon D2H',
        'Plan recommendations',
        'Validity reminders'
      ],
      pricing: 'No service fee',
      time: 'Instant',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      category: 'mobile',
      title: 'Data Card Recharge',
      subtitle: 'Internet On-the-Go',
      description: 'Recharge your data cards and dongles for continuous internet connectivity.',
      icon: <Zap className="w-8 h-8" />,
      features: [
        'All major data card providers',
        'High-speed data plans',
        'Validity extension options',
        'Usage monitoring'
      ],
      pricing: 'Competitive rates',
      time: 'Instant',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },

    // Repair Services
    {
      category: 'repair',
      title: 'Bicycle Repair',
      subtitle: 'Expert Mechanics',
      description: 'Professional bicycle repair and maintenance services with quality spare parts and expert workmanship.',
      icon: <Wrench className="w-8 h-8" />,
      features: [
        'Brake adjustment and repair',
        'Chain and gear maintenance',
        'Tire replacement and patching',
        'Complete bike servicing'
      ],
      pricing: '₹25 - ₹200',
      time: '15 min - 1 hours',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      category: 'repair',
      title: 'Bike Repair',
      subtitle: 'Tyre Service',
      description: 'Reliable and affordable cycle and bike repair services including tyre check, brake fixing, and general maintenance.',
      icon: <Phone className="w-8 h-8" />,
      features: [
        'Tyre puncture repair',
        'Brake adjustment and replacement',
        'Chain and gear tuning',
        'Full-body inspection & oiling'
      ],
      pricing: '₹50 - ₹500',
      time: '30 minutes - 1 hours',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    

    // Financial Services
    {
      category: 'financial',
      title: 'Money Transfer',
      subtitle: 'Secure & Fast',
      description: 'Safe and reliable money transfer services to send money across India through various channels.',
      icon: <Banknote className="w-8 h-8" />,
      features: [
        'Instant money transfer',
        'Bank to bank transfer',
        'Cash pickup services',
        'Low transaction fees'
      ],
      pricing: '0.5% - 2% fee',
      time: 'Instant - 30 min',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      category: 'financial',
      title: 'Bill Payment',
      subtitle: 'All Utility Bills',
      description: 'Pay your electricity, water, gas, and other utility bills quickly and securely.',
      icon: <FileText className="w-8 h-8" />,
      features: [
        'Electricity bill payment',
        'Water & gas bills',
        'Telecom bill payment',
        'Insurance premium payment'
      ],
      pricing: 'Minimal charges',
      time: 'Instant',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },

    // AEPS Services
    {
      category: 'aeps',
      title: 'Cash Withdrawal',
      subtitle: 'Aadhaar Based',
      description: 'Withdraw cash using your Aadhaar number and biometric authentication without needing a debit card.',
      icon: <IndianRupee className="w-8 h-8" />,
      features: [
        'No debit card required',
        'Biometric authentication',
        'Daily limit up to ₹10,000',
        'Secure transactions'
      ],
      pricing: '₹5 per transaction',
      time: '2-3 minutes',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      category: 'aeps',
      title: 'Balance Inquiry',
      subtitle: 'Check Account Balance',
      description: 'Check your bank account balance instantly using Aadhaar authentication.',
      icon: <Eye className="w-8 h-8" />,
      features: [
        'Instant balance check',
        'Multiple bank support',
        'Secure verification',
        'No additional charges'
      ],
      pricing: 'Free service',
      time: '30 seconds',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
    {
      category: 'aeps',
      title: 'Mini Statement',
      subtitle: 'Transaction History',
      description: 'Get your last 10 transactions printed instantly using Aadhaar authentication.',
      icon: <FileText className="w-8 h-8" />,
      features: [
        'Last 10 transactions',
        'Instant printout',
        'All major banks',
        'Date-wise sorting'
      ],
      pricing: '₹2 per statement',
      time: '1 minute',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
    {
      category: 'aeps',
      title: 'Aadhaar Pay',
      subtitle: 'Merchant Payment',
      description: 'Make payments to merchants using Aadhaar authentication without cash or cards.',
      icon: <UserCheck className="w-8 h-8" />,
      features: [
        'Cashless payments',
        'Secure transactions',
        'Wide merchant network',
        'Instant confirmation'
      ],
      pricing: 'No extra charges',
      time: '1-2 minutes',
      bgColor: 'bg-violet-50',
      iconColor: 'text-violet-600'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive services to meet all your daily needs. From mobile recharge to financial services, 
              we've got you covered with reliable and affordable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className={`${service.bgColor} rounded-xl p-6 hover:shadow-lg transition-shadow`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`${service.iconColor} p-3 rounded-lg bg-white shadow-sm`}>
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-600">Starting from</div>
                    <div className="text-lg font-bold text-gray-900">{service.pricing}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-sm font-medium text-gray-600 mb-2">{service.subtitle}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.time}
                  </div>
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Get Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Guarantees</h2>
            <p className="text-lg text-gray-600">
              We stand behind our services with these commitments to you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                All services performed with highest quality standards and genuine parts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">On-Time Service</h3>
              <p className="text-gray-600">
                We respect your time and ensure all services are completed as promised.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-600">
                Transparent pricing with no hidden charges. Best rates in the area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Service?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Visit our store or contact us for any of the services above. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className="border-2 border-gray-300 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 hover:text-gray-900 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;