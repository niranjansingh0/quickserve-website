import React from 'react';
import { 
  Smartphone, 
  Wrench, 
  CreditCard, 
  Users, 
  Clock, 
  Shield,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Recharge",
      description: "Quick and secure mobile recharge for all networks",
      features: ["All Networks", "Instant Recharge", "24/7 Available"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Cycle Repairs",
      description: "Professional bicycle repair and maintenance services",
      features: ["Expert Mechanics", "Quality Parts", "Same Day Service"]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Money Transfer",
      description: "Safe and fast money transfer services",
      features: ["Secure Transfer", "Low Fees", "Multiple Options"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AEPS Services",
      description: "Aadhaar Enabled Payment System services",
      features: ["Cash Withdrawal", "Balance Inquiry", "Mini Statement"]
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "1000+", label: "Services Completed" },
    { number: "24/7", label: "Available" },
    { number: "5★", label: "Average Rating" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "Excellent service! Quick mobile recharge and very friendly staff.",
      rating: 5
    },
    {
      name: "Priya Singh",
      text: "My cycle was repaired perfectly. Great work at reasonable prices.",
      rating: 5
    },
    {
      name: "Amit Sharma",
      text: "Reliable money transfer service. I use it regularly for sending money home.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Your Local
                  <span className="block text-yellow-400">Service Hub</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  From mobile recharge to cycle repairs, money transfers to AEPS services - 
                  we're your one-stop solution for all daily needs.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setCurrentPage('services')}
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center group"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
                >
                  Contact Us
                </button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span>Open 9 AM - 8 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <span>Trusted & Secure</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Quick Stats</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">{stat.number}</div>
                      <div className="text-sm text-blue-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive range of services to meet all your daily needs. 
              Quality, speed, and reliability are our priorities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('services')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose QuickServe?</h2>
            <p className="text-xl text-gray-600">
              We're committed to providing the best service experience in your neighborhood
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Fast Service</h3>
              <p className="text-gray-600">
                Quick turnaround times for all services. Most requests completed within minutes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Your transactions and data are safe with us. We use the latest security measures.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Experienced professionals ready to help you with friendly, knowledgeable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">
                  - {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Visit us today for all your service needs. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Visit Our Store
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;