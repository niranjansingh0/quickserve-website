import React, { useState, useEffect } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  // Check if shop is open based on business hours
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 6 = Saturday
      const hour = now.getHours();
      const minute = now.getMinutes();

      const currentTime = hour * 60 + minute;

      let open = false;

      if (day === 0) {
        // Sunday: 9:00 AM - 4:00 PM
        open = currentTime >= 540 && currentTime < 960;
      } else if (day >= 1 && day <= 6) {
        // Mon-Sat: 9:00 AM - 8:00 PM
        open = currentTime >= 540 && currentTime < 1200;
      }

      setIsOpen(open);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // every minute

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Optional extra validation if needed:
      if (!formData.name || !formData.phone || !formData.message) {
        alert("Please fill in all required fields.");
        return;
      }
    
      setLoading(true); // start loading
    
      try {
        await fetch(
          'https://script.google.com/macros/s/AKfycby0G01g-JTHy8PcjyePEJfd4X97SErUq9a-uRRYq2hXk-2OFBR74uGSbWmDFWj63mxgxQ/exec',
          {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          }
        );
    
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    
        setTimeout(() => {
          setIsSubmitted(false);
        }, 4000);
      } catch (error) {
        console.error("Form submission failed:", error);
      } finally {
        setLoading(false); // stop loading
      }
    };
    
    
    const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Store",
      details: [
        "Police Lines Chauraha",
        "Barhaj Road, Deoria, Uttar Pradesh 274001",
        "Near 1 India Mall"
      ],
      action: "Get Directions",
      actionLink: "https://maps.app.goo.gl/U2aa9nE6cxw6LVqJ9"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: [
        "+91 9935156392",
        "+91 7905647282",
        "Available 9 AM - 8 PM"
      ],
      action: "Call Now",
      actionLink: "tel:+919935156392"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: [
        "omcyclestorejio@gmail.com"
      ],
      action: "Send Email",
      actionLink: "mailto:omcyclestorejio@gmail.com"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: [
        "+91 9935156392",
        "Quick support available",
        "Share photos for repairs"
      ],
      action: "Chat Now",
      actionLink: "https://wa.me/919935156392"
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
    "Bike Repair",
    "Money Transfer",
    "AEPS Services",
    "Bill Payment",
    "Other"
  ];

  const quickActions = [
    {
      title: "Emergency Repair",
      description: "Need urgent repair service?",
      action: "Call +91 9935156392",
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
    name: "Niranjan Singh",
    service: "Mobile Recharge",
    rating: 5,
    comment: "Excellent service! Quick mobile recharge and very friendly staff."
  },
  {
    name: "Shivam Singh",
    service: "Cycle Repair",
    rating: 5,
    comment: "My cycle was repaired perfectly. Great work at reasonable prices."
  },
  {
    name: "Amit Sharma",
    service: "Money Transfer",
    rating: 5,
    comment: "Reliable money transfer service. I use it regularly for sending money home."
  },
  {
    name: "Pooja Verma",
    service: "SIM Recharge",
    rating: 5,
    comment: "Very helpful and polite staff. Got my SIM recharged instantly without any hassle."
  },
  {
    name: "Rahul Mehra",
    service: "Cycle Repair",
    rating: 4,
    comment: "Quick cycle repair and affordable. Saved me from missing college!"
  },
  {
    name: "Sneh",
    service: "Multi-Service",
    rating: 5,
    comment: "Everything under one roof – recharge, repair, and even AEPS. Highly convenient."
  },
  {
    name: "Manoj Gupta",
    service: "Tyre Service",
    rating: 4,
    comment: "Tyre service was fast and efficient. Good value for money."
  },
  {
    name: "Divya Chauhan",
    service: "Money Transfer",
    rating: 5,
    comment: "They helped me transfer money to my village quickly. Very trustworthy."
  },
  {
    name: "Ramesh Gupta",
    service: "General Services",
    rating: 5,
    comment: "Om Cycle & Recharge Point is my go-to store for small tasks. Reliable and quick."
  },
  {
    name: "Jyoti Pandey",
    service: "General Service",
    rating: 5,
    comment: "Loved the experience. The shopkeeper explains everything clearly and doesn't overcharge."
  },
  {
    name: "Alok Srivastava",
    service: "Cycle Repair",
    rating: 4,
    comment: "Good place for minor cycle issues. Got my brakes fixed in 10 minutes."
  },
  {
    name: "Jitendra Singh",
    service: "AEPS Service",
    rating: 5,
    comment: "I appreciate their AEPS service. It helps people like me who don't have easy bank access."
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
                <form onSubmit={handleSubmit} className="space-y-6">
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
                          pattern="[0-9]{10}"
                          minLength={10}
                          maxLength={10}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter 10-digit phone number"
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
                   type="submit"
                   disabled={loading}
                   className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors ${
                     loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                   } text-white`}
                 >
                   <Send className="w-5 h-5" />
                   <span>{loading ? 'Sending...' : 'Send Message'}</span>
                 </button>
               </form>
               
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
                    <a
                      href={info.actionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
                    >
                      {info.action}
                    </a>
                    
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
                <div className={`mt-4 p-3 rounded-lg ${isOpen ? 'bg-green-50' : 'bg-red-50'}`}>
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-2 ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-500'}`}></div>
                    <span className={`font-medium text-sm ${isOpen ? 'text-green-700' : 'text-red-700'}`}>
                      {isOpen ? 'Currently Open' : 'Closed Now'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
               <div className="bg-white rounded-xl shadow-lg p-6">
                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Us</h3>
               
                 {/* Embedded Google Map */}
                 <div className="rounded-lg overflow-hidden h-48">
                   <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.019336553055!2d83.7848!3d26.4987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915b0416f59f07%3A0x8c3d46e9dcbb33b6!2sPolice%20Line%20Chauraha%2C%20Barhaj%20Rd%2C%20Deoria%2C%20Uttar%20Pradesh%20274101!5e0!3m2!1sen!2sin!4v1718799999999!5m2!1sen!2sin"
                     width="100%"
                     height="100%"
                     allowFullScreen=""
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     className="w-full h-full border-0"
                     title="Om Cycle & Recharge Point Location"
                   ></iframe>
                 </div>
               
                 {/* Button to open in Google Maps */}
                 <a
                   href="https://maps.app.goo.gl/U2aa9nE6cxw6LVqJ9"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="block text-center w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                 >
                   Open in Google Maps
                 </a>
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