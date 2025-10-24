import { Award, ArrowRight, Users, Brain, HeartPulse, Sparkles, Package, Headphones, Code, Zap, Crosshair, MessageSquare, TrendingUp, Shield, Flame, Star, Trophy, BookOpen, GraduationCap, FileText, Globe, Clock, CheckCircle, PlayCircle, Calendar, Briefcase, Settings } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Dossie } from '../types/api';

interface TrajetoriaSectionProps {
  trajetoria: Dossie['trajetoria'];
}

// Mapeamento uniforme para desenvolvimento pessoal - cores suaves e consistentes
const getDesenvolvimentoInfo = (tipo: string) => {
  // Configuração uniforme para todos os tipos
  const uniformConfig = {
    gradient: 'from-primary/10 via-neutral-900/30 to-secondary/10',
    borderColor: 'border-primary/30',
    iconBg: 'bg-primary/20',
    iconColor: 'text-primary',
      statusColors: {
        'Concluído': 'status-completed',
        'Em andamento': 'status-in-progress',
        'Planejado': 'status-planned'
      }
  };

  const mapping: Record<string, { 
    icon: typeof BookOpen; 
    gradient: string;
    borderColor: string;
    iconBg: string;
    iconColor: string;
    statusColors: Record<string, string>;
  }> = {
    'Curso': { 
      icon: BookOpen, 
      ...uniformConfig
    },
    'Certificação': { 
      icon: GraduationCap, 
      ...uniformConfig
    },
    'Graduação': { 
      icon: GraduationCap, 
      ...uniformConfig
    },
    'Pós-graduação': { 
      icon: GraduationCap, 
      ...uniformConfig
    },
    'Livro': { 
      icon: BookOpen, 
      ...uniformConfig
    },
    'Workshop': { 
      icon: Users, 
      ...uniformConfig
    },
    'Projeto Pessoal': { 
      icon: Code, 
      ...uniformConfig
    },
    'Pesquisa Acadêmica': { 
      icon: FileText, 
      ...uniformConfig
    },
    'Idioma': { 
      icon: Globe, 
      ...uniformConfig
    }
  };
  
  return mapping[tipo] || { 
    icon: BookOpen, 
    ...uniformConfig
  };
};

// Configuração uniforme para características - cores neutras e suaves
const getCaracteristicaInfo = (caracteristica: string) => {
  // Configuração uniforme para todas as características
  const uniformConfig = {
    gradient: 'from-secondary/10 via-neutral-900/30 to-tertiary/10',
    borderColor: 'border-secondary/30',
    iconBg: 'bg-secondary/20',
    textColor: 'group-hover:text-neutral-300',
    glowColor: 'group-hover:shadow-secondary/20',
    iconColor: 'text-secondary'
  };

  const mapping: Record<string, { 
    icon: typeof Zap; 
    description: string; 
    gradient: string;
    borderColor: string;
    iconBg: string;
    textColor: string;
    glowColor: string;
    iconColor: string;
  }> = {
    'Proativo': { 
      icon: Zap, 
      description: 'Toma iniciativa e antecipa necessidades',
      ...uniformConfig
    },
    'Disciplinado': { 
      icon: Crosshair, 
      description: 'Foco e consistência em processos',
      ...uniformConfig
    },
    'Ético': { 
      icon: Shield, 
      description: 'Integridade e valores sólidos',
      ...uniformConfig
    },
    'Maduro': { 
      icon: Trophy, 
      description: 'Responsabilidade e visão estratégica',
      ...uniformConfig
    },
    'Comunicativo': { 
      icon: MessageSquare, 
      description: 'Excelência em comunicação interpessoal',
      ...uniformConfig
    },
    'Analítico': { 
      icon: Brain, 
      description: 'Pensamento crítico e resolução de problemas',
      ...uniformConfig
    },
    'Criativo': { 
      icon: Sparkles, 
      description: 'Inovação e soluções originais',
      ...uniformConfig
    },
    'Organizado': { 
      icon: Crosshair, 
      description: 'Gestão eficiente de tarefas e tempo',
      ...uniformConfig
    },
    'High performance': { 
      icon: Flame, 
      description: 'Alto desempenho e excelência',
      ...uniformConfig
    },
    'Ownership elevado': { 
      icon: Star, 
      description: 'Assume responsabilidade e entrega resultados',
      ...uniformConfig
    },
    'Team player': { 
      icon: Users, 
      description: 'Colaboração e trabalho em equipe',
      ...uniformConfig
    },
    'Resiliente': { 
      icon: TrendingUp, 
      description: 'Supera desafios e se adapta',
      ...uniformConfig
    }
  };
  
  return mapping[caracteristica] || { 
    icon: Star, 
    description: 'Qualidade profissional destacada',
    ...uniformConfig
  };
};

