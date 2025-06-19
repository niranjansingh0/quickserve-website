import React from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Clock, 
  MapPin, 
  Heart,
  Lightbulb,
  Shield,
  Hand,      // ✅ Replacing 'Handshake'
  Star,
  CheckCircle,
  Calendar
} from 'lucide-react';


const AboutPage = ({ setCurrentPage }) => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description: "We put our customers at the center of everything we do, ensuring satisfaction in every interaction."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Security",
      description: "Your trust is our foundation. We maintain the highest standards of security and transparency."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Continuously improving our services with the latest technology and innovative solutions."
    },
    {
     icon: <Hand className="w-8 h-8" />,
     title: "Community Service",
     description: "Committed to serving our local community and building lasting relationships."
   }

  ];

  const milestones = [
    {
      year: "2020",
      title: "QuickServe Founded",
      description: "Started as a small mobile recharge shop with a vision to serve the community."
    },
    {
      year: "2021",
      title: "Services Expanded",
      description: "Added cycle repair services and money transfer to meet growing community needs."
    },
    {
      year: "2022",
      title: "AEPS Integration",
      description: "Became an authorized AEPS service provider, bringing banking services to the doorstep."
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description: "Modernized operations with digital systems for faster and more reliable service."
    },
    {
      year: "2024",
      title: "Community Recognition",
      description: "Received local business excellence award for outstanding community service."
    }
  ];

  const teamMembers = [
    {
      name: "Rajesh Sharma",
      role: "Founder & Owner",
      experience: "10+ years in service industry",
      description: "Passionate about serving the community with reliable and affordable services."
    },
    {
      name: "Priya Gupta",
      role: "Operations Manager",
      experience: "5+ years in financial services",
      description: "Ensures smooth operations and maintains service quality standards."
    },
    {
      name: "Amit Kumar",
      role: "Technical Specialist",
      experience: "8+ years in repairs",
      description: "Expert in mobile and bicycle repairs with extensive technical knowledge."
    }
  ];

  const achievements = [
    { number: "500+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
    { number: "1000+", label: "Services Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "4+", label: "Years of Service", icon: <Calendar className="w-6 h-6" /> },
    { number: "5★", label: "Average Rating", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                About 
                <span className="block text-yellow-400">QuickServe</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                We are your trusted local service hub, dedicated to providing reliable, 
                affordable, and convenient services to our community. From mobile recharge 
                to financial services, we're here to make your daily tasks easier.
              </p>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-yellow-400" />
                <span className="text-lg">Proudly serving Kanpur since 2020</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-yellow-400 mb-2 flex justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-blue-100 text-sm">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Target className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide accessible, reliable, and affordable services that simplify 
                daily tasks for our community members. We strive to be the go-to destination 
                for all essential services, delivered with excellence and care.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">What drives us:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Making services accessible to everyone
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Building trust through consistent quality
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Supporting local community growth
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Lightbulb className="w-8 h-8 text-yellow-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the most trusted and comprehensive service hub in our region, 
                known for innovation, reliability, and exceptional customer service. 
                We envision a future where all daily service needs are met under one roof.
              </p>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Our goals:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Expand services to meet evolving needs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Embrace technology for better service
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Create positive community impact
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we serve our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From humble beginnings to becoming a trusted community service hub
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Dedicated professionals committed to serving you with excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  {member.experience}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose QuickServe?</h2>
            <p className="text-xl text-gray-600">
              Here's what sets us apart from the competition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <Clock className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quick & Reliable
              </h3>
              <p className="text-gray-600">
                Fast service delivery with consistent reliability. Most services completed within minutes.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <Award className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600">
                High-quality service standards maintained across all offerings with genuine parts and expertise.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6">
              <Heart className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Personal Touch
              </h3>
              <p className="text-gray-600">
                Personalized service with a friendly approach. We know our customers and their preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Service?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of satisfied customers who trust QuickServe for their daily service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('services')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Our Services
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;