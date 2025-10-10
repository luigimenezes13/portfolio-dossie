export function LoadingScreen() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <div className="relative w-16 h-16 mx-auto mb-4 animate-scale-in">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-400 animate-pulse">Carregando dossiê...</p>
      </div>
    </div>
  );
}
