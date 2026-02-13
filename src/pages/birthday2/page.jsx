'use client';

import { useState, useEffect } from 'react';

export default function BirthdayPage2() {
  const [started, setStarted] = useState(false);
  const [balloons, setBalloons] = useState([]);
  const [confetti, setConfetti] = useState([]);
  const [giftOpened, setGiftOpened] = useState(false);
  const [messageRevealed, setMessageRevealed] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    if (started) {
      const balloonInterval = setInterval(() => {
        setBalloons(prev => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            x: Math.random() * 90,
            color: ['bg-red-400', 'bg-pink-400', 'bg-purple-400', 'bg-blue-400', 'bg-yellow-400'][Math.floor(Math.random() * 5)],
            delay: Math.random() * 2
          }
        ]);
      }, 800);

      setTimeout(() => clearInterval(balloonInterval), 10000);
      return () => clearInterval(balloonInterval);
    }
  }, [started]);

  useEffect(() => {
    if (giftOpened) {
      const newConfetti = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: 50 + (Math.random() - 0.5) * 30,
        y: 50,
        rotation: Math.random() * 360,
        color: ['text-red-500', 'text-pink-500', 'text-purple-500', 'text-blue-500', 'text-yellow-500'][Math.floor(Math.random() * 5)],
        size: Math.random() * 20 + 10
      }));
      setConfetti(newConfetti);
      
      setTimeout(() => {
        setMessageRevealed(true);
      }, 1000);
    }
  }, [giftOpened]);

  const handleMouseMove = (e) => {
    if (started && Math.random() > 0.9) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setSparkles(prev => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x,
          y
        }
      ]);
    }
  };

  useEffect(() => {
    setSparkles(prev => prev.filter(s => s.id > Date.now() - 1000));
  }, [sparkles]);

  useEffect(() => {
    setBalloons(prev => prev.filter(b => b.id > Date.now() - 8000));
  }, [balloons]);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 10 + 5}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {balloons.map(balloon => (
        <div
          key={balloon.id}
          className={`absolute ${balloon.color} rounded-full animate-float-balloon`}
          style={{
            left: `${balloon.x}%`,
            bottom: '-100px',
            width: '60px',
            height: '80px',
            animationDelay: `${balloon.delay}s`,
            boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.2)'
          }}
        >
          <div className="absolute bottom-0 left-1/2 w-0.5 h-20 bg-gray-300 transform -translate-x-1/2"></div>
        </div>
      ))}

      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute text-2xl animate-sparkle pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`
          }}
        >
          ✨
        </div>
      ))}

      {confetti.map(conf => (
        <div
          key={conf.id}
          className={`absolute ${conf.color} animate-confetti-fall`}
          style={{
            left: `${conf.x}%`,
            top: `${conf.y}%`,
            fontSize: `${conf.size}px`,
            transform: `rotate(${conf.rotation}deg)`,
            animationDelay: `${Math.random() * 0.5}s`
          }}
        >
          {['🎊', '🎉', '⭐', '💖', '🌟'][Math.floor(Math.random() * 5)]}
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {!started ? (
          <div className="text-center">
            <div className="mb-12 animate-float">
              <div className="text-9xl mb-4 animate-pulse-slow">🎁</div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-fade-in-up tracking-wider">
              A Special Day
            </h1>
            <p className="text-2xl md:text-3xl text-pink-200 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Are you ready for something magical? ✨
            </p>
            <button
              onClick={() => setStarted(true)}
              className="group relative px-16 py-6 text-2xl font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/50"
            >
              <span className="relative z-10">Let's Begin! 🎉</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
          </div>
        ) : !giftOpened ? (
          <div className="text-center animate-scale-in">
            <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 mb-8 animate-gradient">
              Happy Birthday! 🎂
            </h2>
            <p className="text-3xl text-white mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              I have something special for you...
            </p>
            
            <div 
              onClick={() => setGiftOpened(true)}
              className="relative cursor-pointer group mx-auto w-64 h-64 animate-bounce-gentle"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg transform transition-all duration-500 group-hover:-translate-y-4 group-hover:rotate-3 shadow-2xl z-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-20 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-sm"></div>
              </div>
              
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 h-52 bg-gradient-to-br from-red-400 to-pink-400 rounded-lg shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-full bg-gradient-to-r from-yellow-300 to-yellow-500"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-16 bg-gradient-to-b from-yellow-300 to-yellow-500"></div>
                
                <div className="absolute inset-0 bg-white/20 rounded-lg animate-pulse-glow"></div>
              </div>
              
              <p className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-2xl text-yellow-300 font-bold whitespace-nowrap animate-pulse">
                👆 Click to open! 👆
              </p>
            </div>
          </div>
        ) : (
          <div className={`text-center max-w-4xl ${messageRevealed ? 'animate-scale-in' : 'opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 mb-8 animate-rainbow">
              You're Amazing! 🌟
            </h1>
            
            <div className="space-y-6 mb-12">
              {[
                { text: "Every moment with you is a treasure 💎", delay: "0s", emoji: "💕" },
                { text: "You light up my world like nobody else ✨", delay: "0.3s", emoji: "🌟" },
                { text: "Here's to another year of adventures together! 🚀", delay: "0.6s", emoji: "🎈" }
              ].map((msg, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl animate-slide-in-left hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: msg.delay }}
                >
                  <p className="text-2xl md:text-3xl text-white font-semibold mb-2">
                    {msg.text}
                  </p>
                  <div className="text-5xl animate-bounce" style={{ animationDelay: msg.delay }}>
                    {msg.emoji}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative inline-block group">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-6 rounded-full text-4xl font-bold shadow-2xl transform hover:scale-110 transition-all duration-300">
                I Love You! ❤️
              </div>
            </div>

            <div className="mt-12 flex justify-center gap-6 text-6xl">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="animate-bounce-random"
                  style={{ 
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${2 + Math.random()}s`
                  }}
                >
                  ❤️
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-balloon {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-120vh) rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes sparkle {
          0% { transform: scale(0) rotate(0deg); opacity: 1; }
          100% { transform: scale(2) rotate(180deg); opacity: 0; }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes bounce-random {
          0%, 100% { transform: translateY(0) scale(1); }
          25% { transform: translateY(-15px) scale(1.1); }
          50% { transform: translateY(-5px) scale(0.9); }
          75% { transform: translateY(-10px) scale(1.05); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-balloon { animation: float-balloon 8s linear forwards; }
        .animate-twinkle { animation: twinkle ease-in-out infinite; }
        .animate-confetti-fall { animation: confetti-fall 3s ease-out forwards; }
        .animate-sparkle { animation: sparkle 1s ease-out forwards; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-rainbow { background-size: 200% 200%; animation: rainbow 3s ease infinite; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
        .animate-pulse-slow { animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-bounce-random { animation: bounce-random ease-in-out infinite; }
      `}</style>
    </div>
  );
}