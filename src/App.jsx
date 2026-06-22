import React, { useState } from 'react';

const stepsData = [
  { id: 1, title: "Welcome Home My Lovely Manel", content: "I wanted to create this little gift for you to show you how much i love you and how much you mean to me." },
  { id: 2, title: "Our Memories", content: "this past few days i've been thinking about the time we spent together and all the happiness that we've had, I remember all our calls, how we used to laugh from start to finish for no reason at all, just because we felt safe and loved. We would also get angry with each other for no reason, and you know how much I love your reaction whenever you get mad—it’s the most beautiful thing. I also remember when I get angry due to jealousy; lately, I’ve been cursing a lot. I just can’t seem to control myself when I get jealous anymore, There were times when you would say something ordinary, and even though I knew it wasn't true, I swear I would die of jealousy. That’s simply because I am selfish in my love for you; I wanted you—and I still want you—all to myself forever " },
  { id: 3, title: "Missing You", content: "I’ve been trying to find the words to express how much I miss you, but the truth is, the silence you’ve left behind is louder than any words I could write. I know things have changed, and I know you’ve decided to move on, but my heart still struggles to accept that this is our reality. I've tried to force myself to move on but instead i found myself thinking about you every minute wondering what are you doing and if you are okey, if you forget me or if you find someone else, if you are covering yourself or not hhhh, the love I have for you hasn't faded; it has only turned into a deep, heavy longing. I truly hope you are finding the happiness you deserve, even if it’s no longer by my side (im writing this with tears in my eyes)" },
  { id: 4, title: "Appologies", content: "I’ve spent a lot of time reflecting on us, and I want to apologize from the bottom of my heart for the times I fell short. I know I wasn't the perfect partner you deserved, and I am deeply sorry for the moments I let my insecurities, my jealousy, or my own flaws get in the way of what we had. I know there were times I failed to show up for you the way you needed me to, and for that, I am truly sorry. I’ve realized that my love for you was sometimes clouded by my own mistakes, and I hate that I couldn’t be the steady, perfect person I wanted to be for you. Please know that my intentions were always rooted in how much you meant to me, even if my actions didn't always reflect that, im so sorry my love" },
  { id: 5, title: "My Love", content: "My love for you has always been more than just a feeling; it’s a part of who I am. From the very beginning, you became my safe haven, the one person with whom I could be completely myself, laughing until we couldn't breathe and finding comfort in the silence between us. Even when we were at our worst, the intensity of what I felt never wavered. You are the person I always wanted to share every part of my life with—the good, the bad, and the mundane. My heart has always been yours, and despite everything, that deep, selfish, and absolute love I have for you remains unchanged. I still carry you in my thoughts every single day, and I hope you know that you were, and will always be, the one person I truly wanted to hold onto forever, The woman that i want her to be the mother of my kids"},
  { id: 6, title: "Our Future", content: "I truly believe that what we shared was meant to last a lifetime, and it breaks my heart to think that our story ends here. I know I have a lot to make up for, but I am ready to grow, to change, and to be the man you deserve so that we can build the future we once dreamed of. I still see us together—not just as we were, but as a husband and wife, building a home and raising a family that reflects the love we once had. That vision of our future is the only thing that keeps me going, and I am holding onto the hope that we can find our way back to each other. Please, let’s talk about giving us another chance to create the life I know we are meant to have together"},
  { id: 7, title: "Marry Me", content: "Will u marry me Manel Ferhat ?"}
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
      <div className="max-w-4xl w-full bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-4 sm:p-8 flex flex-col md:flex-row gap-6 border border-white/50">
        
        {/* Sidebar Navigation */}
        <div className="flex md:flex-col gap-3 overflow-x-auto pb-2 md:pb-0 md:justify-start">
          {stepsData.map((step) => (
            <div key={step.id} className="flex flex-col items-center gap-1 cursor-pointer min-w-[60px]" onClick={() => setCurrentStep(step.id)}>
              <div className={`p-2 rounded-full transition-all ${currentStep === step.id ? 'bg-pink-300 scale-110' : 'hover:bg-pink-200'}`}>
                🐻
              </div>
              <span className="text-[10px] font-bold text-black text-center whitespace-nowrap">Step {step.id}</span>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-grow flex flex-col items-center text-center">
          <h1 className="text-2xl sm:text-3xl font-serif mb-4 text-black font-bold" style={{ color: 'black' }}>To My Beloved Wife</h1>
          
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-pink-200 overflow-hidden mb-4 shadow-lg">
            <img src="/bears.jfif" alt="Bears" className="w-full h-full object-cover" />
          </div>

          <div className="bg-white/40 p-4 sm:p-8 rounded-2xl shadow-inner w-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: 'crimson' }}>{currentData.title}</h2>
            <p className="text-pink-900 leading-relaxed font-serif mb-6 text-sm sm:text-base" style={{ color: 'black' }}>{currentData.content}</p>
            
            {currentStep === 7 && (
              <div className="flex flex-col items-center gap-4 mt-6">
                {answer === null ? (
                  <div className="flex gap-4">
                    <button onClick={() => setAnswer('yes')} className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">Yes</button>
                    <button onClick={handleNoClick} className="bg-gray-400 text-white px-6 py-2 rounded-full hover:bg-gray-500 transition">No</button>
                  </div>
                ) : answer === 'no' ? (
                  <p className="text-lg font-bold text-red-600 animate-bounce">Say yes! 😡</p>
                ) : (
                  <div className="fixed inset-0 bg-pink-100/95 flex items-center justify-center z-50 p-6 text-center"> 
                    <h1 className="text-3xl md:text-6xl font-bold text-pink-600" style={{ color: 'black' }}>I love you more than everything in this world Habibti 💍❤️</h1>
                  </div>
                )}
              </div>
            )}

            {currentStep < 7 && (
              <button 
                onClick={() => setCurrentStep(prev => prev + 1)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-all shadow-md mt-2"
              >
                Continue &gt;
              </button>
            )}
          </div>
        </div>

        {/* Right Info Section */}
        <div className="w-full md:w-32 border-t md:border-t-0 md:border-l border-pink-200 pt-4 md:pt-0 flex flex-col items-center text-center">
          <p className="text-[10px] uppercase tracking-widest mb-2 text-pink-500 font-bold">Our Story</p>
          <div className="w-12 h-12 rounded-full bg-pink-200 mb-2 overflow-hidden">
            <img src="/me.jpg" alt="Husband" className="w-full h-full object-cover" />
          </div>
          <p className="font-bold text-sm text-black">Sifeddine Bouaoua</p>
          <p className="italic text-xs mt-1 text-pink-500">Your Husband</p> 
        </div>
      </div>
    </div>
  );
}