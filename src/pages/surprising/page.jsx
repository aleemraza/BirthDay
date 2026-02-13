// 'use client';

// import { useState, useEffect, useRef } from 'react';

// export default function BirthdaySurprise() {
//   const [loading, setLoading] = useState(true);
//   const [progress, setProgress] = useState(0);
//   const [lightsOn, setLightsOn] = useState(false);
//   const [showDecorateButton, setShowDecorateButton] = useState(false);
//   const [showDecorations, setShowDecorations] = useState(false);
//   const [showMusicButton, setShowMusicButton] = useState(false);
//   const [musicPlaying, setMusicPlaying] = useState(false);
//   const [balloons, setBalloons] = useState([]);
//   const [confetti, setConfetti] = useState([]);
//   const [started, setStarted] = useState(false);
//   const [selectedMemory, setSelectedMemory] = useState(null);
//   const [galleryOpen, setGalleryOpen] = useState(false);
//   const [showGame, setShowGame] = useState(false);
//   const [gameGifts, setGameGifts] = useState([]);
//   const [openedGifts, setOpenedGifts] = useState([]);
//   const [currentMessage, setCurrentMessage] = useState(null);
//   const [showFinalSurprise, setShowFinalSurprise] = useState(false);
//   const audioRef = useRef(null);

//   const memories = [
//     { id: 1, year: "Year 1", title: "When We First Met", description: "The day our story began. You walked into my life and everything changed forever.", emoji: "💕", color: "from-pink-400 via-rose-400 to-red-400", icon: "🌟" },
//     { id: 2, year: "Year 2", title: "Growing Together", description: "Laughter, late night calls, and countless memories. Every moment with you is magical.", emoji: "🌹", color: "from-purple-400 via-fuchsia-400 to-pink-500", icon: "💫" },
//     { id: 3, year: "Year 3", title: "Stronger Than Ever", description: "Through ups and downs, you've been my constant. My best friend, my everything.", emoji: "💖", color: "from-blue-400 via-indigo-400 to-purple-500", icon: "🌈" },
//     { id: 4, year: "Year 4", title: "Beautiful Memories", description: "Each day with you feels like a dream. Your smile still makes my heart skip a beat.", emoji: "✨", color: "from-yellow-400 via-amber-400 to-orange-500", icon: "🎨" },
//     { id: 5, year: "Year 5", title: "Five Years of Us", description: "Half a decade of love, growth, and happiness. Here's to forever with you, Aasma.", emoji: "💍", color: "from-green-400 via-emerald-400 to-teal-500", icon: "🎉" },
//   ];

