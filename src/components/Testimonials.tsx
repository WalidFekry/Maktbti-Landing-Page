import React from 'react';
import { Star } from 'lucide-react';
import logo from '../assets/logo.png';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "أحمد محمد",
      rating: 5,
      text: "تطبيق رائع جداً، يحتوي على كل ما يحتاجه المسلم في حياته اليومية. أستخدمه يومياً لقراءة الأذكار والاستماع للقرآن. أنصح به بشدة لكل مسلم! 👍",
      image: logo
    },
    {
      name: "سارة أحمد",
      rating: 5,
      text: "أفضل تطبيق إسلامي استخدمته حتى الآن. أحب ميزة قصص الأنبياء وكيفية عرضها بطريقة سهلة ومبسطة للأطفال. التطبيق سهل الاستخدام ويعمل بدون إنترنت! ❤️",
      image: logo
    },
    {
      name: "محمد علي",
      rating: 5,
      text: "تطبيق شامل ومتكامل، أعجبني كثيراً ميزة تحديد اتجاه القبلة ومواقيت الصلاة. كما أن العمل بدون إنترنت ميزة رائعة. أشكر القائمين على هذا التطبيق المميز! 🌟",
      image: logo
    },
    {
      name: "فاطمة حسن",
      rating: 5,
      text: "تطبيق مكتبتي من أفضل التطبيقات الإسلامية التي استخدمتها. أحب الوضع الليلي والتصميم الأنيق. يساعدني كثيراً في حفظ الأذكار وقراءة القرآن. 🌙",
      image: logo
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">آراء المستخدمين</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">ما يقوله مستخدمو تطبيق مكتبتي</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover ml-4 border-2 border-blue-500"
                />
                <div>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <div className="font-bold text-blue-800">{testimonial.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;