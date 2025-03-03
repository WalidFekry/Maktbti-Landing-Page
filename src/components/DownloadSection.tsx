import React from 'react';
import { Download } from 'lucide-react';

const DownloadSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 mt-2">حمّل تطبيق مكتبتي الآن</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          كل ما يحتاجه المسلم في تطبيق واحد - أدعية، أذكار، قصص الأنبياء، القرآن الكريم، وأكثر
        </p>
        <div className="flex justify-center">
          <a 
            href="https://play.google.com/store/apps/details?id=com.walid.maktbti" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold flex items-center justify-center transition-all text-lg"
          >
            <Download className="ml-2 w-6 h-6" />
            تحميل التطبيق
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;