//   const surpriseMessages = [
//     { type: 'love', icon: '💝', message: "You make my heart skip a beat every single day!", color: 'from-pink-500 to-rose-500' },
//     { type: 'memory', icon: '📸', message: "Remember our first date? I knew you were the one!", color: 'from-purple-500 to-pink-500' },
//     { type: 'promise', icon: '💍', message: "I promise to love you today, tomorrow, and forever!", color: 'from-blue-500 to-purple-500' },
//     { type: 'cute', icon: '🌸', message: "Your smile is more beautiful than a thousand sunsets!", color: 'from-yellow-500 to-pink-500' },
//     { type: 'dream', icon: '✨', message: "You're the dream I never want to wake up from!", color: 'from-indigo-500 to-purple-500' },
//     { type: 'gratitude', icon: '🙏', message: "Thank you for being YOU - perfectly imperfect for me!", color: 'from-green-500 to-teal-500' },
//     { type: 'future', icon: '🌈', message: "Can't wait for all the adventures waiting for us!", color: 'from-orange-500 to-red-500' },
//     { type: 'admire', icon: '👑', message: "You're not just my queen, you're my entire kingdom!", color: 'from-pink-600 to-purple-600' },
//     { type: 'funny', icon: '😄', message: "You're the only person I'd share my fries with!", color: 'from-amber-500 to-orange-500' },
//     { type: 'soul', icon: '💫', message: "In you, I found my soulmate and my best friend!", color: 'from-violet-500 to-fuchsia-500' },
//     { type: 'forever', icon: '♾️', message: "5 years down, infinity to go, my love!", color: 'from-red-500 to-pink-500' },
//     { type: 'special', icon: '🎁', message: "Every moment with you is a gift I cherish!", color: 'from-teal-500 to-cyan-500' }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(() => setLoading(false), 500);
//           return 100;
//         }
//         return prev + 2;
//       });
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (showGame) {
//       const gifts = surpriseMessages.map((surprise, index) => ({
//         id: index,
//         ...surprise,
//         left: 15 + (Math.random() * 70),
//         top: 15 + (Math.random() * 70),
//         rotation: Math.random() * 360,
//         scale: 0.6 + (window.innerWidth < 640 ? Math.random() * 0.3 : Math.random() * 0.4) // Smaller on mobile
//       }));
//       setGameGifts(gifts);
//     }
//   }, [showGame]);

//   const handleLightsOn = () => {
//     setLightsOn(true);
//     setTimeout(() => setShowDecorateButton(true), 1000);
//   };

//   const handleDecorate = () => {
//     setShowDecorations(true);
//     const newBalloons = Array.from({ length: window.innerWidth < 640 ? 15 : 25 }, (_, i) => ({
//       id: i,
//       left: Math.random() * 100,
//       delay: Math.random() * 3,
//       duration: 5 + Math.random() * 4,
//       color: ['#FF6B9D', '#C44569', '#FFA07A', '#FFB6C1', '#DDA0DD', '#F08080'][Math.floor(Math.random() * 6)],
//       size: 0.5 + (window.innerWidth < 640 ? Math.random() * 0.4 : Math.random() * 0.5)
//     }));
//     setBalloons(newBalloons);
    
//     const newConfetti = Array.from({ length: window.innerWidth < 640 ? 30 : 60 }, (_, i) => ({
//       id: i,
//       left: Math.random() * 100,
//       delay: Math.random() * 2,
//       duration: 4 + Math.random() * 3,
//       color: ['#FF6B9D', '#C44569', '#FFA07A', '#FFB6C1', '#DDA0DD', '#F08080'][Math.floor(Math.random() * 6)],
//       rotation: Math.random() * 360,
//       size: window.innerWidth < 640 ? 4 + Math.random() * 6 : 6 + Math.random() * 10
//     }));
//     setConfetti(newConfetti);
//     setTimeout(() => setShowMusicButton(true), 2000);
//   };

//   const handlePlayMusic = () => {
//     setMusicPlaying(true);
//     if (audioRef.current) {
//       audioRef.current.play().catch(error => console.log("Audio play failed:", error));
//     }
//     setTimeout(() => {
//       setStarted(true);
//       setTimeout(() => setShowGame(true), 2000);
//     }, 2000);
//   };

//   const handleAudioEnded = () => setMusicPlaying(false);
  
//   const openGallery = (memory) => {
//     setSelectedMemory(memory);
//     setGalleryOpen(true);
//   };
  
//   const closeGallery = () => {
//     setGalleryOpen(false);
//     setTimeout(() => setSelectedMemory(null), 300);
//   };

//   const handleGiftClick = (giftId) => {
//     if (!openedGifts.includes(giftId)) {
//       const gift = gameGifts.find(g => g.id === giftId);
//       setOpenedGifts([...openedGifts, giftId]);
//       setCurrentMessage(gift);
//       setTimeout(() => setCurrentMessage(null), 3000);
      
//       if (openedGifts.length + 1 === gameGifts.length) {
//         setTimeout(() => setShowFinalSurprise(true), 3500);
//       }
//     }
//   };

//   const AudioPlayer = <audio ref={audioRef} src="/hbd.mp3" onEnded={handleAudioEnded} loop={false} />;

//   // LOADING SCREEN
//   if (loading) {
//     return (
//       <>
//         {AudioPlayer}
//         <style>{`
//           @keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); } }
//           @keyframes float-up { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 10% { opacity: 0.6; } 90% { opacity: 0.6; } 100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; } }
//           @keyframes aurora { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
//           @keyframes aurora-reverse { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
//           @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
//           @keyframes ribbon-flutter { 0%, 100% { transform: rotate(-45deg) scale(1); } 50% { transform: rotate(-35deg) scale(1.1); } }
//           @keyframes heart-beat { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.2); } }
//           @keyframes orbit { 0% { transform: translate(-50%, -50%) rotate(0deg) translateX(80px) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg) translateX(80px) rotate(-360deg); } }
//           @keyframes shimmer-fast { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
//           @keyframes spin-fast { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
//           @keyframes heart-pop { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.3); } }
//           @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          
//           .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
//           .animate-float-up { animation: float-up 12s ease-in-out infinite; }
//           .animate-aurora { animation: aurora 20s ease-in-out infinite; }
//           .animate-aurora-reverse { animation: aurora-reverse 25s ease-in-out infinite; }
//           .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
//           .animate-ribbon-flutter { animation: ribbon-flutter 2s ease-in-out infinite; }
//           .animate-heart-beat { animation: heart-beat 1.5s ease-in-out infinite; }
//           .animate-orbit { animation: orbit 4s linear infinite; }
//           .animate-shimmer-fast { animation: shimmer-fast 2s linear infinite; }
//           .animate-spin-fast { animation: spin-fast 1s linear infinite; }
//           .animate-heart-pop { animation: heart-pop 1.5s ease-in-out infinite; }
//           .animate-spin-slow { animation: spin-slow 8s linear infinite; }
//         `}</style>
//         <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden px-3 sm:px-4">
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {[...Array(40)].map((_, i) => (
//               <div key={`star-${i}`} className="absolute rounded-full bg-white animate-twinkle"
//                 style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: `${1 + Math.random() * 3}px`, height: `${1 + Math.random() * 3}px`, animationDelay: `${Math.random() * 3}s`, animationDuration: `${2 + Math.random() * 3}s`, opacity: 0.3 + Math.random() * 0.7 }} />
//             ))}
//             {[...Array(8)].map((_, i) => (
//               <div key={`float-${i}`} className="absolute animate-float-up"
//                 style={{ left: `${Math.random() * 100}%`, bottom: '-50px', animationDelay: `${Math.random() * 5}s`, animationDuration: `${8 + Math.random() * 8}s` }}>
//                 <span className="text-2xl sm:text-4xl opacity-60">{i % 5 === 0 ? '💝' : i % 5 === 1 ? '🌸' : i % 5 === 2 ? '💕' : i % 5 === 3 ? '🌺' : '✨'}</span>
//               </div>
//             ))}
//           </div>
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 animate-aurora"></div>
//             <div className="absolute inset-0 bg-gradient-to-l from-blue-500/20 via-pink-500/20 to-purple-500/20 animate-aurora-reverse"></div>
//           </div>
//           <div className="text-center relative z-10 max-w-2xl w-full">
//             <div className="mb-8 sm:mb-12">
//               <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 mb-2 sm:mb-3 px-2">For My Aasma</h1>
//               <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
//                 <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-pink-400"></div>
//                 <p className="text-lg sm:text-2xl md:text-4xl text-pink-300 font-bold">5 Years of Magic</p>
//                 <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-pink-400"></div>
//               </div>
//             </div>
//             <div className="mb-8 sm:mb-12 animate-bounce-slow relative">
//               <div className="relative inline-block">
//                 <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl opacity-50 animate-pulse"></div>
//                 <div className="relative">
//                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-12 sm:w-24 sm:h-20">
//                     <div className="w-full h-full relative">
//                       <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full transform -rotate-45 animate-ribbon-flutter"></div>
//                       <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full transform rotate-45 animate-ribbon-flutter" style={{animationDelay: '0.2s'}}></div>
//                       <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-red-500 to-pink-600 rounded-full shadow-lg"></div>
//                     </div>
//                   </div>
//                   <div className="w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-pink-400 via-rose-400 to-red-400 rounded-2xl shadow-2xl relative overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent"></div>
//                     <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-lg sm:text-2xl animate-spin-slow">✨</div>
//                     <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-lg sm:text-2xl animate-spin-slow" style={{animationDelay: '0.5s'}}>💖</div>
//                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-5xl animate-heart-beat">🎁</div>
//                   </div>
//                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 h-full bg-gradient-to-b from-red-400 to-pink-500"></div>
//                 </div>
//                 {[...Array(6)].map((_, i) => (
//                   <div key={`gift-particle-${i}`} className="absolute animate-orbit" style={{ left: '50%', top: '50%', animationDelay: `${i * 0.3}s`, animationDuration: '4s' }}>
//                     <span className="text-base sm:text-xl">{i % 4 === 0 ? '✨' : i % 4 === 1 ? '💫' : i % 4 === 2 ? '⭐' : '🌟'}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="px-2 sm:px-4">
//               <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-pink-200 mb-4 sm:mb-6">
//                 {progress < 25 ? "✨ Gathering all the love..." : progress < 50 ? "💕 Wrapping your surprise..." : progress < 75 ? "🌸 Adding final touches..." : progress < 100 ? "🎉 Almost ready for Aasma..." : "💖 Your surprise awaits!"}
//               </h2>
//               <div className="relative mb-4 sm:mb-6">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur-sm opacity-50"></div>
//                 <div className="relative w-full max-w-xs sm:max-w-md h-4 sm:h-6 bg-white/10 backdrop-blur-sm rounded-full overflow-hidden mx-auto border-2 border-white/20">
//                   <div className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 transition-all duration-300 rounded-full relative overflow-hidden" style={{ width: `${progress}%` }}>
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-fast"></div>
//                     <div className="absolute right-0 top-1/2 transform -translate-y-1/2"><span className="text-base sm:text-xl animate-spin-fast">✨</span></div>
//                   </div>
//                 </div>
//               </div>
//               <div className="relative inline-block mb-4 sm:mb-6">
//                 <div className="absolute -inset-4 bg-pink-500/30 blur-xl rounded-full animate-pulse"></div>
//                 <p className="relative text-3xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 font-bold">{progress}%</p>
//               </div>
//               <div className="flex justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <div key={`loading-heart-${i}`} className="text-xl sm:text-3xl animate-heart-pop" style={{ animationDelay: `${i * 0.2}s`, opacity: progress > i * 20 ? 1 : 0.3 }}>💕</div>
//                 ))}
//               </div>
//               <p className="text-xs sm:text-base md:text-lg text-pink-300 font-medium">Creating something special just for you... 🌟</p>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }

//   if (!lightsOn) {
//     return (
//       <>
//         {AudioPlayer}
//         <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden px-4">
//           <div className="text-center z-10 max-w-2xl w-full">
//             <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-3 sm:mb-4">For Aasma</h2>
//             <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-400 mb-3 sm:mb-4">It's Dark Here... 🌙</h3>
//             <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 sm:mb-8 max-w-md mx-auto px-4">Something magical awaits in the light...</p>
//             <button onClick={handleLightsOn} className="group relative px-6 sm:px-12 py-3 sm:py-6 text-lg sm:text-2xl font-bold text-gray-300 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-gray-700 hover:border-pink-500/50">
//               <span className="relative z-10 flex items-center gap-2 sm:gap-3 justify-center">
//                 <span className="text-xl sm:text-3xl">💡</span>
//                 <span className="hidden sm:inline">Turn On The Lights, Aasma</span>
//                 <span className="sm:hidden">Turn On Lights</span>
//               </span>
//             </button>
//             <p className="text-gray-600 mt-6 sm:mt-8 text-xs sm:text-sm md:text-base px-4">5 years of waiting for this moment...</p>
//           </div>
//         </div>
//       </>
//     );
//   }

//   if (!started) {
//     return (
//       <>
//         {AudioPlayer}
//         <style>{`
//           @keyframes balloon-rise { from { transform: translateY(0); opacity: 1; } to { transform: translateY(-120vh); opacity: 0; } }
//         `}</style>
//         <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
//           {showDecorations && balloons.map((b) => (
//             <div key={b.id} className="absolute bottom-0" style={{ left: `${b.left}%`, animation: `balloon-rise ${b.duration}s linear ${b.delay}s forwards`, transform: `scale(${b.size})` }}>
//               <div style={{ backgroundColor: b.color, width: window.innerWidth < 640 ? '40px' : '60px', height: window.innerWidth < 640 ? '53px' : '80px', borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', boxShadow: `0 8px 20px ${b.color}60` }}></div>
//             </div>
//           ))}
//           <div className="flex-1 flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 min-h-screen">
//             <div className="max-w-7xl w-full">
//               <div className="text-center mb-6 sm:mb-8">
//                 <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 mb-3 sm:mb-4 px-3">
//                   {showDecorations ? "Happy Birthday, Aasma! 🎊" : "Lights On, My Love! ✨"}
//                 </h1>
//                 <p className="text-lg sm:text-xl md:text-3xl text-purple-700 mb-3 sm:mb-4 font-semibold px-3">
//                   {showDecorations ? "5 Years of Beautiful Moments" : "The Magic is About to Begin..."}
//                 </p>
//               </div>
//               <div className="flex flex-col items-center gap-4 sm:gap-6 px-3">
//                 {showDecorateButton && !showDecorations && (
//                   <button onClick={handleDecorate} className="px-6 sm:px-12 py-3 sm:py-5 text-lg sm:text-2xl font-bold text-white bg-gradient-to-r from-green-500 to-teal-600 rounded-full shadow-2xl transform transition-all hover:scale-105 active:scale-95">
//                     🎨 Decorate for Aasma!
//                   </button>
//                 )}
//                 {showMusicButton && (
//                   <button onClick={handlePlayMusic} className="px-6 sm:px-12 py-3 sm:py-5 text-lg sm:text-2xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-2xl transform transition-all hover:scale-105 active:scale-95">
//                     🎵 Play Our Song
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }

//   // GAME & FINAL CELEBRATION
//   return (
//     <>
//       {AudioPlayer}
//       <style>{`
//         @keyframes magic-float { 0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; } 50% { transform: translate(20px, -20px) rotate(180deg); opacity: 1; } }
//         @keyframes confetti-celebrate { from { transform: translateY(-10%) rotate(0deg); opacity: 1; } to { transform: translateY(100vh) rotate(1080deg); opacity: 0; } }
//         @keyframes grand-entrance { from { opacity: 0; transform: scale(0.8) translateY(50px); } to { opacity: 1; transform: scale(1) translateY(0); } }
//         @keyframes gift-float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(5deg); } }
//         @keyframes gift-glow { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
//         @keyframes icon-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
//         @keyframes message-pop { 0% { transform: translate(-50%, -50%) scale(0); opacity: 0; } 10% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; } 90% { transform: translate(-50%, -50%) scale(1); opacity: 1; } 100% { transform: translate(-50%, -50%) scale(0); opacity: 0; } }
//         @keyframes heartbeat { 0%, 100% { transform: scale(1); } 25%, 75% { transform: scale(1.2); } 50% { transform: scale(1.1); } }
//         @keyframes celebration-bounce { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-30px) rotate(15deg); } }
//         @keyframes photo-pop { from { opacity: 0; transform: scale(0.5) rotate(-10deg); } to { opacity: 1; transform: scale(1) rotate(0deg); } }
//         @keyframes spin-once { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
//         .animate-magic-float { animation: magic-float 5s ease-in-out infinite; }
//         .animate-confetti-celebrate { animation: confetti-celebrate 8s ease-out forwards; }
//         .animate-grand-entrance { animation: grand-entrance 1.5s ease-out; }
//         .animate-gift-float { animation: gift-float 3s ease-in-out infinite; }
//         .animate-gift-glow { animation: gift-glow 2s ease-in-out infinite; }
//         .animate-icon-pulse { animation: icon-pulse 2s ease-in-out infinite; }
//         .animate-message-pop { animation: message-pop 3s ease-in-out forwards; }
//         .animate-heartbeat { animation: heartbeat 1.5s ease-in-out infinite; }
//         .animate-celebration-bounce { animation: celebration-bounce 1s ease-in-out infinite; }
//         .animate-photo-pop { animation: photo-pop 0.8s ease-out; }
//         .animate-spin-once { animation: spin-once 0.6s ease-out; }
//         .animate-spin-slow { animation: spin-slow 8s linear infinite; }
//       `}</style>
//       <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           {[...Array(15)].map((_, i) => (
//             <div key={`magic-${i}`} className="absolute animate-magic-float" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s`, animationDuration: `${3 + Math.random() * 4}s` }}>
//               <span className="text-lg sm:text-2xl opacity-50">{i % 4 === 0 ? '✨' : i % 4 === 1 ? '💖' : i % 4 === 2 ? '🌸' : '⭐'}</span>
//             </div>
//           ))}
//           {[...Array(20)].map((_, i) => (
//             <div key={`confetti-${i}`} className="absolute top-0 animate-confetti-celebrate" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s`, animationDuration: `${5 + Math.random() * 5}s`, width: `${window.innerWidth < 640 ? 4 + Math.random() * 6 : 6 + Math.random() * 10}px`, height: `${window.innerWidth < 640 ? 4 + Math.random() * 6 : 6 + Math.random() * 10}px`, backgroundColor: ['#FF69B4', '#9370DB', '#87CEEB', '#FFB6C1'][Math.floor(Math.random() * 4)], borderRadius: Math.random() > 0.5 ? '50%' : '0' }}></div>
//           ))}
//         </div>
        
//         <div className="flex-1 flex items-center justify-center p-3 sm:p-4 relative z-10 min-h-screen">
//           <div className="max-w-6xl w-full">
//             <div className="text-center mb-4 sm:mb-8 animate-grand-entrance">
//               <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 mb-1 sm:mb-2">Happy Birthday Aasma! 🎂</h1>
//               <p className="text-lg sm:text-2xl md:text-3xl text-purple-700 font-bold">5 Years of Forever 💕</p>
//             </div>

//             {showGame && !showFinalSurprise && (
//               <div className="mb-8 sm:mb-12">
//                 <div className="text-center mb-4 sm:mb-8">
//                   <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl max-w-2xl mx-auto border-2 sm:border-4 border-pink-200">
//                     <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-2 sm:mb-4">🎁 Find Your Surprises! 🎁</h2>
//                     <p className="text-sm sm:text-lg md:text-xl text-gray-700 mb-2 sm:mb-4 px-2">Click on the floating gifts to reveal special messages just for you!</p>
//                     <div className="flex items-center justify-center gap-2 sm:gap-4 text-lg sm:text-2xl md:text-3xl">
//                       <span className="font-bold text-pink-600">Opened: {openedGifts.length}/{gameGifts.length}</span>
//                       <span className="animate-bounce">🎉</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-br from-pink-100/50 to-purple-100/50 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-pink-300 overflow-hidden shadow-2xl">
//                   {gameGifts.map((gift) => {
//                     const isOpened = openedGifts.includes(gift.id);
//                     return (
//                       <div key={gift.id} className={`absolute cursor-pointer transition-all duration-500 ${isOpened ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
//                         style={{ left: `${gift.left}%`, top: `${gift.top}%`, transform: `translate(-50%, -50%) scale(${gift.scale})` }}
//                         onClick={() => !isOpened && handleGiftClick(gift.id)}>
//                         <div className="relative animate-gift-float">
//                           <div className={`w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br ${gift.color} rounded-xl sm:rounded-2xl shadow-2xl relative overflow-hidden transform hover:scale-110 transition-transform`}>
//                             <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent"></div>
//                             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 sm:w-3 h-full bg-white/40"></div>
//                             <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-2 sm:h-3 bg-white/40"></div>
//                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl md:text-4xl animate-icon-pulse">{gift.icon}</div>
//                           </div>
//                           <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
//                             <span className="text-xs sm:text-sm font-bold text-purple-600 bg-white/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg animate-pulse">Click me! ✨</span>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
                  
//                   {currentMessage && (
//                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-message-pop pointer-events-none z-50 w-[90%] sm:w-auto">
//                       <div className={`bg-gradient-to-br ${currentMessage.color} p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl max-w-md mx-auto border-2 sm:border-4 border-white`}>
//                         <div className="text-center">
//                           <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4 animate-bounce">{currentMessage.icon}</div>
//                           <p className="text-sm sm:text-lg md:text-xl font-bold text-white leading-relaxed">{currentMessage.message}</p>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
                
//                 <div className="mt-4 sm:mt-8 text-center">
//                   <div className="flex justify-center gap-1 sm:gap-2 mb-2 sm:mb-4">
//                     {gameGifts.map((_, index) => (
//                       <div key={`progress-${index}`} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${openedGifts.length > index ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125' : 'bg-gray-300'}`}></div>
//                     ))}
//                   </div>
//                   <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">
//                     {openedGifts.length === 0 && "Start clicking to discover your surprises! 💝"}
//                     {openedGifts.length > 0 && openedGifts.length < gameGifts.length && "Keep going! More love awaits! 💕"}
//                   </p>
//                 </div>
//               </div>
//             )}

//             {showFinalSurprise && (
//               <div>
//                 <div className="mb-8 sm:mb-12">
//                   <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 shadow-2xl border-2 sm:border-4 border-white">
//                     <div className="text-center">
//                       <div className="text-5xl sm:text-6xl md:text-8xl mb-3 sm:mb-6 animate-spin-slow">🎊</div>
//                       <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-2 sm:mb-4 px-2">You Found All The Surprises! 🎉</h2>
//                       <p className="text-lg sm:text-2xl md:text-3xl text-white/90 mb-4 sm:mb-6">But the biggest surprise is...</p>
//                       <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
//                         <p className="text-xl sm:text-3xl md:text-5xl font-bold text-white leading-relaxed">Every day with you is the BEST gift I could ever ask for! 💝</p>
//                       </div>
//                       <div className="flex justify-center gap-2 sm:gap-4 text-3xl sm:text-4xl md:text-5xl">
//                         <span className="animate-heartbeat">💕</span>
//                         <span className="animate-heartbeat" style={{animationDelay: '0.2s'}}>💖</span>
//                         <span className="animate-heartbeat" style={{animationDelay: '0.4s'}}>💗</span>
//                         <span className="animate-heartbeat" style={{animationDelay: '0.6s'}}>💝</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="max-w-3xl mx-auto bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 shadow-2xl border-2 border-pink-300 mb-8 sm:mb-12">
//                   <div className="text-center mb-4 sm:mb-6">
//                     <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">💌</div>
//                     <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-2 sm:mb-4">My Final Message To You</h3>
//                   </div>
//                   <div className="bg-white/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 space-y-2 sm:space-y-4 text-gray-800">
//                     <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">Aasma, these 5 years have been the most incredible journey of my life. Every single moment has brought us closer together.</p>
//                     <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">You're not just my girlfriend - you're my best friend, my soulmate, my everything.</p>
//                     <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold text-purple-700">Thank you for 5 unforgettable years. I love you more than words can express! Happy Birthday, my beautiful love! 💕</p>
//                     <div className="text-center mt-3 sm:mt-4 md:mt-6">
//                       <p className="text-lg sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Forever Yours ❤️</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 mb-6 sm:mb-8">
//                   {memories.map((memory, index) => (
//                     <div key={memory.id} className="group cursor-pointer animate-photo-pop" style={{ animationDelay: `${index * 0.1}s` }} onClick={() => openGallery(memory)}>
//                       <div className={`bg-gradient-to-br ${memory.color} p-0.5 sm:p-1 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105`}>
//                         <div className="bg-white/95 rounded-xl sm:rounded-3xl p-2 sm:p-4 md:p-6 h-full flex flex-col items-center text-center min-h-[120px] sm:min-h-[160px] md:min-h-[200px]">
//                           <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-1 sm:mb-2 md:mb-4 group-hover:animate-spin-once shadow-inner">
//                             <span className="text-xl sm:text-2xl md:text-4xl">{memory.emoji}</span>
//                           </div>
//                           <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-gray-800 mb-0.5 sm:mb-1 md:mb-2">{memory.year}</h3>
//                           <h4 className="text-[10px] sm:text-xs md:text-base lg:text-lg font-semibold text-purple-600 text-center px-1">{memory.title}</h4>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="text-center">
//                   <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6 text-3xl sm:text-4xl md:text-6xl">
//                     {['🎈', '🎉', '🎊', '🎁', '🎈'].map((emoji, i) => (
//                       <span key={i} className="animate-celebration-bounce" style={{animationDelay: `${i * 0.1}s`}}>{emoji}</span>
//                     ))}
//                   </div>
//                   <p className="text-lg sm:text-2xl md:text-4xl text-purple-600 font-bold mb-1 sm:mb-2 px-2">Happy Birthday, My Beautiful Aasma! 🎂</p>
//                   <p className="text-base sm:text-xl md:text-2xl text-pink-600 font-semibold px-2">5 Years Down, Forever To Go! 💍❤️</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
      
//       {galleryOpen && selectedMemory && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
//           <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={closeGallery}></div>
//           <div className="relative bg-gradient-to-br from-pink-200 to-purple-300 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <button onClick={closeGallery} className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-lg sm:text-2xl shadow-lg hover:bg-gray-100 z-10">✕</button>
//             <div className="text-center">
//               <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-2xl">
//                 <span className="text-4xl sm:text-5xl md:text-7xl">{selectedMemory.emoji}</span>
//               </div>
//               <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-2 sm:mb-3">{selectedMemory.year}</h3>
//               <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-800 mb-3 sm:mb-4 md:mb-6">{selectedMemory.title}</h4>
//               <div className="bg-white/90 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 shadow-xl">
//                 <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">{selectedMemory.description}</p>
//                 {selectedMemory.id === 5 && <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-pink-600 mt-3 sm:mt-4 md:mt-6">5 years, and I'd choose you every single time. 💍</p>}
//               </div>
//               <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-700 font-semibold">
//                 {selectedMemory.id === 1 ? "And our story continues..." : selectedMemory.id === 5 ? "Here's to forever, my love!" : `Thank you for year ${selectedMemory.id} 💖`}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


'use client';

import { useState, useEffect, useRef } from 'react';

export default function BirthdaySurprise() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [lightsOn, setLightsOn] = useState(false);
  const [showDecorateButton, setShowDecorateButton] = useState(false);
  const [showDecorations, setShowDecorations] = useState(false);
  const [showMusicButton, setShowMusicButton] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [balloons, setBalloons] = useState([]);
  const [confetti, setConfetti] = useState([]);
  const [started, setStarted] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [gameGifts, setGameGifts] = useState([]);
  const [openedGifts, setOpenedGifts] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(null);
  const [showFinalSurprise, setShowFinalSurprise] = useState(false);
  const audioRef = useRef(null);

  const memories = [
    { id: 1, year: "Year 1", title: "When We First Met", description: "The day our story began. You walked into my life and everything changed forever.", emoji: "💕", color: "from-pink-400 via-rose-400 to-red-400", icon: "🌟" },
    { id: 2, year: "Year 2", title: "Growing Together", description: "Laughter, late night calls, and countless memories. Every moment with you is magical.", emoji: "🌹", color: "from-purple-400 via-fuchsia-400 to-pink-500", icon: "💫" },
    { id: 3, year: "Year 3", title: "Stronger Than Ever", description: "Through ups and downs, you've been my constant. My best friend, my everything.", emoji: "💖", color: "from-blue-400 via-indigo-400 to-purple-500", icon: "🌈" },
    { id: 4, year: "Year 4", title: "Beautiful Memories", description: "Each day with you feels like a dream. Your smile still makes my heart skip a beat.", emoji: "✨", color: "from-yellow-400 via-amber-400 to-orange-500", icon: "🎨" },
    { id: 5, year: "Year 5", title: "Five Years of Us", description: "Half a decade of love, growth, and happiness. Here's to forever with you, Aasma.", emoji: "💍", color: "from-green-400 via-emerald-400 to-teal-500", icon: "🎉" },
  ];

  const surpriseMessages = [
    { type: 'love', icon: '💝', message: "You make my heart skip a beat every single day!", color: 'from-pink-500 to-rose-500' },
    { type: 'memory', icon: '📸', message: "Remember our first date? I knew you were the one!", color: 'from-purple-500 to-pink-500' },
    { type: 'promise', icon: '💍', message: "I promise to love you today, tomorrow, and forever!", color: 'from-blue-500 to-purple-500' },
    { type: 'cute', icon: '🌸', message: "Your smile is more beautiful than a thousand sunsets!", color: 'from-yellow-500 to-pink-500' },
    { type: 'dream', icon: '✨', message: "You're the dream I never want to wake up from!", color: 'from-indigo-500 to-purple-500' },
    { type: 'gratitude', icon: '🙏', message: "Thank you for being YOU - perfectly imperfect for me!", color: 'from-green-500 to-teal-500' },
    { type: 'future', icon: '🌈', message: "Can't wait for all the adventures waiting for us!", color: 'from-orange-500 to-red-500' },
    { type: 'admire', icon: '👑', message: "You're not just my queen, you're my entire kingdom!", color: 'from-pink-600 to-purple-600' },
    { type: 'funny', icon: '😄', message: "You're the only person I'd share my fries with!", color: 'from-amber-500 to-orange-500' },
    { type: 'soul', icon: '💫', message: "In you, I found my soulmate and my best friend!", color: 'from-violet-500 to-fuchsia-500' },
    { type: 'forever', icon: '♾️', message: "5 years down, infinity to go, my love!", color: 'from-red-500 to-pink-500' },
    { type: 'special', icon: '🎁', message: "Every moment with you is a gift I cherish!", color: 'from-teal-500 to-cyan-500' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showGame) {
      const gifts = surpriseMessages.map((surprise, index) => ({
        id: index,
        ...surprise,
        left: 15 + (Math.random() * 70),
        top: 15 + (Math.random() * 70),
        rotation: Math.random() * 360,
        scale: 0.6 + (window.innerWidth < 640 ? Math.random() * 0.3 : Math.random() * 0.4)
      }));
      setGameGifts(gifts);
    }
  }, [showGame]);

  const handleLightsOn = () => {
    setLightsOn(true);
    setTimeout(() => setShowDecorateButton(true), 3000);
  };

  const handleDecorate = () => {
    setShowDecorations(true);
    const newBalloons = Array.from({ length: window.innerWidth < 640 ? 15 : 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 5 + Math.random() * 4,
      color: ['#FF6B9D', '#C44569', '#FFA07A', '#FFB6C1', '#DDA0DD', '#F08080'][Math.floor(Math.random() * 6)],
      size: 0.5 + (window.innerWidth < 640 ? Math.random() * 0.4 : Math.random() * 0.5)
    }));
    setBalloons(newBalloons);
    
    const newConfetti = Array.from({ length: window.innerWidth < 640 ? 30 : 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 4 + Math.random() * 3,
      color: ['#FF6B9D', '#C44569', '#FFA07A', '#FFB6C1', '#DDA0DD', '#F08080'][Math.floor(Math.random() * 6)],
      rotation: Math.random() * 360,
      size: window.innerWidth < 640 ? 4 + Math.random() * 6 : 6 + Math.random() * 10
    }));
    setConfetti(newConfetti);
    setTimeout(() => setShowMusicButton(true), 2000);
  };

  const handlePlayMusic = () => {
    setMusicPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.log("Audio play failed:", error));
    }
    setTimeout(() => {
      setStarted(true);
      setTimeout(() => setShowGame(true), 2000);
    }, 2000);
  };

  const handleAudioEnded = () => setMusicPlaying(false);
  
  const openGallery = (memory) => {
    setSelectedMemory(memory);
    setGalleryOpen(true);
  };
  
  const closeGallery = () => {
    setGalleryOpen(false);
    setTimeout(() => setSelectedMemory(null), 300);
  };

  const handleGiftClick = (giftId) => {
    if (!openedGifts.includes(giftId)) {
      const gift = gameGifts.find(g => g.id === giftId);
      setOpenedGifts([...openedGifts, giftId]);
      setCurrentMessage(gift);
      setTimeout(() => setCurrentMessage(null), 3000);
      
      if (openedGifts.length + 1 === gameGifts.length) {
        setTimeout(() => setShowFinalSurprise(true), 3500);
      }
    }
  };

  const AudioPlayer = <audio ref={audioRef} src="/hbd.mp3" onEnded={handleAudioEnded} loop={false} />;

  // LOADING SCREEN
  if (loading) {
    return (
      <>
        {AudioPlayer}
        <style>{`
          @keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); } }
          @keyframes float-up { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 10% { opacity: 0.6; } 90% { opacity: 0.6; } 100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; } }
          @keyframes aurora { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
          @keyframes aurora-reverse { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
          @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
          @keyframes ribbon-flutter { 0%, 100% { transform: rotate(-45deg) scale(1); } 50% { transform: rotate(-35deg) scale(1.1); } }
          @keyframes heart-beat { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.2); } }
          @keyframes orbit { 0% { transform: translate(-50%, -50%) rotate(0deg) translateX(80px) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg) translateX(80px) rotate(-360deg); } }
          @keyframes shimmer-fast { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
          @keyframes spin-fast { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          @keyframes heart-pop { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.3); } }
          @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          
          .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
          .animate-float-up { animation: float-up 12s ease-in-out infinite; }
          .animate-aurora { animation: aurora 20s ease-in-out infinite; }
          .animate-aurora-reverse { animation: aurora-reverse 25s ease-in-out infinite; }
          .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
          .animate-ribbon-flutter { animation: ribbon-flutter 2s ease-in-out infinite; }
          .animate-heart-beat { animation: heart-beat 1.5s ease-in-out infinite; }
          .animate-orbit { animation: orbit 4s linear infinite; }
          .animate-shimmer-fast { animation: shimmer-fast 2s linear infinite; }
          .animate-spin-fast { animation: spin-fast 1s linear infinite; }
          .animate-heart-pop { animation: heart-pop 1.5s ease-in-out infinite; }
          .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        `}</style>
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden px-3 sm:px-4">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(40)].map((_, i) => (
              <div key={`star-${i}`} className="absolute rounded-full bg-white animate-twinkle"
                style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: `${1 + Math.random() * 3}px`, height: `${1 + Math.random() * 3}px`, animationDelay: `${Math.random() * 3}s`, animationDuration: `${2 + Math.random() * 3}s`, opacity: 0.3 + Math.random() * 0.7 }} />
            ))}
            {[...Array(8)].map((_, i) => (
              <div key={`float-${i}`} className="absolute animate-float-up"
                style={{ left: `${Math.random() * 100}%`, bottom: '-50px', animationDelay: `${Math.random() * 5}s`, animationDuration: `${8 + Math.random() * 8}s` }}>
                <span className="text-2xl sm:text-4xl opacity-60">{i % 5 === 0 ? '💝' : i % 5 === 1 ? '🌸' : i % 5 === 2 ? '💕' : i % 5 === 3 ? '🌺' : '✨'}</span>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 animate-aurora"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-blue-500/20 via-pink-500/20 to-purple-500/20 animate-aurora-reverse"></div>
          </div>
          <div className="text-center relative z-10 max-w-2xl w-full">
            <div className="mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 mb-2 sm:mb-3 px-2">For My Aasma</h1>
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-pink-400"></div>
                <p className="text-lg sm:text-2xl md:text-4xl text-pink-300 font-bold">5 Years of Magic</p>
                <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-pink-400"></div>
              </div>
            </div>
            <div className="mb-8 sm:mb-12 animate-bounce-slow relative">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl opacity-50 animate-pulse"></div>
                <div className="relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-12 sm:w-24 sm:h-20">
                    <div className="w-full h-full relative">
                      <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full transform -rotate-45 animate-ribbon-flutter"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full transform rotate-45 animate-ribbon-flutter" style={{animationDelay: '0.2s'}}></div>
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-red-500 to-pink-600 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                  <div className="w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-pink-400 via-rose-400 to-red-400 rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent"></div>
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-lg sm:text-2xl animate-spin-slow">✨</div>
                    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-lg sm:text-2xl animate-spin-slow" style={{animationDelay: '0.5s'}}>💖</div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-5xl animate-heart-beat">🎁</div>
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 h-full bg-gradient-to-b from-red-400 to-pink-500"></div>
                </div>
                {[...Array(6)].map((_, i) => (
                  <div key={`gift-particle-${i}`} className="absolute animate-orbit" style={{ left: '50%', top: '50%', animationDelay: `${i * 0.3}s`, animationDuration: '4s' }}>
                    <span className="text-base sm:text-xl">{i % 4 === 0 ? '✨' : i % 4 === 1 ? '💫' : i % 4 === 2 ? '⭐' : '🌟'}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-2 sm:px-4">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-pink-200 mb-4 sm:mb-6">
                {progress < 25 ? "✨ Gathering all the love..." : progress < 50 ? "💕 Wrapping your surprise..." : progress < 75 ? "🌸 Adding final touches..." : progress < 100 ? "🎉 Almost ready for Aasma..." : "💖 Your surprise awaits!"}
              </h2>
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur-sm opacity-50"></div>
                <div className="relative w-full max-w-xs sm:max-w-md h-4 sm:h-6 bg-white/10 backdrop-blur-sm rounded-full overflow-hidden mx-auto border-2 border-white/20">
                  <div className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 transition-all duration-300 rounded-full relative overflow-hidden" style={{ width: `${progress}%` }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-fast"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2"><span className="text-base sm:text-xl animate-spin-fast">✨</span></div>
                  </div>
                </div>
              </div>
              <div className="relative inline-block mb-4 sm:mb-6">
                <div className="absolute -inset-4 bg-pink-500/30 blur-xl rounded-full animate-pulse"></div>
                <p className="relative text-3xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 font-bold">{progress}%</p>
              </div>
              <div className="flex justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={`loading-heart-${i}`} className="text-xl sm:text-3xl animate-heart-pop" style={{ animationDelay: `${i * 0.2}s`, opacity: progress > i * 20 ? 1 : 0.3 }}>💕</div>
                ))}
              </div>
              <p className="text-xs sm:text-base md:text-lg text-pink-300 font-medium">Creating something special just for you... 🌟</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!lightsOn) {
    return (
      <>
        {AudioPlayer}
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden px-4">
          <div className="text-center z-10 max-w-2xl w-full">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-3 sm:mb-4">For Aasma</h2>
            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-400 mb-3 sm:mb-4">It's Dark Here... 🌙</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 sm:mb-8 max-w-md mx-auto px-4">Something magical awaits in the light...</p>
            <button onClick={handleLightsOn} className="group relative px-6 sm:px-12 py-3 sm:py-6 text-lg sm:text-2xl font-bold text-gray-300 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-gray-700 hover:border-pink-500/50">
              <span className="relative z-10 flex items-center gap-2 sm:gap-3 justify-center">
                <span className="text-xl sm:text-3xl">💡</span>
                <span className="hidden sm:inline">Turn On The Lights, Aasma</span>
                <span className="sm:hidden">Turn On Lights</span>
              </span>
            </button>
            <p className="text-gray-600 mt-6 sm:mt-8 text-xs sm:text-sm md:text-base px-4">5 years of waiting for this moment...</p>
          </div>
        </div>
      </>
    );
  }

  // LIGHT BULB TURNING ON SCREEN
  if (lightsOn && !showDecorateButton) {
    return (
      <>
        {AudioPlayer}
        <style>{`
          @keyframes bulb-glow { 
            0% { opacity: 0; filter: brightness(1) drop-shadow(0 0 0px rgba(255, 220, 100, 0)); } 
            50% { opacity: 0.5; filter: brightness(1.5) drop-shadow(0 0 30px rgba(255, 220, 100, 0.5)); }
            100% { opacity: 1; filter: brightness(2) drop-shadow(0 0 60px rgba(255, 220, 100, 1)); } 
          }
          @keyframes light-rays { 
            0% { opacity: 0; transform: scale(0.3); } 
            100% { opacity: 0.6; transform: scale(1.2); } 
          }
          @keyframes room-brighten {
            0% { background: linear-gradient(to bottom right, rgb(17, 24, 39), rgb(0, 0, 0), rgb(17, 24, 39)); }
            100% { background: linear-gradient(to bottom right, rgb(254, 242, 242), rgb(254, 226, 226), rgb(254, 215, 226)); }
          }
          @keyframes filament-heat {
            0% { fill: #444; }
            50% { fill: #ff8800; }
            100% { fill: #ffff00; }
          }
          @keyframes swing {
            0%, 100% { transform: rotate(-2deg); }
            50% { transform: rotate(2deg); }
          }
        `}</style>
        <div className="min-h-screen relative overflow-hidden" style={{ animation: 'room-brighten 2s ease-out forwards' }}>
          {/* Light rays emanating from bulb */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none" style={{ animation: 'light-rays 2s ease-out forwards', animationDelay: '0.5s' }}>
            <div className="absolute top-32 sm:top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-gradient-radial from-yellow-200/60 via-yellow-100/30 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="flex items-center justify-center min-h-screen px-4 relative z-10">
            <div className="text-center">
              {/* Ceiling mount */}
              <div className="flex justify-center mb-2">
                <div className="w-16 sm:w-20 h-8 sm:h-10 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg shadow-lg"></div>
              </div>
              
              {/* Cord with swing animation */}
              <div className="flex justify-center" style={{ animation: 'swing 2s ease-in-out infinite', transformOrigin: 'top center' }}>
                <div className="w-1 bg-gradient-to-b from-gray-600 to-gray-700 h-20 sm:h-32 shadow-sm"></div>
              </div>
              
              {/* Light bulb */}
              <div className="relative inline-block" style={{ animation: 'swing 2s ease-in-out infinite', transformOrigin: 'top center' }}>
                {/* Glow effect */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'bulb-glow 2s ease-out forwards' }}>
                  <div className="w-32 h-32 sm:w-48 sm:h-48 bg-yellow-300/80 rounded-full blur-3xl"></div>
                </div>
                
                {/* Bulb SVG */}
                <svg className="relative z-10" width="120" height="180" viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg" style={{ animation: 'bulb-glow 2s ease-out forwards' }}>
                  {/* Glass bulb */}
                  <ellipse cx="60" cy="60" rx="45" ry="55" fill="url(#bulbGradient)" stroke="#ddd" strokeWidth="2" opacity="0.95"/>
                  
                  {/* Filament - glowing */}
                  <path d="M 50 40 Q 60 50 70 40 Q 60 60 50 70 Q 60 60 70 70" 
                        stroke="#ffff00" 
                        strokeWidth="2" 
                        fill="none" 
                        opacity="1"
                        style={{ animation: 'filament-heat 2s ease-out forwards' }}/>
                  
                  {/* Bulb base - screw threads */}
                  <rect x="40" y="110" width="40" height="8" fill="#999" stroke="#777" strokeWidth="1"/>
                  <rect x="40" y="120" width="40" height="8" fill="#888" stroke="#666" strokeWidth="1"/>
                  <rect x="40" y="130" width="40" height="8" fill="#999" stroke="#777" strokeWidth="1"/>
                  <rect x="40" y="140" width="40" height="8" fill="#888" stroke="#666" strokeWidth="1"/>
                  
                  {/* Bottom contact */}
                  <ellipse cx="60" cy="152" rx="15" ry="6" fill="#666" stroke="#555" strokeWidth="1"/>
                  
                  {/* Gradient definitions */}
                  <defs>
                    <radialGradient id="bulbGradient" cx="50%" cy="40%">
                      <stop offset="0%" style={{ stopColor: '#fffef0', stopOpacity: 0.9 }} />
                      <stop offset="70%" style={{ stopColor: '#fff8dc', stopOpacity: 0.7 }} />
                      <stop offset="100%" style={{ stopColor: '#f0f0f0', stopOpacity: 0.6 }} />
                    </radialGradient>
                  </defs>
                  
                  {/* Shine/reflection on glass */}
                  <ellipse cx="45" cy="45" rx="15" ry="20" fill="white" opacity="0.4"/>
                </svg>
              </div>
              
              {/* Text appearing after light turns on */}
              <div className="mt-8 sm:mt-12" style={{ animation: 'light-rays 2s ease-out forwards', animationDelay: '1s', opacity: 0 }}>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 mb-4">
                  Let There Be Light! ✨
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl text-purple-700 font-semibold">
                  The celebration begins...
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!started) {
    return (
      <>
        {AudioPlayer}
        <style>{`
          @keyframes balloon-rise { from { transform: translateY(0); opacity: 1; } to { transform: translateY(-120vh); opacity: 0; } }
        `}</style>
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
          {showDecorations && balloons.map((b) => (
            <div key={b.id} className="absolute bottom-0" style={{ left: `${b.left}%`, animation: `balloon-rise ${b.duration}s linear ${b.delay}s forwards`, transform: `scale(${b.size})` }}>
              <div style={{ backgroundColor: b.color, width: window.innerWidth < 640 ? '40px' : '60px', height: window.innerWidth < 640 ? '53px' : '80px', borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', boxShadow: `0 8px 20px ${b.color}60` }}></div>
            </div>
          ))}
          <div className="flex-1 flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 min-h-screen">
            <div className="max-w-7xl w-full">
              <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 mb-3 sm:mb-4 px-3">
                  {showDecorations ? "Happy Birthday, Aasma! 🎊" : "Lights On, My Love! ✨"}
                </h1>
                <p className="text-lg sm:text-xl md:text-3xl text-purple-700 mb-3 sm:mb-4 font-semibold px-3">
                  {showDecorations ? "5 Years of Beautiful Moments" : "The Magic is About to Begin..."}
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 sm:gap-6 px-3">
                {showDecorateButton && !showDecorations && (
                  <button onClick={handleDecorate} className="px-6 sm:px-12 py-3 sm:py-5 text-lg sm:text-2xl font-bold text-white bg-gradient-to-r from-green-500 to-teal-600 rounded-full shadow-2xl transform transition-all hover:scale-105 active:scale-95">
                    🎨 Decorate for Aasma!
                  </button>
                )}
                {showMusicButton && (
                  <button onClick={handlePlayMusic} className="px-6 sm:px-12 py-3 sm:py-5 text-lg sm:text-2xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-2xl transform transition-all hover:scale-105 active:scale-95">
                    🎵 Play Our Song
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // GAME & FINAL CELEBRATION
  return (
    <>
      {AudioPlayer}
      <style>{`
        @keyframes magic-float { 0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; } 50% { transform: translate(20px, -20px) rotate(180deg); opacity: 1; } }
        @keyframes confetti-celebrate { from { transform: translateY(-10%) rotate(0deg); opacity: 1; } to { transform: translateY(100vh) rotate(1080deg); opacity: 0; } }
        @keyframes grand-entrance { from { opacity: 0; transform: scale(0.8) translateY(50px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes gift-float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(5deg); } }
        @keyframes gift-glow { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        @keyframes icon-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        @keyframes message-pop { 0% { transform: translate(-50%, -50%) scale(0); opacity: 0; } 10% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; } 90% { transform: translate(-50%, -50%) scale(1); opacity: 1; } 100% { transform: translate(-50%, -50%) scale(0); opacity: 0; } }
        @keyframes heartbeat { 0%, 100% { transform: scale(1); } 25%, 75% { transform: scale(1.2); } 50% { transform: scale(1.1); } }
        @keyframes celebration-bounce { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-30px) rotate(15deg); } }
        @keyframes photo-pop { from { opacity: 0; transform: scale(0.5) rotate(-10deg); } to { opacity: 1; transform: scale(1) rotate(0deg); } }
        @keyframes spin-once { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        .animate-magic-float { animation: magic-float 5s ease-in-out infinite; }
        .animate-confetti-celebrate { animation: confetti-celebrate 8s ease-out forwards; }
        .animate-grand-entrance { animation: grand-entrance 1.5s ease-out; }
        .animate-gift-float { animation: gift-float 3s ease-in-out infinite; }
        .animate-gift-glow { animation: gift-glow 2s ease-in-out infinite; }
        .animate-icon-pulse { animation: icon-pulse 2s ease-in-out infinite; }
        .animate-message-pop { animation: message-pop 3s ease-in-out forwards; }
        .animate-heartbeat { animation: heartbeat 1.5s ease-in-out infinite; }
        .animate-celebration-bounce { animation: celebration-bounce 1s ease-in-out infinite; }
        .animate-photo-pop { animation: photo-pop 0.8s ease-out; }
        .animate-spin-once { animation: spin-once 0.6s ease-out; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div key={`magic-${i}`} className="absolute animate-magic-float" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s`, animationDuration: `${3 + Math.random() * 4}s` }}>
              <span className="text-lg sm:text-2xl opacity-50">{i % 4 === 0 ? '✨' : i % 4 === 1 ? '💖' : i % 4 === 2 ? '🌸' : '⭐'}</span>
            </div>
          ))}
          {[...Array(20)].map((_, i) => (
            <div key={`confetti-${i}`} className="absolute top-0 animate-confetti-celebrate" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s`, animationDuration: `${5 + Math.random() * 5}s`, width: `${window.innerWidth < 640 ? 4 + Math.random() * 6 : 6 + Math.random() * 10}px`, height: `${window.innerWidth < 640 ? 4 + Math.random() * 6 : 6 + Math.random() * 10}px`, backgroundColor: ['#FF69B4', '#9370DB', '#87CEEB', '#FFB6C1'][Math.floor(Math.random() * 4)], borderRadius: Math.random() > 0.5 ? '50%' : '0' }}></div>
          ))}
        </div>
        
        <div className="flex-1 flex items-center justify-center p-3 sm:p-4 relative z-10 min-h-screen">
          <div className="max-w-6xl w-full">
            <div className="text-center mb-4 sm:mb-8 animate-grand-entrance">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 mb-1 sm:mb-2">Happy Birthday Aasma! 🎂</h1>
              <p className="text-lg sm:text-2xl md:text-3xl text-purple-700 font-bold">5 Years of Forever 💕</p>
            </div>

            {showGame && !showFinalSurprise && (
              <div className="mb-8 sm:mb-12">
                <div className="text-center mb-4 sm:mb-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl max-w-2xl mx-auto border-2 sm:border-4 border-pink-200">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-2 sm:mb-4">🎁 Find Your Surprises! 🎁</h2>
                    <p className="text-sm sm:text-lg md:text-xl text-gray-700 mb-2 sm:mb-4 px-2">Click on the floating gifts to reveal special messages just for you!</p>
                    <div className="flex items-center justify-center gap-2 sm:gap-4 text-lg sm:text-2xl md:text-3xl">
                      <span className="font-bold text-pink-600">Opened: {openedGifts.length}/{gameGifts.length}</span>
                      <span className="animate-bounce">🎉</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-br from-pink-100/50 to-purple-100/50 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-pink-300 overflow-hidden shadow-2xl">
                  {gameGifts.map((gift) => {
                    const isOpened = openedGifts.includes(gift.id);
                    return (
                      <div key={gift.id} className={`absolute cursor-pointer transition-all duration-500 ${isOpened ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
                        style={{ left: `${gift.left}%`, top: `${gift.top}%`, transform: `translate(-50%, -50%) scale(${gift.scale})` }}
                        onClick={() => !isOpened && handleGiftClick(gift.id)}>
                        <div className="relative animate-gift-float">
                          <div className={`w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br ${gift.color} rounded-xl sm:rounded-2xl shadow-2xl relative overflow-hidden transform hover:scale-110 transition-transform`}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent"></div>
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 sm:w-3 h-full bg-white/40"></div>
                            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-2 sm:h-3 bg-white/40"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl md:text-4xl animate-icon-pulse">{gift.icon}</div>
                          </div>
                          <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                            <span className="text-xs sm:text-sm font-bold text-purple-600 bg-white/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg animate-pulse">Click me! ✨</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
                  {currentMessage && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-message-pop pointer-events-none z-50 w-[90%] sm:w-auto">
                      <div className={`bg-gradient-to-br ${currentMessage.color} p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl max-w-md mx-auto border-2 sm:border-4 border-white`}>
                        <div className="text-center">
                          <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4 animate-bounce">{currentMessage.icon}</div>
                          <p className="text-sm sm:text-lg md:text-xl font-bold text-white leading-relaxed">{currentMessage.message}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-4 sm:mt-8 text-center">
                  <div className="flex justify-center gap-1 sm:gap-2 mb-2 sm:mb-4">
                    {gameGifts.map((_, index) => (
                      <div key={`progress-${index}`} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${openedGifts.length > index ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125' : 'bg-gray-300'}`}></div>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">
                    {openedGifts.length === 0 && "Start clicking to discover your surprises! 💝"}
                    {openedGifts.length > 0 && openedGifts.length < gameGifts.length && "Keep going! More love awaits! 💕"}
                  </p>
                </div>
              </div>
            )}

            {showFinalSurprise && (
              <div>
                <div className="mb-8 sm:mb-12">
                  <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 shadow-2xl border-2 sm:border-4 border-white">
                    <div className="text-center">
                      <div className="text-5xl sm:text-6xl md:text-8xl mb-3 sm:mb-6 animate-spin-slow">🎊</div>
                      <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-2 sm:mb-4 px-2">You Found All The Surprises! 🎉</h2>
                      <p className="text-lg sm:text-2xl md:text-3xl text-white/90 mb-4 sm:mb-6">But the biggest surprise is...</p>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
                        <p className="text-xl sm:text-3xl md:text-5xl font-bold text-white leading-relaxed">Every day with you is the BEST gift I could ever ask for! 💝</p>
                      </div>
                      <div className="flex justify-center gap-2 sm:gap-4 text-3xl sm:text-4xl md:text-5xl">
                        <span className="animate-heartbeat">💕</span>
                        <span className="animate-heartbeat" style={{animationDelay: '0.2s'}}>💖</span>
                        <span className="animate-heartbeat" style={{animationDelay: '0.4s'}}>💗</span>
                        <span className="animate-heartbeat" style={{animationDelay: '0.6s'}}>💝</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="max-w-3xl mx-auto bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 shadow-2xl border-2 border-pink-300 mb-8 sm:mb-12">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">💌</div>
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-2 sm:mb-4">My Final Message To You</h3>
                  </div>
                  <div className="bg-white/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 space-y-2 sm:space-y-4 text-gray-800">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">Aasma, these 5 years have been the most incredible journey of my life. Every single moment has brought us closer together.</p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">You're not just my girlfriend - you're my best friend, my soulmate, my everything.</p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold text-purple-700">Thank you for 5 unforgettable years. I love you more than words can express! Happy Birthday, my beautiful love! 💕</p>
                    <div className="text-center mt-3 sm:mt-4 md:mt-6">
                      <p className="text-lg sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Forever Yours ❤️</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 mb-6 sm:mb-8">
                  {memories.map((memory, index) => (
                    <div key={memory.id} className="group cursor-pointer animate-photo-pop" style={{ animationDelay: `${index * 0.1}s` }} onClick={() => openGallery(memory)}>
                      <div className={`bg-gradient-to-br ${memory.color} p-0.5 sm:p-1 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105`}>
                        <div className="bg-white/95 rounded-xl sm:rounded-3xl p-2 sm:p-4 md:p-6 h-full flex flex-col items-center text-center min-h-[120px] sm:min-h-[160px] md:min-h-[200px]">
                          <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-1 sm:mb-2 md:mb-4 group-hover:animate-spin-once shadow-inner">
                            <span className="text-xl sm:text-2xl md:text-4xl">{memory.emoji}</span>
                          </div>
                          <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-gray-800 mb-0.5 sm:mb-1 md:mb-2">{memory.year}</h3>
                          <h4 className="text-[10px] sm:text-xs md:text-base lg:text-lg font-semibold text-purple-600 text-center px-1">{memory.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6 text-3xl sm:text-4xl md:text-6xl">
                    {['🎈', '🎉', '🎊', '🎁', '🎈'].map((emoji, i) => (
                      <span key={i} className="animate-celebration-bounce" style={{animationDelay: `${i * 0.1}s`}}>{emoji}</span>
                    ))}
                  </div>
                  <p className="text-lg sm:text-2xl md:text-4xl text-purple-600 font-bold mb-1 sm:mb-2 px-2">Happy Birthday, My Beautiful Aasma! 🎂</p>
                  <p className="text-base sm:text-xl md:text-2xl text-pink-600 font-semibold px-2">5 Years Down, Forever To Go! 💍❤️</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {galleryOpen && selectedMemory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={closeGallery}></div>
          <div className="relative bg-gradient-to-br from-pink-200 to-purple-300 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button onClick={closeGallery} className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-lg sm:text-2xl shadow-lg hover:bg-gray-100 z-10">✕</button>
            <div className="text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-2xl">
                <span className="text-4xl sm:text-5xl md:text-7xl">{selectedMemory.emoji}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-2 sm:mb-3">{selectedMemory.year}</h3>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-800 mb-3 sm:mb-4 md:mb-6">{selectedMemory.title}</h4>
              <div className="bg-white/90 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 shadow-xl">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">{selectedMemory.description}</p>
                {selectedMemory.id === 5 && <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-pink-600 mt-3 sm:mt-4 md:mt-6">5 years, and I'd choose you every single time. 💍</p>}
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-700 font-semibold">
                {selectedMemory.id === 1 ? "And our story continues..." : selectedMemory.id === 5 ? "Here's to forever, my love!" : `Thank you for year ${selectedMemory.id} 💖`}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
