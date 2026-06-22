import React, { useState } from 'react';

const stepsData = [
  { id: 1, title: "Welcome Home", content: "I wanted to create this little gift for you to show you how much i love you and how much you mean to me." },
  { id: 2, title: "Our Memories", content: "I remember all our calls, how we used to laugh from start to finish... I wanted you—and I still want you—all to myself forever." },
  { id: 3, title: "Missing You", content: "The silence you’ve left behind is louder than any words I could write. The love I have for you hasn't faded; it has only turned into a deep, heavy longing." },
  { id: 4, title: "Appologies", content: "I am deeply sorry for the moments I let my insecurities, my jealousy, or my own flaws get in the way of what we had." },
  { id: 5, title: "My Love", content: "You became my safe haven. My heart has always been yours, and that deep, selfish, and absolute love remains unchanged." },
  { id: 6, title: "Our Future", content: "I am ready to grow, to change, and to be the man you deserve. Please, let’s talk about giving us another chance." },
  { id: 7, title: "Marry Me", content: "Will u marry me Manel Ferhat ?" }
];

export default function BelovedWifeCard() {
  const [currentStep, setCurrentStep] = useState(1);
  const currentData = stepsData.find(s => s.id === currentStep);
  const [answer, setAnswer] = useState(null);

  const handleNoClick = () => {
    setAnswer('no');
    setTimeout(() => setAnswer(null), 2000);
  };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-2 sm:p-4 font-serif text-pink-900">
      <div className="max-w-4xl w-full bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-8 flex flex-col gap-6 border border-white/50">
        
        {/* Mobile-Optimized Header */}
        <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-serif text-black">To My Beloved Wife</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
            {/* Horizontal Scroll Navigation for Mobile */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 border-b lg:border-b-0 lg:border-r border-pink-200">
              {stepsData.map((step) => (
                <div key={step.id} className="flex flex-col items-center cursor-pointer min-w-[60px]" onClick={() => setCurrentStep(step.id)}>
                  <div className={`p-2 rounded-full transition-all ${currentStep === step.id ? 'bg-pink-300 scale-110' : 'hover:bg-pink-200'}`}>
                    🐻
                  </div>
                  <span className="text-[10px] font-bold text-pink-700 hidden sm:block">Step {step.id}</span>
                </div>
              ))}
            </div>

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col items-center text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-pink-200 overflow-hidden mb-4 shadow-md">
                <img src="/bears.jfif" alt="Bears" className="w-full h-full object-cover" />
              </div>

              <div className="bg-white/40 p-4 sm:p-8 rounded-2xl w-full">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">{currentData.title}</h2>
                <p className="text-sm sm:text-base text-pink-800 leading-relaxed font-serif mb-6 h-48 sm:h-auto overflow-y-auto">
                  {currentData.content}
                </p>
                
                {currentStep === 7 && (
                  <div className="flex flex-col items-center gap-4">
                    {answer === null ? (
                      <div className="flex gap-4">
                        <button onClick={() => setAnswer('yes')} className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">Yes</button>
                        <button onClick={handleNoClick} className="bg-gray-300 text-white px-6 py-2 rounded-full hover:bg-gray-400 transition">No</button>
                      </div>
                    ) : answer === 'no' ? (
                      <p className="text-lg font-bold text-red-600 animate-bounce">Say yes! 😡</p>
                    ) : (
                      <div className="fixed inset-0 bg-pink-100/95 flex items-center justify-center z-50 p-6 text-center">
                        <h1 className="text-3xl sm:text-5xl font-bold text-pink-600">I love you more than everything, Habibti 💍❤️</h1>
                      </div>
                    )}
                  </div>
                )}

                {currentStep < 7 && (
                  <button onClick={() => setCurrentStep(prev => prev + 1)} className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full transition-all shadow-md">
                    Continue &gt;
                  </button>
                )}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}