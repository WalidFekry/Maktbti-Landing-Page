import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">فيديو تعريفي</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">شاهد كيفية استخدام تطبيق مكتبتي والاستفادة من مميزاته</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-white p-3 rounded-3xl shadow-xl overflow-hidden">
              <div className="relative pt-[56.25%]">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/Jqe5QBtN4dg" 
                  title="مكتبتي - التطبيق الإسلامي المتكامل" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;