import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold text-lg">AtelierCode</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How it Works</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/jariahh/ateliercode" className="text-slate-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a href="#download" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors">
                Download
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-indigo-300 text-sm font-medium">Now in Beta</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Code from <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">anywhere</span>,<br />
            on any machine
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            AtelierCode connects all your development machines with secure peer-to-peer WebRTC.
            Access your projects, chat history, and tools from your desktop, laptop, or browser.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#download" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-indigo-500/25">
              Download for Free
            </a>
            <a href="#demo" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold text-lg transition-all border border-white/10">
              Watch Demo
            </a>
          </div>

          {/* Hero Image */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 pointer-events-none"></div>
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-slate-500 text-sm">AtelierCode</span>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 text-left">
                  <h4 className="text-slate-400 text-xs uppercase tracking-wide mb-3">Machines</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 rounded bg-indigo-500/20 border border-indigo-500/30">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="text-white text-sm">Desktop PC</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded hover:bg-slate-800/50">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="text-slate-300 text-sm">MacBook Pro</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded hover:bg-slate-800/50">
                      <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                      <span className="text-slate-500 text-sm">Home Server</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 bg-slate-900/50 rounded-lg p-4 text-left">
                  <h4 className="text-slate-400 text-xs uppercase tracking-wide mb-3">Projects on Desktop PC</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['ateliercode', 'my-saas-app', 'portfolio-site', 'api-server'].map((project) => (
                      <div key={project} className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors cursor-pointer">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                          <span className="text-white text-sm font-medium">{project}</span>
                        </div>
                        <p className="text-slate-500 text-xs">Last active 2h ago</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Everything you need to code across machines</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              AtelierCode provides a seamless development experience whether you're at your desk or on the go.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Multi-Agent AI Chat",
                description: "Chat with Claude, Gemini, and other AI agents. Your conversation history syncs across all your machines."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
                title: "Peer-to-Peer Connection",
                description: "Direct WebRTC connections between your machines. Your data never touches our servers - it's always end-to-end encrypted."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                ),
                title: "Local-First Storage",
                description: "Projects and data stay on your machines. Access them remotely without uploading to the cloud."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Secure by Design",
                description: "DTLS encryption for all peer connections. JWT authentication with short-lived tokens. Your code stays private."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Lightning Fast",
                description: "Built with Tauri and Rust for native performance. WebRTC data channels provide low-latency communication."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                title: "Web Access",
                description: "No app installed? Access your machines from any browser with our web client. Full functionality, anywhere."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-indigo-500/50 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How it Works</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Get connected in minutes with our simple setup process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Install on your machines",
                description: "Download AtelierCode on each machine you want to connect. Works on Windows, Mac, and Linux."
              },
              {
                step: "02",
                title: "Sign in & connect",
                description: "Create an account or sign in. Your machines automatically discover each other through our signaling server."
              },
              {
                step: "03",
                title: "Start coding",
                description: "Select any machine to access its projects. Changes sync in real-time through direct P2P connections."
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-7xl font-bold text-slate-800 absolute -top-4 -left-2">{item.step}</div>
                <div className="relative pt-8 pl-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, transparent pricing</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Start for free. Upgrade when you need more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <p className="text-slate-400 mb-6">For individual developers</p>
              <div className="text-4xl font-bold text-white mb-6">$0<span className="text-lg text-slate-400 font-normal">/month</span></div>
              <ul className="space-y-3 mb-8">
                {["Up to 3 machines", "Unlimited projects", "AI chat integration", "P2P file sync", "Community support"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#download" className="block text-center px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold transition-all border border-white/10">
                Get Started
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">Popular</div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <p className="text-indigo-200 mb-6">For power users and teams</p>
              <div className="text-4xl font-bold text-white mb-6">$12<span className="text-lg text-indigo-200 font-normal">/month</span></div>
              <ul className="space-y-3 mb-8">
                {["Unlimited machines", "Team collaboration", "Priority TURN servers", "Advanced security", "Priority support", "Early access to features"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#download" className="block text-center px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold transition-all hover:bg-indigo-50">
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to code from anywhere?</h2>
          <p className="text-slate-400 text-lg mb-10">
            Download AtelierCode and connect your first machine in under 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold transition-all border border-white/10">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
              Windows
            </a>
            <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold transition-all border border-white/10">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 1.5c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5S3.5 16.687 3.5 12s3.813-8.5 8.5-8.5z"/><path d="M12 5.5c-3.584 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5z"/></svg>
              macOS
            </a>
            <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold transition-all border border-white/10">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.504 0c-.155 0-.311.001-.465.003-.658.008-1.308.067-1.945.182-1.315.237-2.548.755-3.637 1.502-.36.247-.695.519-1.01.81-.315.29-.614.6-.893.929-.68.803-1.2 1.728-1.55 2.727-.177.507-.312 1.035-.4 1.576-.09.542-.133 1.094-.133 1.651v9.24c0 .557.043 1.11.133 1.651.088.541.223 1.069.4 1.576.35.999.87 1.924 1.55 2.727.28.329.578.639.893.929.315.29.65.563 1.01.81 1.089.747 2.322 1.265 3.637 1.502.637.115 1.287.174 1.945.182.154.002.31.003.465.003h-.008.504c.155 0 .311-.001.465-.003.658-.008 1.308-.067 1.945-.182 1.315-.237 2.548-.755 3.637-1.502.36-.247.695-.519 1.01-.81.315-.29.614-.6.893-.929.68-.803 1.2-1.728 1.55-2.727.177-.507.312-1.035.4-1.576.09-.542.133-1.094.133-1.651V6.38c0-.557-.043-1.11-.133-1.651-.088-.541-.223-1.069-.4-1.576-.35-.999-.87-1.924-1.55-2.727a8.68 8.68 0 00-.893-.929c-.315-.29-.65-.563-1.01-.81C17.507.755 16.274.237 14.959 0c-.637-.115-1.287-.174-1.945-.182A28.87 28.87 0 0012.504 0z"/></svg>
              Linux
            </a>
          </div>

          <p className="text-slate-500 text-sm mt-6">
            Or access from your browser at <a href="#" className="text-indigo-400 hover:text-indigo-300">app.ateliercode.dev</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold text-lg">AtelierCode</span>
            </div>

            <div className="flex items-center gap-8">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
              <a href="https://github.com/jariahh/ateliercode" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Discord</a>
            </div>

            <p className="text-slate-500 text-sm">
              &copy; 2024 AtelierCode. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
