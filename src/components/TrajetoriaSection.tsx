import { Award, ArrowRight, Users, Brain, HeartPulse, Sparkles, Package, Headphones, Code, Zap, Crosshair, MessageSquare, TrendingUp, Shield, Flame, Star, Trophy, BookOpen, GraduationCap, FileText, Globe, Clock, CheckCircle, PlayCircle, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Dossie } from '../types/api';

interface TrajetoriaSectionProps {
  trajetoria: Dossie['trajetoria'];
}

// Mapeamento uniforme para desenvolvimento pessoal - cores suaves e consistentes
const getDesenvolvimentoInfo = (tipo: string) => {
  // Configuração uniforme para todos os tipos
  const uniformConfig = {
    gradient: 'from-neutral-900/40 via-neutral-900/30 to-neutral-900/35',
    borderColor: 'border-neutral-700/40',
    iconBg: 'bg-neutral-700/20',
    iconColor: 'text-neutral-400',
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
    gradient: 'from-neutral-900/40 via-neutral-900/30 to-neutral-900/35',
    borderColor: 'border-neutral-700/40',
    iconBg: 'bg-neutral-700/20',
    textColor: 'group-hover:text-neutral-300',
    glowColor: 'group-hover:shadow-neutral-700/20',
    iconColor: 'text-neutral-400'
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
    gradient: 'from-neutral-900/40 via-neutral-900/30 to-neutral-900/35',
    borderGradient: 'border-neutral-700/40',
    glowColor: 'group-hover:shadow-neutral-700/20',
    iconBg: 'bg-neutral-700/20',
    iconBorder: 'border-neutral-600/40'
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
      color: 'text-pife-pessoal',
      colorLight: 'text-pife-pessoalLight',
      bgColor: 'bg-pife-pessoal/15',
      borderColor: 'border-pife-pessoal/40',
      glowColor: 'shadow-pife-pessoal/20'
    },
    'Intelectual': { 
      icon: Brain, 
      letter: 'I', 
      description: 'Conhecimento e aprendizado',
      color: 'text-pife-intelectual',
      colorLight: 'text-pife-intelectualLight',
      bgColor: 'bg-pife-intelectual/15',
      borderColor: 'border-pife-intelectual/40',
      glowColor: 'shadow-pife-intelectual/20'
    },
    'Físico': { 
      icon: HeartPulse, 
      letter: 'F', 
      description: 'Saúde e bem-estar',
      color: 'text-pife-fisico',
      colorLight: 'text-pife-fisicoLight',
      bgColor: 'bg-pife-fisico/15',
      borderColor: 'border-pife-fisico/40',
      glowColor: 'shadow-pife-fisico/20'
    },
    'Espiritual': { 
      icon: Sparkles, 
      letter: 'E', 
      description: 'Propósito e valores',
      color: 'text-pife-espiritual',
      colorLight: 'text-pife-espiritualLight',
      bgColor: 'bg-pife-espiritual/15',
      borderColor: 'border-pife-espiritual/40',
      glowColor: 'shadow-pife-espiritual/20'
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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className={`section-card ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="section-header">
        <div className="icon-container bg-gradient-to-br from-accent-amber/20 to-accent-gold/20 border-accent-amber/50 shadow-lg shadow-accent-amber/20">
          <Award className="w-7 h-7 text-accent-amber drop-shadow-lg" />
        </div>
        <h2 className="section-title bg-gradient-to-r from-white via-accent-amber to-white bg-clip-text text-transparent">Trajetória Profissional</h2>
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
              idx === 0 ? 'bg-gradient-to-br from-accent-rose to-accent-orange' :
              idx === 1 ? 'bg-gradient-to-br from-info to-accent-purple' :
              'bg-gradient-to-br from-accent-amber to-accent-gold'
            } border-4 border-black rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300`}></div>
                
                {/* Header com ícone e período */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 ${
                      idx === 0 ? 'bg-accent-rose/15 border-accent-rose/40' :
                      idx === 1 ? 'bg-info/15 border-info/40' :
                      'bg-accent-amber/15 border-accent-amber/40'
                    } rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                      <AreaIcon className={`w-6 h-6 ${
                        idx === 0 ? 'text-accent-rose' :
                        idx === 1 ? 'text-info' :
                        'text-accent-amber'
                      }`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl mb-1">
                        {area.nome}
                      </h4>
                      {area.periodo && (
                        <span className={`text-xs font-bold uppercase tracking-wider ${
                          idx === 0 ? 'text-accent-rose/70' :
                          idx === 1 ? 'text-info/70' :
                          'text-accent-amber/70'
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
                
                {/* Keywords badges */}
                {keywords.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {keywords.map((keyword, kidx) => (
                      <span
                        key={kidx}
                        className={`badge-tech ${
                          kidx % 4 === 0 ? 'hover:border-accent-rose/50 hover:bg-accent-rose/10 hover:text-accent-rose' :
                          kidx % 4 === 1 ? 'hover:border-info/50 hover:bg-info/10 hover:text-info' :
                          kidx % 4 === 2 ? 'hover:border-accent-amber/50 hover:bg-accent-amber/10 hover:text-accent-amber' :
                          'hover:border-accent-orange/50 hover:bg-accent-orange/10 hover:text-accent-orange'
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

      <div className="mb-10">
        <div className="mb-6">
          <h3 className="text-subtitle">Alinhamento Cultural</h3>
          
          {/* PIFE Acronym Header */}
          <div className="mt-4 p-6 bg-gradient-to-br from-neutral-900/40 via-neutral-900/30 to-neutral-900/40 border border-neutral-700/40 rounded-xl shadow-lg shadow-neutral-700/10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2">
                {[
                  { letter: 'P', color: 'text-pife-pessoalLight', bg: 'bg-pife-pessoal/20', border: 'border-pife-pessoal/50', glow: 'hover:shadow-pife-pessoal/30' },
                  { letter: 'I', color: 'text-pife-intelectualLight', bg: 'bg-pife-intelectual/20', border: 'border-pife-intelectual/50', glow: 'hover:shadow-pife-intelectual/30' },
                  { letter: 'F', color: 'text-pife-fisicoLight', bg: 'bg-pife-fisico/20', border: 'border-pife-fisico/50', glow: 'hover:shadow-pife-fisico/30' },
                  { letter: 'E', color: 'text-pife-espiritualLight', bg: 'bg-pife-espiritual/20', border: 'border-pife-espiritual/50', glow: 'hover:shadow-pife-espiritual/30' }
                ].map((item, idx) => (
                  <div 
                    key={item.letter}
                    className={`w-12 h-12 ${item.bg} border-2 ${item.border} rounded-lg flex items-center justify-center animate-fade-in-up transition-all hover:scale-110 hover:rotate-6 duration-300 cursor-pointer shadow-lg ${item.glow}`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <span className={`${item.color} font-bold text-2xl drop-shadow-lg`}>{item.letter}</span>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block h-12 w-px bg-neutral-600/40"></div>
              <div className="flex-1">
                <p className="text-base font-semibold text-white">
                  Modelo de Desenvolvimento Holístico
                </p>
                <p className="text-sm mt-1 font-semibold">
                  <span className="text-pife-pessoalLight">Pessoal</span> · 
                  <span className="text-pife-intelectualLight"> Intelectual</span> · 
                  <span className="text-pife-fisicoLight"> Físico</span> · 
                  <span className="text-pife-espiritualLight"> Espiritual</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* PIFE Dimensions Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {trajetoria.alinhamentoCultural.map((item, idx) => {
            const info = getDimensaoInfo(item.dimensao);
            const Icon = info.icon;
            
              return (
                <div 
                  key={idx} 
                  className={`relative group card-base hover:shadow-xl hover:${info.glowColor}`}
                >
                {/* Letter Badge */}
                <div className={`absolute -top-3 -left-3 w-14 h-14 ${info.bgColor} border-2 ${info.borderColor} rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl group-hover:${info.glowColor}`}>
                  <span className={`${info.colorLight} font-bold text-2xl drop-shadow-lg`}>
                    {info.letter}
                  </span>
                </div>
                
                {/* Icon */}
                <div className="flex items-start gap-4 mb-4 mt-6">
                  <div className={`p-3 ${info.bgColor} border ${info.borderColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {item.dimensao}
                    </h4>
                    <p className={`text-xs ${info.color} font-semibold uppercase tracking-wide`}>
                      {info.description}
                    </p>
                  </div>
                </div>
                
                {/* Example */}
                <div className={`pl-4 border-l-3 ${info.borderColor} ml-6 py-1`}>
                  <p className="text-base text-neutral-200 leading-relaxed">
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
                    <div className="absolute -left-8 w-4 h-4 bg-gradient-to-br from-accent-amber to-accent-orange border-4 border-black rounded-full shadow-lg shadow-accent-amber/30"></div>
                      
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
                      item.status === 'Concluído' ? 'bg-success' :
                      item.status === 'Em andamento' ? 'bg-accent-amber' :
                      'bg-accent-purple'
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
                                item.tipo === 'Curso' || item.tipo === 'Certificação' ? 'bg-info/15 border-info/30 text-info' :
                                item.tipo === 'Workshop' ? 'bg-accent-rose/15 border-accent-rose/30 text-accent-rose' :
                                item.tipo === 'Projeto Pessoal' ? 'bg-accent-orange/15 border-accent-orange/30 text-accent-orange' :
                                'bg-accent-amber/15 border-accent-amber/30 text-accent-amber'
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
                          <div className="flex items-center gap-1 text-xs text-accent-amber whitespace-nowrap font-medium">
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
                              item.status === 'Em andamento' ? 'progress-in-progress w-2/3' :
                              'progress-planned w-1/3'
                            }`}></div>
                          </div>
                          <div className="flex justify-between text-xs text-neutral-400 mt-1 font-medium">
                            <span>Início</span>
                            <span className={`font-semibold ${
                              item.status === 'Concluído' ? 'text-success' :
                              item.status === 'Em andamento' ? 'text-accent-amber' :
                              'text-accent-purple'
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
    </section>
  );
}
