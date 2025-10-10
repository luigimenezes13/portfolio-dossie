import { CheckCircle2 } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

interface ProfileImageProps {
  colaboradorNome: string;
}

export function ProfileImage({ colaboradorNome }: ProfileImageProps) {
  return (
    <div className="relative group">
      <div className="relative w-24 h-24 transition-all duration-700 ease-out group-hover:w-64 group-hover:h-64">
        <div className="rounded-full overflow-hidden border-4 border-primary/30 shadow-lg transition-all duration-700 w-full h-full group-hover:border-primary/60 group-hover:shadow-2xl group-hover:shadow-primary/30">
          <img 
            src={profileImage} 
            alt={`Foto de ${colaboradorNome}`}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
        </div>
        
        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-primary to-tertiary rounded-full flex items-center justify-center border-2 border-black transition-all duration-700 group-hover:scale-125 group-hover:w-12 group-hover:h-12 group-hover:-bottom-2 group-hover:-right-2">
          <CheckCircle2 className="w-4 h-4 text-white transition-all duration-700 group-hover:w-6 group-hover:h-6" />
        </div>
      </div>
    </div>
  );
}
