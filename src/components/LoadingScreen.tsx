import { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

export function LoadingScreen() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 3600),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="screen-container overflow-hidden">
      <div className="text-center">
        <div className="relative flex flex-col items-center justify-center gap-8">
          <div className="animate-scale-in">
            <div className="relative w-64 h-64">
              <div className="profile-image">
                <img 
                  src={profileImage} 
                  alt="Luigi Bertoli Menezes"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="profile-badge-large">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
            <span className="bg-gradient-to-r from-primary via-tertiary to-primary bg-clip-text text-transparent">
              Bem-vindo ao meu dossiê
            </span>
          </h1>
          
          {step >= 1 && (
            <p className="text-2xl md:text-3xl text-gray-400 font-light animate-fade-in-up">
              por <span className="text-white font-semibold">Luigi Bertoli Menezes</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}


