import React from 'react';
import { HelpingHand as PrayingHands, Sparkles, BookOpen, Book, MessageCircle, Clock, Heart, Award, Bookmark, Headphones } from 'lucide-react';

interface AppContentProps {
  isVisible: boolean;
}

const AppContent: React.FC<AppContentProps> = ({ isVisible }) => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">محتويات التطبيق</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">يحتوي تطبيق مكتبتي على مجموعة متنوعة من المحتويات الإسلامية المفيدة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                <PrayingHands className="inline-block ml-2 text-blue-600" />
                المحتوى الديني
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition-all">
                  <div className="bg-blue-100 p-2 rounded-full ml-4">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">القرآن الكريم</h4>
                    <p className="text-gray-600 text-sm">المصحف الشريف، تفسير، الورد اليومي، قراءة واستماع</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition-all">
                  <div className="bg-blue-100 p-2 rounded-full ml-4">
                    <Book className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">قصص الأنبياء</h4>
                    <p className="text-gray-600 text-sm">قصص الأنبياء بالفيديو والصوت والنص بطريقة مبسطة</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition-all">
                  <div className="bg-blue-100 p-2 rounded-full ml-4">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">أذكار المسلم</h4>
                    <p className="text-gray-600 text-sm">أذكار الصباح والمساء، أذكار الصلاة، أذكار النوم</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition-all">
                  <div className="bg-blue-100 p-2 rounded-full ml-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">مواقيت الصلاة</h4>
                    <p className="text-gray-600 text-sm">تحديد مواقيت الصلاة واتجاه القبلة بدقة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                <Sparkles className="inline-block ml-2 text-blue-600" />
                محتوى متنوع
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition-all">
                  <div className="bg-blue-100 p-2 rounded-full ml-4">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">رسائل تفاؤل وسعادة</h4>
                    <p className="text-gray-600 text-sm">أكثر من 500 رسالة سعادة وتفاؤل متجددة يومياً</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition-all">
                  <div className="bg-blue-100 p-2 rounded-full ml-4">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">قصص إسلامية</h4>
                    <p className="text-gray-600 text-sm">قصص الصحابة، معجزات الأنبياء، قصص القرآن</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition-all">
                  <div className="bg-blue-100 p-2 rounded-full ml-4">
                    <Bookmark className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">المكتبة الإسلامية</h4>
                    <p className="text-gray-600 text-sm">كتاب الفقه، صحيح البخاري، صحيح مسلم، تفسير الأحلام</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition-all">
                  <div className="bg-blue-100 p-2 rounded-full ml-4">
                    <Headphones className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">خطب ومحاضرات</h4>
                    <p className="text-gray-600 text-sm">راديو وأناشيد إسلامية متنوعة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppContent;