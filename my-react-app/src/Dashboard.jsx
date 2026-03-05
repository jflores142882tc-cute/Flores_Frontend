export default function Dashboard({ onLogout }) {
    const menu = ['Overview', 'Analytics', 'Live Stream', 'Nodes', 'Security'];
  
    return (
      <div className="min-h-screen w-full bg-[#020617] flex overflow-hidden">
        
        {/* Sidebar */}
        <aside className="w-72 bg-slate-950/80 border-r border-white/5 p-10 flex flex-col h-screen fixed">
          <h1 className="text-3xl font-black text-white mb-20 tracking-tighter italic">FLORES<span className="text-blue-500">_</span></h1>
          
          <nav className="flex-1 space-y-2">
            {menu.map((item) => (
              <div key={item} className="group flex items-center px-6 py-4 rounded-2xl cursor-pointer hover:bg-blue-600/10 text-slate-500 hover:text-blue-400 transition-all">
                <span className="w-1 h-1 bg-current rounded-full mr-4 opacity-0 group-hover:opacity-100"></span>
                <span className="font-bold text-xs uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </nav>
  
          <button onClick={onLogout} className="mt-auto bg-red-500/5 hover:bg-red-500 text-red-500 py-4 rounded-2xl transition-all font-black text-[10px] uppercase tracking-[0.3em] border border-red-500/10">
            Disconnect
          </button>
        </aside>
  
        {/* Content */}
        <main className="flex-1 ml-72 p-16 h-screen overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <header className="flex justify-between items-end mb-24">
              <div>
                <p className="text-blue-500 font-black text-[10px] uppercase tracking-[0.5em] mb-4">System Status: Optimal</p>
                <h2 className="text-7xl font-black text-white tracking-tighter italic">DASHBOARD<span className="text-blue-600">.</span></h2>
              </div>
              <div className="text-right">
                <p className="text-emerald-400 font-mono text-sm font-bold tracking-tighter uppercase animate-pulse">● 2.4gb/s stream active</p>
              </div>
            </header>
  
            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { label: 'Network Reach', val: '94.2%', sub: '+2.1%' },
                { label: 'Active Users', val: '12.8k', sub: 'Stable' },
                { label: 'Security Score', val: '98', sub: 'Maximized' }
              ].map((s) => (
                <div key={s.label} className="bg-slate-900/40 border border-white/5 p-10 rounded-[3rem] group hover:border-blue-500/30 transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 blur-3xl group-hover:bg-blue-600/10 transition-all"></div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">{s.label}</p>
                  <div className="flex justify-between items-end">
                    <p className="text-5xl font-black text-white italic tracking-tighter">{s.val}</p>
                    <span className="text-[10px] font-bold text-blue-500 mb-2">{s.sub}</span>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Main Visual Board */}
            <div className="bg-slate-900/20 border border-white/5 rounded-[4rem] p-16 relative">
              <h3 className="text-white font-black italic mb-8 uppercase tracking-widest text-sm">Real-time Analytics</h3>
              <div className="w-full h-80 border border-dashed border-white/10 rounded-[3rem] flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]"></div>
                  <p className="text-slate-700 font-black text-[10px] uppercase tracking-[0.6em] text-center">
                      Initializing Data Visualization Engine...
                  </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }