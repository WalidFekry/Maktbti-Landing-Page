import React, { useState } from 'react';
import { Download, PlayCircle } from 'lucide-react';
import VideoModal from './VideoModal';
import thumbnail from '../assets/thumbnail.png';
import logo from '../assets/logo.png';

interface HeroProps {
  isVisible: boolean;
}

const Hero: React.FC<HeroProps> = ({ isVisible }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className={`md:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="flex items-center mb-6">
              <img 
                src={logo}
                alt="مكتبتي" 
                className="w-16 h-16 rounded-xl mr-4"
              />
              <h1 className="text-4xl font-bold">مكتبتي</h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              التطبيق الإسلامي المتكامل 
              <span className="inline-block animate-bounce mr-2">✨</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              أدعية، أذكار، قصص الأنبياء كاملة بدون إنترنت. تطبيق شامل يضم كل ما يحتاجه المسلم في حياته اليومية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://play.google.com/store/apps/details?id=com.walid.maktbti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold flex items-center justify-center transition-all"
              >
                <Download className="ml-2" />
                تحميل التطبيق
              </a>
              <button 
                onClick={() => setShowVideo(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold flex items-center justify-center transition-all"
              >
                <PlayCircle className="ml-2" />
                شاهدة الفيديو التعريفي
              </button>
            </div>
          </div>
          <div className={`md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-blue-400 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <img 
                  src={thumbnail}
                  alt="تطبيق مكتبتي" 
                  className="rounded-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      
      {showVideo && <VideoModal onClose={() => setShowVideo(false)} />}
    </section>
  );
};

export default Hero;