// Palavras-chave técnicas que devem ser destacadas (ordenadas por prioridade/tamanho)
const TECHNICAL_KEYWORDS = [
  // Arquitetura (multi-palavra primeiro)
  'Clean Architecture', 'Design Patterns', 
  // Metodologias
  'SCRUM', 'Agile', 'Ágil', 'Discovery', 'Sprint', 'Kanban', 'metodologia ágil',
  // APIs e Integrações
  'APIs', 'API', 'REST', 'GraphQL', 'Microservices',
  // Support
  'N3', 'Help Desk', 'Suporte técnico',
  // Backend & Arquitetura
  'Backend', 'DDD', 'SOLID', 
  // Tecnologias
  'Node.js', 'TypeScript', 'Python', 'Java',
  // DevOps
  'DevOps', 'CI/CD', 'Docker', 'Kubernetes'
];

// Função para extrair e destacar palavras-chave técnicas (SEM remover do texto original)
const extractKeywords = (text: string): { description: string; keywords: string[]; hasKeywords: boolean } => {
  const foundKeywords: string[] = [];
  
  // Procurar por palavras-chave (case-insensitive), mantendo ordem de aparição
  TECHNICAL_KEYWORDS.forEach(keyword => {
    // Escapar caracteres especiais no regex
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'gi');
    const matches = text.match(regex);
    
    if (matches) {
      matches.forEach(match => {
        if (!foundKeywords.includes(match)) {
          foundKeywords.push(match);
        }
      });
    }
  });
  
  return {
    description: text, // Mantém o texto original intacto
    keywords: foundKeywords,
    hasKeywords: foundKeywords.length > 0
  };
};

// Configuração uniforme para áreas de atuação - cores neutras e suaves
const getAreaInfo = (area: string) => {
  // Configuração uniforme para todas as áreas
  const uniformConfig = {
    gradient: 'from-primary/10 via-neutral-900/30 to-secondary/10',
    borderGradient: 'border-primary/30',
    glowColor: 'group-hover:shadow-primary/20',
    iconBg: 'bg-primary/20',
    iconBorder: 'border-primary/40'
  };

  const mapping: Record<string, { 
    icon: typeof Package; 
    gradient: string;
    borderGradient: string;
    glowColor: string;
    iconBg: string;
    iconBorder: string;
  }> = {
    'Produto': { 
      icon: Package, 
      ...uniformConfig
    },
    'Help Desk': { 
      icon: Headphones, 
      ...uniformConfig
    },
    'Desenvolvimento': { 
      icon: Code, 
      ...uniformConfig
    }
  };
  
  return mapping[area] || { 
    icon: ArrowRight, 
    ...uniformConfig
  };
};

