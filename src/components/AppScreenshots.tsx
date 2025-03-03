import React from 'react';
import { motion } from 'framer-motion';
import screenshot_1 from '../assets/screenshot-1.jpeg';
import screenshot_2 from '../assets/screenshot-2.jpeg';
import screenshot_3 from '../assets/screenshot-3.jpeg';
import screenshot_4 from '../assets/screenshot-4.jpeg';
import screenshot_5 from '../assets/screenshot-5.jpeg';
import screenshot_6 from '../assets/screenshot-6.jpeg';
import screenshot_7 from '../assets/screenshot-7.jpeg';
import screenshot_8 from '../assets/screenshot-8.jpeg';
import screenshot_9 from '../assets/screenshot-9.jpeg';

const AppScreenshots: React.FC = () => {
  const appScreenshots = [
    { url: screenshot_1, title: "التطبيق الإسلامي المتكامل", description: "تطبيق شامل يحتوي على كل ما يحتاجه المسلم في حياته اليومية." },
    { url: screenshot_2, title: "أذكار المسلم", description: "مجموعة من الأذكار اليومية، أذكار الصباح والمساء وأدعية متنوعة." },
    { url: screenshot_3, title: "قصص إسلامية", description: "مجموعة من القصص الإسلامية الهادفة التي تحمل العبرة والموعظة." },
    { url: screenshot_4, title: "إسلاميات عامة", description: "معلومات دينية متنوعة تشمل الفقه، الحديث، والتفسير." },
    { url: screenshot_5, title: "القرآن الكريم", description: "نص القرآن الكريم كاملاً مع التلاوة الصوتية بعدة قراء." },
    { url: screenshot_6, title: "التذكير بالصلاة على النبي", description: "إشعارات دورية لتذكيرك بالصلاة على النبي ﷺ." },
    { url: screenshot_7, title: "أوقات الصلاة", description: "مواقيت الصلاة حسب موقعك الجغرافي مع التنبيه عند دخول الوقت." },
    { url: screenshot_8, title: "خطب ومحاضرات", description: "مجموعة من الخطب والمحاضرات الدينية لأشهر العلماء والدعاة." },
    { url: screenshot_9, title: "كتب تنمية بشرية", description: "مجموعة من الكتب التي تساعدك على تطوير ذاتك وتحقيق أهدافك." }  
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">لقطات من التطبيق</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">تصميم أنيق وواجهة سهلة الاستخدام</p>
        </div>

        <motion.div 
          className="flex gap-8"
          animate={{ x: [800, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {appScreenshots.map((screenshot, index) => (
            <motion.div 
              key={index} 
              className="relative min-w-[300px] transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <div className="relative bg-white p-2 rounded-3xl shadow-xl overflow-hidden">
                <img 
                  src={screenshot.url} 
                  alt={`لقطة شاشة ${index + 1}`} 
                  className="rounded-2xl h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-6 rounded-b-2xl">
                  <h3 className="text-xl font-bold text-white mb-1">{screenshot.title}</h3>
                  <p className="text-blue-100 text-sm">{screenshot.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppScreenshots;
