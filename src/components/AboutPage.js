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
  Hand,      
  Star,
  CheckCircle,
  Calendar
} from 'lucide-react';


const AboutPage = ({ setCurrentPage }) => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "ग्राहक सर्वप्रथम",
      description: "हम अपने प्रत्येक कार्य में अपने ग्राहकों को सर्वोपरि रखते हैं तथा प्रत्येक बातचीत में उनकी संतुष्टि सुनिश्चित करते हैं।"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "विश्वास और सुरक्षा",
      description: "आपका भरोसा ही हमारी नींव है। हम सुरक्षा और पारदर्शिता के उच्चतम मानकों को बनाए रखते हैं।"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "नवाचार",
      description: "नवीनतम प्रौद्योगिकी और नवीन समाधानों के साथ अपनी सेवाओं में निरंतर सुधार करते रहना।"
    },
    {
     icon: <Hand className="w-8 h-8" />,
     title: "सामुदायिक सेवा",
     description: "अपने स्थानीय समुदाय की सेवा करने और स्थायी संबंध बनाने के लिए प्रतिबद्ध।"
   }

  ];

  const milestones = [
    {
      year: "2000",
      title: "ओम साइकिल स्टोर",
      description: "समुदाय की सेवा करने के उद्देश्य से एक छोटी सी मोबाइल रिचार्ज दुकान के रूप में शुरुआत की गई।"
    },
    {
      year: "2001",
      title: "सेवाओं का विस्तार किया गया",
      description: "बढ़ती सामुदायिक आवश्यकताओं को पूरा करने के लिए साइकिल मरम्मत सेवाएं और धन हस्तांतरण को जोड़ा गया।"
    },
    {
      year: "2005",
      title: "AEPS एकीकरण",
      description: "एक अधिकृत AEPS सेवा प्रदाता बन गया, जिससे बैंकिंग सेवाएं घर-घर तक पहुंच गईं और वित्तीय समावेशन को बढ़ावा मिला।"
    },
    {
      year: "2008",
      title: "डिजिटल परिवर्तन",
      description: "तीव्र एवं अधिक विश्वसनीय सेवा के लिए डिजिटल प्रणालियों के साथ आधुनिकीकृत परिचालन।"
    },
    {
      year: "2024",
      title: "सामुदायिक मान्यता",
      description: "उत्कृष्ट सामुदायिक सेवा के लिए स्थानीय व्यवसाय उत्कृष्टता पुरस्कार प्राप्त किया।"
    }
  ];

  const teamMembers = [
    {
      name: "राकेश कुमार सिंह",
      role: "Founder & Owner",
      experience: "25+ वर्ष का अनुभव",
      description: "विश्वसनीय और किफायती सेवाओं के साथ समुदाय की सेवा करने के प्रति उत्साही।"
    },
    {
      name: "शिवम सिंह",
      role: "Operations Manager",
      experience: "वित्तीय सेवा में 5+ वर्ष का अनुभव",
      description: "सुचारू परिचालन सुनिश्चित करना तथा सेवा गुणवत्ता मानकों को बनाए रखना।"
    },
    {
      name: "ताज",
      role: "Technical Specialist",
      experience: "मरम्मत में 8+ वर्ष का अनुभव",
      description: "साइकिल मरम्मत और बाइक सेवाओं में विशेषज्ञ, व्यावहारिक विशेषज्ञता और ग्राहक-प्रथम दृष्टिकोण के साथ।"
    }
  ];

  const achievements = [
    { number: "15000+", label: "खुश ग्राहक", icon: <Users className="w-6 h-6" /> },
    { number: "20000+", label: "पूर्ण की गई सेवाएँ", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "25+", label: "सेवा के वर्ष", icon: <Calendar className="w-6 h-6" /> },
    { number: "5★", label: "श्रेणी", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                
                <span className="block text-yellow-400">ओम साइकिल स्टोर</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                हम आपके विश्वसनीय स्थानीय सेवा केंद्र हैं, जो अपने समुदाय को विश्वसनीय, सस्ती और सुविधाजनक सेवाएँ प्रदान करने के लिए समर्पित हैं। मोबाइल रिचार्ज से लेकर वित्तीय सेवाओं तक, हम आपके दैनिक कार्यों को आसान बनाने के लिए यहाँ हैं।
              </p>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-yellow-400" />
                <span className="text-lg">2000 से देवरिया की सेवा में गौरवपूर्ण योगदान</span>
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
                <h2 className="text-3xl font-bold text-gray-900">हमारा उद्देश्य</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                हमारे समुदाय के सदस्यों के लिए दैनिक कार्यों को सरल बनाने वाली सुलभ, विश्वसनीय और सस्ती सेवाएँ प्रदान करना। हम उत्कृष्टता और देखभाल के साथ प्रदान की जाने वाली सभी आवश्यक सेवाओं के लिए जाने-माने गंतव्य बनने का प्रयास करते हैं।
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">हमें क्या प्रेरित करता है:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    सेवाओं को सभी के लिए सुलभ बनाना
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    निरंतर गुणवत्ता के माध्यम से विश्वास का निर्माण
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    स्थानीय समुदाय के विकास को समर्थन देना
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Lightbulb className="w-8 h-8 text-yellow-600" />
                <h2 className="text-3xl font-bold text-gray-900">हमारा नज़रिया</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                अपने क्षेत्र में सबसे भरोसेमंद और व्यापक सेवा केंद्र बनना, जो नवाचार, विश्वसनीयता और असाधारण ग्राहक सेवा के लिए जाना जाता है। हम एक ऐसे भविष्य की कल्पना करते हैं जहाँ सभी दैनिक सेवा ज़रूरतें एक ही छत के नीचे पूरी की जाएँगी।
              </p>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">हमारे लक्ष्य:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    उभरती जरूरतों को पूरा करने के लिए सेवाओं का विस्तार करें
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    बेहतर सेवा के लिए प्रौद्योगिकी को अपनाएं
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    सकारात्मक सामुदायिक प्रभाव पैदा करें
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">हमारे मूल मूल्य</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ये मूल्य हमारे हर काम का मार्गदर्शन करते हैं और यह तय करते हैं कि हम अपने समुदाय की सेवा कैसे करते हैं
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">हमारी यात्रा</h2>
            <p className="text-xl text-gray-600">
              साधारण शुरुआत से लेकर एक विश्वसनीय सामुदायिक सेवा केंद्र बनने तक
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">हमारी टीम से मिलिए</h2>
            <p className="text-xl text-gray-600">
              समर्पित पेशेवर आपको उत्कृष्टता के साथ सेवा देने के लिए प्रतिबद्ध हैं
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ओम साइकिल स्टोर क्यों चुनें?</h2>
            <p className="text-xl text-gray-600">
              यहाँ वह बात बताई गई है जो हमें प्रतिस्पर्धा से अलग बनाती है
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <Clock className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                त्वरित एवं विश्वसनीय
              </h3>
              <p className="text-gray-600">
                निरंतर विश्वसनीयता के साथ तेज़ सेवा वितरण। अधिकांश सेवाएँ मिनटों में पूरी हो जाती हैं।
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <Award className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                गुणवत्ता आश्वासन
              </h3>
              <p className="text-gray-600">
                वास्तविक भागों और विशेषज्ञता के साथ सभी पेशकशों में उच्च गुणवत्ता वाले सेवा मानकों को बनाए रखा गया है।
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6">
              <Heart className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                निजी अंदाज़
              </h3>
              <p className="text-gray-600">
                मैत्रीपूर्ण दृष्टिकोण के साथ व्यक्तिगत सेवा। हम अपने ग्राहकों और उनकी प्राथमिकताओं को जानते हैं।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">हमारी सेवा का अनुभव करने के लिए तैयार हैं?</h2>
          <p className="text-xl text-blue-100 mb-8">
            उन सैकड़ों संतुष्ट ग्राहकों में शामिल हों जो अपनी दैनिक सेवा आवश्यकताओं के लिए ओम साइकिल स्टोर पर भरोसा करते हैं।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('services')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              हमारी सेवाएँ देखें
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
             हमसे संपर्क करें
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;