import React from 'react';
import { CheckCircle2, Lightbulb, Smile } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">لماذا تختار تطبيق مكتبتي؟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">مميزات فريدة تجعل تطبيقنا الخيار الأمثل لكل مسلم</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full ml-4">
                <CheckCircle2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-800">يعمل بدون إنترنت</h3>
            </div>
            <p className="text-gray-600">استمتع بجميع ميزات التطبيق حتى بدون اتصال بالإنترنت</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full ml-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-800">سهل الاستخدام</h3>
            </div>
            <p className="text-gray-600">واجهة بسيطة وسهلة الاستخدام تناسب جميع الأعمار</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full ml-4">
                <Smile className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-800">مناسب للأطفال</h3>
            </div>
            <p className="text-gray-600">محتوى مناسب للأطفال بطريقة مبسطة وجذابة</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;