import React from 'react';
import { Mail, Facebook, Shield } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    link: 'mailto:walid_fekry@hotmail.com',
    text: 'walid_fekry@hotmail.com'
  },
  {
    icon: Facebook,
    title: 'صفحة الفيسبوك',
    link: 'https://www.facebook.com/App.Maktbti',
    text: 'facebook.com/App.Maktbti'
  },
  {
    icon: Shield,
    title: 'سياسة الخصوصية',
    link: 'https://sites.google.com/view/appmaktbti/home',
    text: 'اقرأ سياسة الخصوصية'
  }
];

const ContactItem: React.FC<{ icon: React.ElementType; title: string; link: string; text: string }> = ({ icon: Icon, title, link, text }) => (
  <div className="flex items-center space-x-4 rtl:space-x-reverse">
    <div className="bg-blue-100 p-3 rounded-full">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <div>
      <h4 className="font-bold text-gray-800">{title}</h4>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{text}</a>
    </div>
  </div>
);

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-white flex justify-center items-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">اتصل بنا</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">نحن هنا للإجابة على استفساراتك ومساعدتك</p>
        
        <div className="max-w-2xl mx-auto bg-blue-50 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">معلومات التواصل</h3>
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;