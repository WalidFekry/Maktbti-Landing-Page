import React from 'react';
import { Mail, Facebook } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src= {logo}
                alt="مكتبتي" 
                className="w-12 h-12 rounded-xl ml-3"
              />
              <div>
                <h3 className="text-xl font-bold">مكتبتي</h3>
                <p className="text-blue-300">التطبيق الإسلامي المتكامل</p>
              </div>
            </div>
            <p className="text-blue-200 mb-4">
              تطبيق شامل يضم كل ما يحتاجه المسلم في حياته اليومية من أدعية وأذكار وقصص الأنبياء والقرآن الكريم.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">روابط مهمة</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.walid.maktbti" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-all">تحميل التطبيق</a>
              </li>
              <li>
                <a href="https://sites.google.com/view/appmaktbti/home" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-all">سياسة الخصوصية</a>
              </li>
              <li>
                <a href="https://www.facebook.com/App.Maktbti" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-all">صفحة الفيسبوك</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=Jqe5QBtN4dg" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-all">فيديو تعريفي للتطبيق</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="ml-2 w-5 h-5 text-blue-300" />
                <a href="mailto:walid_fekry@hotmail.com" className="text-blue-200 hover:text-white transition-all">walid_fekry@hotmail.com</a>
              </div>
              <div className="flex items-center">
                <Facebook className="ml-2 w-5 h-5 text-blue-300" />
                <a href="https://www.facebook.com/App.Maktbti" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-all">App.Maktbti</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="mb-2">© 2025 مكتبتي - جميع الحقوق محفوظة</p>
          <p className="text-blue-300">
            تم تطوير التطبيق بواسطة ❤️ Walid Fekry
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;