'use client';

import { useState, useEffect } from 'react';

export default function BirthdaySurprise() {
  const [revealed, setRevealed] = useState(false);
  const [cakeClicked, setCakeClicked] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(0);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (revealed) {
      const interval = setInterval(() => {
        setHearts(prev => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            x: Math.random() * 100,
            y: 100
          }
        ]);
      }, 300);

      return () => clearInterval(interval);
    }
  }, [revealed]);

  useEffect(() => {
    setHearts(prev => prev.filter(heart => heart.id > Date.now() - 3000));
  }, [hearts]);

  const handleCakeClick = () => {
    setCakeClicked(true);
    if (candlesBlown < 5) {
      setCandlesBlown(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 overflow-hidden relative">
      {/* Floating hearts */}
      {revealed && hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-4xl animate-float-up pointer-events-none"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animation: 'floatUp 3s ease-out forwards'
          }}
        >
          ❤️
        </div>
      ))}

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen p-8 relative z-10">
        {!revealed ? (
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-8 animate-pulse">
              Something Special For You... 💝
            </h1>
            <button
              onClick={() => setRevealed(true)}
              className="px-12 py-6 text-2xl font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-pink-500/50 active:scale-95"
            >
              Click to Reveal 🎁
            </button>
          </div>
        ) : (
          <div className="text-center animate-scale-in">
            <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 mb-4 animate-bounce-slow">
              Happy Birthday, My Love! 🎉
            </h1>
            <p className="text-3xl text-purple-700 mb-12 font-semibold animate-fade-in-delay">
              You make every day brighter! ✨
            </p>

            {/* Interactive Cake */}
            <div className="relative mb-12">
              <div
                onClick={handleCakeClick}
                className={`cursor-pointer transform transition-all duration-500 ${
                  cakeClicked ? 'animate-wiggle' : 'hover:scale-110'
                }`}
              >
                {/* Candles */}
                <div className="flex justify-center gap-4 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center">
                      {candlesBlown <= i && (
                        <div className="text-3xl animate-flicker">🔥</div>
                      )}
                      <div className="w-2 h-16 bg-gradient-to-b from-pink-300 to-pink-500 rounded-full"></div>
                    </div>
                  ))}
                </div>

                {/* Cake layers */}
                <div className="relative">
                  {/* Top layer */}
                  <div className="w-80 h-24 bg-gradient-to-r from-pink-400 to-pink-500 rounded-t-full mx-auto shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                    <div className="absolute top-4 left-8 text-4xl">🍓</div>
                    <div className="absolute top-4 right-8 text-4xl">🍓</div>
                  </div>
                  
                  {/* Middle layer */}
                  <div className="w-96 h-28 bg-gradient-to-r from-purple-400 to-purple-500 mx-auto shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-shimmer-delay"></div>
                    <div className="absolute inset-0 flex justify-around items-center text-3xl">
                      <span>🌸</span>
                      <span>💖</span>
                      <span>🌸</span>
                    </div>
                  </div>
                  
                  {/* Bottom layer */}
                  <div className="w-[26rem] h-32 bg-gradient-to-r from-pink-500 to-pink-600 rounded-b-3xl mx-auto shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                    <div className="absolute inset-0 flex justify-around items-center text-3xl">
                      <span>⭐</span>
                      <span>💕</span>
                      <span>✨</span>
                      <span>💕</span>
                      <span>⭐</span>
                    </div>
                  </div>
                </div>
              </div>

              {candlesBlown === 5 && (
                <div className="mt-8 text-2xl font-bold text-purple-600 animate-bounce">
                  🎊 All candles blown! Make a wish! 🎊
                </div>
              )}

              <p className="mt-6 text-xl text-gray-700">
                {candlesBlown === 0 ? '👆 Click the cake to blow the candles!' : `${candlesBlown}/5 candles blown! 🎂`}
              </p>
            </div>

            {/* Love message */}
            <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl animate-fade-in-delay-2">
              <p className="text-2xl text-gray-800 leading-relaxed mb-6">
                To the most amazing person in my life,
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Every moment with you is a gift. You bring joy, laughter, and love into my life in ways I never imagined possible. Thank you for being you! 💕
              </p>
              <p className="text-2xl text-gray-800 font-bold">
                I love you more than words can express! 🥰
              </p>
            </div>

            {/* Dancing emojis */}
            <div className="flex justify-center gap-8 mt-12 text-6xl">
              <span className="animate-bounce" style={{ animationDelay: '0s' }}>🎈</span>
              <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🎉</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎊</span>
              <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🎁</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🎈</span>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1.5);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }

        @keyframes flicker {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }

        .animate-float-up {
          animation: floatUp 3s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-shimmer-delay {
          animation: shimmer 3s infinite 0.5s;
        }

        .animate-flicker {
          animation: flicker 1s infinite;
        }

        .animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.5s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 1s both;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}