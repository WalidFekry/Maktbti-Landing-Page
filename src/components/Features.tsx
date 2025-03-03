import React from 'react';
import { Book, Clock, MessageCircle, BookOpen, Heart, Moon, Compass, Calendar } from 'lucide-react';

interface FeatureProps {
  activeFeature: number;
}

const Features: React.FC<FeatureProps> = ({ activeFeature }) => {
  const features = [
    {
      icon: <Book className="w-12 h-12 text-blue-600" />,
      title: "قصص الأنبياء",
      description: "مجموعة كبيرة ومتنوعة من قصص الأنبياء بطريقة بسيطة ومسلية"
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "مواقيت الصلاة",
      description: "تحديد مواقيت الصلاة واتجاه القبلة بدقة عالية"
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-blue-600" />,
      title: "أذكار المسلم",
      description: "أذكار الصباح والمساء وأذكار الصلاة والنوم والاستيقاظ"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: "القرآن الكريم",
      description: "المصحف الشريف مع التفسير والقراءة والاستماع"
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: "رسائل تفاؤل",
      description: "أكثر من 500 رسالة سعادة وتفاؤل متجددة يومياً"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">مميزات تطبيق مكتبتي</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">تطبيق شامل ومتكامل يعمل بدون إنترنت، مصمم بشكل أنيق وطريقة سلسة وسهلة للاستخدام</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${activeFeature === index ? 'border-blue-500 scale-105' : 'border-transparent'}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full relative">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-blue-50 rounded-full relative">
                <Moon className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">الوضع الليلي</h3>
              <p className="text-gray-600">يدعم التطبيق الوضع الليلي لراحة عينيك أثناء القراءة ليلاً</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-blue-50 rounded-full relative">
                <Compass className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">تحديد اتجاه القبلة</h3>
              <p className="text-gray-600">يحدد لك اتجاه القبلة بدقة لتضمن صحة الصلاة</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-blue-50 rounded-full relative">
                <Calendar className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">التاريخ الهجري والميلادي</h3>
              <p className="text-gray-600">يعرض التاريخ الهجري والميلادي بشكل دقيق</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;