// Configuração para dimensões PIFE - usando cores vibrantes da paleta
const getDimensaoInfo = (dimensao: string) => {
  const mapping: Record<string, { icon: typeof Users; letter: string; color: string; colorLight: string; bgColor: string; borderColor: string; glowColor: string; description: string }> = {
    'Pessoal': { 
      icon: Users, 
      letter: 'P', 
      description: 'Relacionamentos e networking',
      color: 'text-primary',
      colorLight: 'text-primary',
      bgColor: 'bg-primary/15',
      borderColor: 'border-primary/40',
      glowColor: 'shadow-primary/20'
    },
    'Intelectual': { 
      icon: Brain, 
      letter: 'I', 
      description: 'Conhecimento e aprendizado',
      color: 'text-secondary',
      colorLight: 'text-secondary-light',
      bgColor: 'bg-secondary/15',
      borderColor: 'border-secondary/40',
      glowColor: 'shadow-secondary/20'
    },
    'Físico': { 
      icon: HeartPulse, 
      letter: 'F', 
      description: 'Saúde e bem-estar',
      color: 'text-tertiary',
      colorLight: 'text-tertiary-light',
      bgColor: 'bg-tertiary/15',
      borderColor: 'border-tertiary/40',
      glowColor: 'shadow-tertiary/20'
    },
    'Emocional': { 
      icon: Users, 
      letter: 'E', 
      description: 'Inteligência emocional e soft skills',
      color: 'text-tertiary',
      colorLight: 'text-tertiary-light',
      bgColor: 'bg-tertiary/15',
      borderColor: 'border-tertiary/40',
      glowColor: 'shadow-tertiary/20'
    },
    'Espiritual': { 
      icon: Sparkles, 
      letter: 'S', 
      description: 'Propósito e valores',
      color: 'text-secondary',
      colorLight: 'text-secondary-light',
      bgColor: 'bg-secondary/15',
      borderColor: 'border-secondary/40',
      glowColor: 'shadow-secondary/20'
    }
  };
  
  return mapping[dimensao] || { 
    icon: Users, 
    letter: 'P', 
    description: 'Dimensão de desenvolvimento',
    color: 'text-neutral-400',
    colorLight: 'text-neutral-300',
    bgColor: 'bg-neutral-700/15',
    borderColor: 'border-neutral-700/40',
    glowColor: 'shadow-neutral-700/20'
  };
};

