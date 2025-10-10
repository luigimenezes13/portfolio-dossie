import { Calendar } from 'lucide-react';
import { ProfileImage } from './ProfileImage';
import type { Dossie } from '../types/api';

interface HeaderProps {
  dossie: Dossie;
}

export function Header({ dossie }: HeaderProps) {
  return (
    <header className="mb-12">
      <div className="flex items-center gap-6 mb-4">
        <div className="animate-fade-in-left">
          <ProfileImage 
            colaboradorNome={dossie.colaborador.nome}
            colaboradorFuncao={dossie.colaborador.funcaoAtual}
          />
        </div>
        <div className="animate-fade-in-right" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-tertiary to-primary bg-clip-text text-transparent mb-2">
            {dossie.colaborador.nome}
          </h1>
          <p className="text-gray-400 text-lg mb-1">{dossie.colaborador.funcaoAtual}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {dossie.colaborador.idade} anos
            </span>
            <span>•</span>
            <span>Início: {dossie.colaborador.dataInicio}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
