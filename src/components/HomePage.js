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
      title: "मोबाइल रिचार्ज",
      description: "सभी नेटवर्क के लिए त्वरित और सुरक्षित मोबाइल रिचार्ज",
      features: ["सभी नेटवर्क", "तत्काल रिचार्ज", "24/7 उपलब्ध"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "साइकिल मरम्मत",
      description: "पेशेवर साइकिल मरम्मत और रखरखाव सेवाएं",
      features: ["विशेषज्ञ मैकेनिक्स", "गुणवत्ता वाले पार्ट्स", "उसी दिन की सेवा"]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "मनी ट्रांसफर",
      description: "सुरक्षित और तेज़ धन हस्तांतरण सेवाएँ",
      features: ["सुरक्षित स्थानांतरण", "कम शुल्क", "एकाधिक विकल्प"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AEPS सेवाएं",
      description: "आधार सक्षम भुगतान प्रणाली सेवाएँ",
      features: ["नकद निकासी", "तुला राशि जाँच", "मिनी स्टेटमेंट"]
    }
  ];

  const stats = [
    { number: "15000+", label: "खुश ग्राहक" },
    { number: "20000+", label: "पूर्ण की गई सेवाएँ" },
    { number: "24/7", label: "उपलब्ध" },
    { number: "5★", label: "श्रेणी" }
  ];

  const testimonials = [
    {
      name: "Niranjan Singh",
      text: "Excellent service! Quick mobile recharge and very friendly staff.",
      rating: 5
    },
    {
      name: "Shivam Singh",
      text: "My cycle was repaired perfectly. Great work at reasonable prices.",
      rating: 5
    },
    {
      name: "Amit Sharma",
      text: "Reliable money transfer service. I use it regularly for sending money home.",
      rating: 5
    },
    {
     name: "Pooja Verma",
     text: "Very helpful and polite staff. Got my SIM recharged instantly without any hassle.",
     rating: 5
   },
   {
     name: "Rahul Mehra",
     text: "Quick cycle repair and affordable. Saved me from missing college!",
     rating: 4
   },
   {
     name: "Sneh",
     text: "Everything under one roof – recharge, repair, and even AEPS. Highly convenient.",
     rating: 5
   },
   {
     name: "Manoj Gupta",
     text: "Tyre service was fast and efficient. Good value for money.",
     rating: 4
   },
   {
     name: "Divya Chauhan",
     text: "They helped me transfer money to my village quickly. Very trustworthy.",
     rating: 5
   },
   {
     name: "Ramesh Gupta",
     text: "Om Cycle & Recharge Point is my go-to store for small tasks. Reliable and quick.",
     rating: 5
   },
   {
     name: "Jyoti Pandey",
     text: "Loved the experience. The shopkeeper explains everything clearly and doesn't overcharge.",
     rating: 5
   },
   {
     name: "Alok Srivastava",
     text: "Good place for minor cycle issues. Got my brakes fixed in 10 minutes.",
     rating: 4
   },
   {
     name: "Jitendra Singh",
     text: "I appreciate their AEPS service. It helps people like me who don’t have easy bank access.",
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
                  ओम साइकिल स्टोर
                  <span className="block text-yellow-400">&रिचार्ज पॉइंट</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  मोबाइल रिचार्ज से लेकर साइकिल मरम्मत, धन हस्तांतरण से लेकर AEPS सेवाओं तक - हम आपकी सभी दैनिक जरूरतों के लिए वन-स्टॉप समाधान हैं।
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setCurrentPage('services')}
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center group"
                >
                  सेवाएँ खोजें
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
                >
                  हमसे सपर्क करे
                </button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span>सुबह 9 बजे से शाम 8 बजे तक खुला
                 </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <span>विश्वसनीय एवं सुरक्षित</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">त्वरित आँकड़े</h3>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">हमारी सेवाएँ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              हम आपकी सभी दैनिक ज़रूरतों को पूरा करने के लिए सेवाओं की एक व्यापक श्रृंखला प्रदान करते हैं। गुणवत्ता, गति और विश्वसनीयता हमारी प्राथमिकताएँ हैं।
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ओम साइकिल स्टोर क्यों चुनें?</h2>
            <p className="text-xl text-gray-600">
              हम आपके पड़ोस में सर्वोत्तम सेवा अनुभव प्रदान करने के लिए प्रतिबद्ध हैं
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">तीव्र सेवा</h3>
              <p className="text-gray-600">
                सभी सेवाओं के लिए त्वरित टर्नअराउंड समय। अधिकांश अनुरोध मिनटों में पूरे किए गए।
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">सुरक्षित एवं विश्वसनीय</h3>
              <p className="text-gray-600">
                आपके लेन-देन और डेटा हमारे पास सुरक्षित हैं। हम नवीनतम सुरक्षा उपायों का उपयोग करते हैं।
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">विशेषज्ञ सहायता</h3>
              <p className="text-gray-600">
                अनुभवी पेशेवर मित्रवत, ज्ञानवर्धक सेवा के साथ आपकी सहायता के लिए तैयार हैं।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">हमारे ग्राहक क्या कहते हैं</h2>
            <p className="text-xl text-gray-600">
              केवल हमारे शब्दों पर विश्वास न करें - हमारे संतुष्ट ग्राहकों की बात सुनें
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
            अपनी सभी सेवा आवश्यकताओं के लिए आज ही हमसे मिलें। हम आपकी मदद के लिए यहाँ हैं!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              हमारे स्टोर पर जाएँ
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              और अधिक जानें
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;