export function TrajetoriaSection({ trajetoria }: TrajetoriaSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Debug temporário para verificar visibilidade
  console.log('TrajetoriaSection:', { 
    isVisible, 
    trajetoria: !!trajetoria,
    areas: trajetoria?.areas?.length,
    desenvolvimentoPessoal: trajetoria?.desenvolvimentoPessoal?.length,
    perfil: trajetoria?.perfil
  });
  
  // Forçar visibilidade para teste
  const forceVisible = true;

  return (
    <section 
      ref={ref}
      className={`section-card ${
        forceVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
      style={{ minHeight: '200px' }}
    >
      <div className="section-header">
        <div className="icon-container bg-gradient-to-br from-tertiary/20 to-tertiary-light/20 border-tertiary/50 shadow-lg shadow-tertiary/20">
          <Award className="w-7 h-7 text-tertiary drop-shadow-lg" />
        </div>
        <h2 className="section-title bg-gradient-to-r from-white via-tertiary to-white bg-clip-text text-transparent">Trajetória Profissional</h2>
      </div>
      
      <div className="mb-10">
        <h3 className="text-subtitle">Perfil Profissional</h3>
        {typeof trajetoria.perfil === 'string' ? (
          <p className="text-neutral-200 text-lg leading-relaxed">{trajetoria.perfil}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trajetoria.perfil.map((caracteristica, idx) => {
              const info = getCaracteristicaInfo(caracteristica);
              const CaracteristicaIcon = info.icon;
              
              return (
                <div
                  key={idx}
                  className="group relative card-base cursor-default overflow-hidden hover:shadow-xl hover:shadow-neutral-700/20"
                >
                  {/* Background animated gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient.replace(/\/\d+/g, '/15')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-start gap-3">
                    {/* Icon container */}
                    <div className={`flex-shrink-0 w-10 h-10 ${info.iconBg} border-2 ${info.borderColor} rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md`}>
                      <CaracteristicaIcon className={`w-5 h-5 ${info.iconColor}`} />
                    </div>
                    
                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-white font-bold text-base mb-1 ${info.textColor} transition-colors duration-300`}>
                        {caracteristica}
                      </h4>
                      <p className="text-neutral-300 text-xs leading-relaxed line-clamp-2 group-hover:text-white transition-colors duration-300">
                        {info.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative corner accent - cor específica de cada card */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${info.iconBg.replace('/15', '/8').replace('/16', '/8').replace('/18', '/10').replace('/20', '/10')} to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="mb-10">
        <h3 className="text-subtitle">Áreas de Atuação</h3>
        <div className="space-y-6">
          {trajetoria.areas.map((area, idx) => {
            const areaInfo = getAreaInfo(area.nome);
            const AreaIcon = areaInfo.icon;
            const { description, keywords } = area.descricao ? extractKeywords(area.descricao) : { description: '', keywords: [] };
            
              return (
                <div 
                  key={idx} 
                  className="relative group card-base hover:shadow-2xl hover:shadow-neutral-700/20"
                >
            {/* Timeline indicator - colorido por área */}
            <div className={`absolute -left-3 top-8 w-6 h-6 ${
              idx === 0 ? 'bg-gradient-to-br from-secondary to-secondary-light' :
              idx === 1 ? 'bg-gradient-to-br from-primary to-primary-light' :
              'bg-gradient-to-br from-tertiary to-tertiary-light'
            } border-4 border-black rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300`}></div>
                
                {/* Header com ícone e período */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 ${
                      idx === 0 ? 'bg-secondary/15 border-secondary/40' :
                      idx === 1 ? 'bg-primary/15 border-primary/40' :
                      'bg-tertiary/15 border-tertiary/40'
                    } rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                      <AreaIcon className={`w-6 h-6 ${
                        idx === 0 ? 'text-secondary' :
                        idx === 1 ? 'text-primary' :
                        'text-tertiary'
                      }`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl mb-1">
                        {area.nome}
                      </h4>
                      {area.periodo && (
                        <span className={`text-xs font-bold uppercase tracking-wider ${
                          idx === 0 ? 'text-secondary/70' :
                          idx === 1 ? 'text-primary/70' :
                          'text-tertiary/70'
                        }`}>
                          {area.periodo}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Descrição */}
                {description && (
                  <p className="text-neutral-200 text-base leading-relaxed mb-2 pl-1">
                    {description}
                  </p>
                )}
                
                {/* Projeto */}
                {area.projeto && (
                  <div className="mb-3 pl-1">
                    <span className="text-neutral-300 text-sm font-medium">Projeto: </span>
                    <span className="text-primary font-semibold">{area.projeto}</span>
                  </div>
                )}
                
                {/* Keywords badges */}
                {keywords.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {keywords.map((keyword, kidx) => (
                      <span
                        key={kidx}
                        className={`badge-tech ${
                          kidx % 4 === 0 ? 'hover:border-secondary/50 hover:bg-secondary/10 hover:text-secondary' :
                          kidx % 4 === 1 ? 'hover:border-primary/50 hover:bg-primary/10 hover:text-primary' :
                          kidx % 4 === 2 ? 'hover:border-tertiary/50 hover:bg-tertiary/10 hover:text-tertiary' :
                          'hover:border-tertiary/50 hover:bg-tertiary/10 hover:text-tertiary'
                        }`}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Decorative gradient on hover - uniforme */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-700/5 to-neutral-600/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 -z-10"></div>
              </div>
            );
          })}
        </div>
      </div>


      {trajetoria.desenvolvimentoPessoal && trajetoria.desenvolvimentoPessoal.length > 0 && (
        <div>
          <h3 className="text-subtitle">Desenvolvimento Pessoal</h3>
          
          {/* Timeline vertical para desenvolvimento pessoal */}
          <div className="relative pl-8 mt-6">
            {/* Linha vertical da timeline - gradiente suave */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-600"></div>
            
            <div className="space-y-6">
              {trajetoria.desenvolvimentoPessoal.map((item, idx) => {
                if (typeof item === 'string') {
                  return (
                    <div key={idx} className="relative flex items-start gap-4">
                    {/* Timeline dot - colorido */}
                    <div className="absolute -left-8 w-4 h-4 bg-gradient-to-br from-tertiary to-tertiary-light border-4 border-black rounded-full shadow-lg shadow-tertiary/30"></div>
                      
                      {/* Card de texto livre */}
                      <div className="flex-1 card-compact">
                        <p className="text-base text-neutral-200 leading-relaxed">{item}</p>
                      </div>
                    </div>
                  );
                }
                
                const info = getDesenvolvimentoInfo(item.tipo);
                const DesenvolvimentoIcon = info.icon;
                const statusInfo = info.statusColors[item.status || 'Planejado'];
                
                return (
                  <div key={idx} className="relative flex items-start gap-4">
                    {/* Timeline dot com cor baseada no status - tons suaves */}
                    <div className={`absolute -left-8 w-4 h-4 ${
                      item.status === 'Concluído' ? 'bg-secondary' :
                      item.status === 'Em andamento' ? 'bg-tertiary' :
                      'bg-primary'
                    } border-4 border-black rounded-full shadow-lg`}></div>
                    
                    {/* Card principal */}
                    <div className="flex-1 card-base hover:shadow-xl hover:shadow-neutral-700/20">
                      
                      {/* Header com ícone, tipo e status */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          {/* Ícone do tipo */}
                          <div className={`w-12 h-12 ${info.iconBg} border-2 ${info.borderColor} rounded-xl flex items-center justify-center shadow-md`}>
                            <DesenvolvimentoIcon className={`w-6 h-6 ${info.iconColor}`} />
                          </div>
                          
                          <div>
                            <h4 className="text-white font-bold text-lg mb-1">
                              {item.titulo}
                            </h4>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className={`px-3 py-1 rounded-lg border text-xs font-semibold ${
                                item.tipo === 'Curso' || item.tipo === 'Certificação' ? 'bg-primary/15 border-primary/30 text-primary' :
                                item.tipo === 'Workshop' ? 'bg-secondary/15 border-secondary/30 text-secondary' :
                                item.tipo === 'Projeto Pessoal' ? 'bg-tertiary/15 border-tertiary/30 text-tertiary' :
                                'bg-tertiary/15 border-tertiary/30 text-tertiary'
                              }`}>
                                {item.tipo}
                              </span>
                              
                              {item.status && (
                                <span className={`px-3 py-1 rounded-lg border text-xs font-semibold ${statusInfo}`}>
                                  {item.status === 'Concluído' && <CheckCircle className="w-3 h-3 inline mr-1" />}
                                  {item.status === 'Em andamento' && <PlayCircle className="w-3 h-3 inline mr-1" />}
                                  {item.status === 'Planejado' && <Clock className="w-3 h-3 inline mr-1" />}
                                  {item.status}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Período */}
                        {item.periodo && (
                          <div className="flex items-center gap-1 text-xs text-tertiary whitespace-nowrap font-medium">
                            <Calendar className="w-3 h-3" />
                            {item.periodo}
                          </div>
                        )}
                      </div>
                      
                      {/* Instituição */}
                      {item.instituicao && (
                        <div className="pl-15">
                          <p className="text-sm text-neutral-300 font-medium">
                            {item.instituicao}
                          </p>
                        </div>
                      )}
                      
                      {/* Progress bar para status */}
                      {item.status && (
                        <div className="mt-4">
                          <div className="w-full bg-neutral-800 rounded-full h-1.5">
                            <div className={`h-1.5 rounded-full transition-all duration-1000 ${
                              item.status === 'Concluído' ? 'progress-completed w-full' :
                              item.status === 'Em andamento' ? 
                                (idx === 0 ? 'progress-in-progress w-5/6' : 'progress-in-progress w-1/3') :
                              'progress-planned w-1/3'
                            }`}></div>
                          </div>
                          <div className="flex justify-between text-xs text-neutral-400 mt-1 font-medium">
                            <span>Início</span>
                            <span className={`font-semibold ${
                              item.status === 'Concluído' ? 'text-secondary' :
                              item.status === 'Em andamento' ? 'text-tertiary' :
                              'text-primary'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Fit Cultural - PIFE & Growth */}
      {trajetoria.fitCultural && (
        <div className="mb-10">
          <h3 className="text-subtitle">Fit Cultural</h3>
          
          {/* PIFE Section */}
          {trajetoria.fitCultural.pife && trajetoria.fitCultural.pife.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-xl flex items-center justify-center border-2 border-primary/50 shadow-lg shadow-primary/20">
                  <Users className="w-6 h-6 text-primary drop-shadow-lg" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">PIFE - Desenvolvimento Holístico</h4>
                  <p className="text-sm text-primary font-medium">Dimensões pessoais e profissionais</p>
                </div>
              </div>
              
              {/* PIFE Acronym Header */}
              <div className="mt-4 p-6 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border border-primary/30 rounded-xl shadow-lg shadow-primary/10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-2">
                    {[
                      { letter: 'P', color: 'text-primary', bg: 'bg-primary/20', border: 'border-primary/50', glow: 'hover:shadow-primary/30' },
                      { letter: 'I', color: 'text-secondary-light', bg: 'bg-secondary/20', border: 'border-secondary/50', glow: 'hover:shadow-secondary/30' },
                      { letter: 'F', color: 'text-tertiary-light', bg: 'bg-tertiary/20', border: 'border-tertiary/50', glow: 'hover:shadow-tertiary/30' },
                      { letter: 'E', color: 'text-tertiary-light', bg: 'bg-tertiary/20', border: 'border-tertiary/50', glow: 'hover:shadow-tertiary/30' }
                    ].map((item, idx) => (
                      <div 
                        key={item.letter}
                        className={`w-10 h-10 ${item.bg} border-2 ${item.border} rounded-lg flex items-center justify-center animate-fade-in-up transition-all hover:scale-110 hover:rotate-6 duration-300 cursor-pointer shadow-lg ${item.glow}`}
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <span className={`font-bold text-lg drop-shadow-lg ${item.letter === 'P' ? 'text-primary' : item.color}`} style={item.letter === 'P' ? { color: '#B91C1C' } : {}}>{item.letter}</span>
                      </div>
                    ))}
                  </div>
                  <div className="hidden sm:block h-12 w-px bg-primary/40"></div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-white">
                      Modelo de Desenvolvimento Holístico
                    </p>
                    <p className="text-sm mt-1 font-semibold">
                      <span className="text-primary-light">Pessoal</span> · 
                      <span className="text-secondary-light"> Intelectual</span> · 
                      <span className="text-tertiary-light"> Físico</span> · 
                      <span className="text-tertiary-light"> Emocional</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {trajetoria.fitCultural.pife.map((item, idx) => {
                  const info = getDimensaoInfo(item.dimensao);
                  const Icon = info.icon;
                  
                  return (
                    <div 
                      key={idx} 
                      className={`relative group card-base hover:shadow-xl hover:${info.glowColor}`}
                    >
                      {/* Letter Badge */}
                      <div className={`absolute -top-3 -left-3 w-14 h-14 ${info.bgColor} border-2 ${info.borderColor} rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl group-hover:${info.glowColor}`}>
                        <span className={`${info.colorLight} font-bold text-2xl drop-shadow-lg`} style={info.letter === 'P' ? { color: '#B91C1C' } : {}}>
                          {info.letter}
                        </span>
                      </div>
                      
                      {/* Icon */}
                      <div className="flex items-start gap-4 mb-4 mt-6">
                        <div className={`p-3 ${info.bgColor} border ${info.borderColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div className="flex-1">
                          <h5 className={`${info.color} font-bold text-lg mb-2`}>
                            {item.dimensao}
                          </h5>
                          <p className="text-neutral-200 text-sm font-medium mb-2">
                            {info.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Exemplo prático */}
                      <div className="pl-1">
                        <p className="text-neutral-100 text-sm leading-relaxed">
                          <span className="text-neutral-300 font-medium">Exemplo: </span>
                          {item.exemploPratico}
                        </p>
                      </div>
                      
                      {/* Decorative gradient overlay on hover */}
                      <div className="absolute inset-0 bg-neutral-700/20 opacity-0 group-hover:opacity-30 rounded-xl transition-opacity duration-500 -z-10"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Growth Principles Section */}
          {trajetoria.fitCultural.growth && trajetoria.fitCultural.growth.length > 0 && (
            <div>
              {/* Growth Acronym Header */}
              <div className="mt-4 p-6 bg-gradient-to-br from-secondary/20 via-secondary/10 to-secondary/5 border border-secondary/30 rounded-xl shadow-lg shadow-secondary/10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-2">
                    {[
                      { letter: 'G', color: 'text-secondary-light', bg: 'bg-secondary/20', border: 'border-secondary/50', glow: 'hover:shadow-secondary/30' },
                      { letter: 'R', color: 'text-primary-light', bg: 'bg-primary/20', border: 'border-primary/50', glow: 'hover:shadow-primary/30' },
                      { letter: 'O', color: 'text-tertiary-light', bg: 'bg-tertiary/20', border: 'border-tertiary/50', glow: 'hover:shadow-tertiary/30' },
                      { letter: 'W', color: 'text-secondary-light', bg: 'bg-secondary/20', border: 'border-secondary/50', glow: 'hover:shadow-secondary/30' },
                      { letter: 'T', color: 'text-primary-light', bg: 'bg-primary/20', border: 'border-primary/50', glow: 'hover:shadow-primary/30' },
                      { letter: 'H', color: 'text-tertiary-light', bg: 'bg-tertiary/20', border: 'border-tertiary/50', glow: 'hover:shadow-tertiary/30' }
                    ].map((item, idx) => (
                      <div 
                        key={item.letter}
                        className={`w-10 h-10 ${item.bg} border-2 ${item.border} rounded-lg flex items-center justify-center animate-fade-in-up transition-all hover:scale-110 hover:rotate-6 duration-300 cursor-pointer shadow-lg ${item.glow}`}
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <span className={`${item.color} font-bold text-lg drop-shadow-lg`}>{item.letter}</span>
                      </div>
                    ))}
                  </div>
                  <div className="hidden sm:block h-10 w-px bg-secondary/40"></div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-white">
                      Growth Principles
                    </p>
                    <p className="text-sm mt-1 font-semibold text-secondary-light">
                      Desenvolvimento contínuo e excelência operacional
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 mt-6">
                {trajetoria.fitCultural.growth.map((principio, idx) => {
                  // Mapeamento de ícones por índice
                  const growthIcons = [TrendingUp, MessageSquare, Briefcase, Settings, Code, Flame];
                  const GrowthIcon = growthIcons[idx] || Star;
                  
                  return (
                  <div 
                    key={idx}
                    className={`relative group card-base hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300`}
                  >
                    {/* Letter Badge - using first letter of principle */}
                    <div className={`absolute -top-3 -left-3 w-12 h-12 bg-secondary/15 border-2 border-secondary/40 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-secondary/25`}>
                      <span className={`text-secondary-light font-bold text-xl drop-shadow-lg`}>
                        {principio.principio.charAt(0)}
                      </span>
                    </div>
                    
                    {/* Icon */}
                    <div className="flex items-start gap-4 mb-4 mt-6">
                      <div className={`p-3 bg-secondary/15 border border-secondary/40 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <GrowthIcon className={`w-6 h-6 text-secondary`} />
                      </div>
                      
                      <div className="flex-1">
                        <h5 className={`text-secondary font-bold text-lg mb-2`}>
                          {principio.principio}
                        </h5>
                        <p className="text-neutral-200 text-sm font-medium mb-2">
                          Princípio
                        </p>
                      </div>
                    </div>
                    
                    {/* Exemplo prático */}
                    <div className="pl-1">
                      <div className="bg-gradient-to-r from-secondary/10 via-secondary/15 to-secondary/10 border-l-4 border-secondary/60 p-4 rounded-r-lg">
                        <p className="text-neutral-100 leading-relaxed">
                          <span className="text-secondary font-bold text-base uppercase tracking-wide">Como me encaixo:</span>
                          <span className="block mt-2 text-neutral-100 text-sm">
                            {principio.exemploPratico}
                          </span>
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative gradient overlay on hover */}
                    <div className="absolute inset-0 bg-neutral-700/20 opacity-0 group-hover:opacity-30 rounded-xl transition-opacity duration-500 -z-10"></div>
                  </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
