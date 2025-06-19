import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  User,
  FileText,
  Navigation,
  Star,
  CheckCircle
} from 'lucide-react';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Store",
      details: [
        "123 Main Street",
        "City Center, Kanpur, UP 208001",
        "Near Central Mall"
      ],
      action: "Get Directions"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: [
        "+91 98765 43210",
        "+91 70123 45678",
        "Available 9 AM - 8 PM"
      ],
      action: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: [
        "info@quickserve.com",
        "support@quickserve.com",
        "Response within 2 hours"
      ],
      action: "Send Email"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: [
        "+91 98765 43210",
        "Quick support available",
        "Share photos for repairs"
      ],
      action: "Chat Now"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 4:00 PM" }
  ];

  const services = [
    "Mobile Recharge",
    "DTH Recharge",
    "Cycle Repair",
    "Mobile Repair",
    "Money Transfer",
    "AEPS Services",
    "Bill Payment",
    "Other"
  ];

  const quickActions = [
    {
      title: "Emergency Repair",
      description: "Need urgent repair service?",
      action: "Call +91 98765 43210",
      icon: <Phone className="w-5 h-5" />,
      bgColor: "bg-red-50",
      textColor: "text-red-600"
    },
    {
      title: "Service Inquiry",
      description: "Questions about our services?",
      action: "WhatsApp us",
      icon: <MessageCircle className="w-5 h-5" />,
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      title: "Visit Store",
      description: "Come to our physical location",
      action: "Get directions",
      icon: <Navigation className="w-5 h-5" />,
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      service: "Mobile Repair",
      rating: 5,
      comment: "Excellent service! My phone was repaired quickly and works perfectly now."
    },
    {
      name: "Priya Singh",
      service: "Money Transfer",
      rating: 5,
      comment: "Very reliable and fast money transfer service. Always use QuickServe for this."
    },
    {
      name: "Amit Kumar",
      service: "Cycle Repair",
      rating: 5,
      comment: "Great work on my cycle repair. Professional and affordable service."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with us for any service needs, questions, or support. 
              We're here to help and always ready to serve you.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <div key={index} className={`${action.bgColor} rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer`}>
                <div className={`${action.textColor} mb-3 flex justify-center`}>
                  {action.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{action.description}</p>
                <span className={`text-sm font-medium ${action.textColor}`}>{action.action}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll respond within 2 hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="text-blue-600 mb-4">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
                      {info.action}
                    </button>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-green-700 font-medium text-sm">Currently Open</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Us</h3>
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Interactive Map</p>
                    <p className="text-sm text-gray-400">123 Main Street, City Center, Kanpur</p>
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Open in Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what our satisfied customers have to say about our services and support.
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
                <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">What are your service charges?</h3>
              <p className="text-gray-600">Our service charges vary depending on the type of service. We offer competitive rates and transparent pricing with no hidden fees.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">How long does a typical repair take?</h3>
              <p className="text-gray-600">Most mobile repairs are completed within 30 minutes to 2 hours. Cycle repairs typically take 1-3 hours depending on the complexity.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Do you provide warranty on repairs?</h3>
              <p className="text-gray-600">Yes, we provide a 30-day warranty on all repair services. If you face any issues with the repaired item, we'll fix it free of charge.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Can I track my money transfer?</h3>
              <p className="text-gray-600">Absolutely! We provide transaction receipts and tracking numbers for all money transfers. You can also call us for status updates.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;