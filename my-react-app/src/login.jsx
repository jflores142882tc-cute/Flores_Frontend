export default function Login({ onLogin }) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#020617] relative p-4">
        {/* Background Neon Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
  
        <div className="relative z-10 bg-slate-900/40 backdrop-blur-3xl p-12 rounded-[3.5rem] shadow-2xl w-full max-w-md border border-white/5">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-black text-white tracking-tighter italic">FLORES<span className="text-blue-500">_</span></h2>
            <p className="text-blue-400/50 text-[10px] mt-4 uppercase tracking-[0.4em] font-black">Access Interface v3.0</p>
          </div>
  
          <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-6">
            <input type="email" required className="w-full bg-slate-950/50 border border-slate-800 text-white px-6 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700" placeholder="Terminal ID" />
            <input type="password" required className="w-full bg-slate-950/50 border border-slate-800 text-white px-6 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700" placeholder="Passkey" />
            
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all transform active:scale-95 uppercase tracking-[0.2em] text-xs">
              Begin Authentication
            </button>
          </form>
  
          <div className="relative my-10 flex items-center justify-center">
            <div className="absolute w-full h-[1px] bg-slate-800"></div>
            <span className="relative bg-[#0d1324] px-4 text-[10px] text-slate-500 font-bold tracking-widest uppercase">Third-Party Uplink</span>
          </div>
  
          <div className="grid grid-cols-3 gap-4">
            {['G', 'f', '𝕏'].map((s) => (
              <button key={s} className="py-4 bg-slate-800/20 border border-white/5 rounded-2xl hover:bg-blue-600/10 hover:border-blue-500/50 transition-all text-white font-bold">{s}</button>
            ))}
          </div>
        </div>
      </div>
    );
  }