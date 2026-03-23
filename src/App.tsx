import { 
  Users, 
  CheckCircle2, 
  Smartphone,
  Zap,
  BarChart3,
  Calendar,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

// Assets
import heroOrange from './assets/hero-orange-premium.png';
import money3d from './assets/money-3d.png';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 bg-color-bg-deep/80 backdrop-blur-xl border-b border-white/5">
    <div className="container flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary shadow-[0_0_20px_rgba(249,115,22,0.4)]">
          <span className="text-white font-black text-lg">E$</span>
        </div>
        <span className="text-2xl font-black tracking-tighter text-white uppercase">
          EMPREST<span className="text-primary italic">FÁCIL</span>
        </span>
      </div>
      <div className="hidden md:flex items-center gap-10 text-sm font-black uppercase tracking-[0.2em] text-text-dim">
        <a href="#funcionalidades" className="hover:text-primary transition-all">Recursos</a>
        <a href="#precos" className="hover:text-primary transition-all">Preços</a>
        <a href="https://www.emprestfacil.app/auth" className="btn btn-primary py-2.5 px-8 text-sm hover:glow-orange">
          Entrar no SaaS
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="section min-h-screen pt-40 overflow-hidden bg-glow-top">
    <div className="container relative">
      <div className="flex flex-col items-center text-center space-y-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_0_40px_rgba(249,115,22,0.1)]"
        >
          <Zap className="w-3 h-3 fill-primary" />
          Sistema de Gestão de Crédito Ultra-Rápido
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[7rem] leading-[0.9] grad-text font-black tracking-tighter"
        >
          Escalando lucros com <br />
          <span className="text-primary italic relative">
            controle absoluto.
            <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-transparent rounded-full blur-sm opacity-60" />
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-text-dim max-w-3xl leading-relaxed font-medium"
        >
          A plataforma definitiva para gestores de crédito. Reduza a inadimplência em até 40% com automação inteligente e relatórios em tempo real.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto z-10"
        >
          <a href="https://www.emprestfacil.app/auth" className="btn btn-primary text-xl px-14 group relative overflow-hidden">
            <span className="relative z-10 font-black uppercase tracking-widest">Acessar Grátis</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-orange-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
          </a>
          <a href="#funcionalidades" className="btn btn-secondary text-xl px-14 font-black uppercase tracking-widest">
            Saiba Mais
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-20 mb-10 w-full"
        >
          <div className="absolute -inset-20 bg-primary/20 blur-[150px] rounded-full opacity-30 mix-blend-screen" />
          <div className="relative glass-card p-4 rounded-[3.5rem] border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.6)] overflow-hidden hover:glow-orange transition-all duration-700">
            <img 
              src={heroOrange} 
              alt="Plataforma EmprestFácil" 
              className="w-full h-auto rounded-[3rem] transform transition-transform duration-1000 hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-transparent to-transparent pointer-events-none" />
          </div>
          
          <motion.img 
            src={money3d}
            alt="Capital em Movimento"
            className="absolute -top-40 -left-40 w-96 h-96 floating opacity-60 hidden xl:block mix-blend-screen grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "CRM de Cobrança",
      desc: "Histórico completo por cliente com réguas de cobrança automatizadas via WhatsApp e e-mail."
    },
    {
      icon: BarChart3,
      title: "BI Financeiro",
      desc: "Dashboards inteligentes com DRE, fluxo de caixa e análise de PDD em tempo real."
    },
    {
      icon: Smartphone,
      title: "PIX Integrado",
      desc: "Receba seus pagamentos instantaneamente com liquidação automática no sistema."
    },
    {
      icon: Zap,
      title: "Automação 360",
      desc: "Desde a proposta ao contrato digital, tudo acontece de forma fluida e sem papel."
    },
    {
      icon: ShieldCheck,
      title: "Segurança de Dados",
      desc: "Criptografia de ponta a ponta e backups diários para total tranquilidade do seu negócio."
    },
    {
      icon: Calendar,
      title: "Gestão de Ativos",
      desc: "Acompanhe seus recebíveis e gerencie garantias de forma profissional e escalável."
    }
  ];

  return (
    <section id="funcionalidades" className="section relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-6 mb-24 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-[5.5rem] grad-text font-black tracking-tighter leading-[0.9]">Tudo o que você precisa <br /><span className="text-primary">para escalar.</span></h2>
          <p className="text-text-dim text-xl max-w-2xl font-medium">
            Desenvolvido por quem entende as dores reais do mercado de crédito. Ferramentas profissionais para resultados reais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card flex flex-col space-y-6 group hover:glow-orange p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-inner">
                <f.icon className="w-7 h-7 text-primary group-hover:text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-text-dim leading-relaxed font-medium">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="precos" className="section bg-[radial-gradient(circle_at_50%_100%,_rgba(249,115,22,0.1),_transparent_50%)]">
    <div className="container">
      <div className="glass-card max-w-5xl mx-auto p-12 md:p-32 overflow-hidden relative glow-orange border-primary/20 bg-gradient-to-br from-bg-surface to-bg-deep">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 blur-[100px] rounded-full opacity-50" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-16">
          <div className="space-y-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-3 rounded-full bg-primary text-white font-black text-sm uppercase tracking-[0.3em] shadow-xl"
            >
              Oferta Especial de Lançamento
            </motion.div>
            <h2 className="text-6xl md:text-[6rem] grad-text font-black tracking-tighter leading-[0.9]">
              Comece agora <br /> com <span className="text-primary">7 dias grátis.</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-center space-y-8 w-full max-w-md">
            <div className="flex items-baseline gap-3">
              <span className="text-text-dim text-2xl font-bold">A partir de</span>
              <span className="text-8xl font-black text-white tracking-tighter">R$49</span>
              <span className="text-text-dim text-xl font-bold">/mês</span>
            </div>
            
            <a href="https://www.emprestfacil.app/auth" className="btn btn-primary text-2xl py-7 px-20 group w-full hover:scale-105 transition-transform">
              <span className="font-black uppercase tracking-widest">Criar Minha Conta</span>
              <ArrowRight className="ml-3 w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </a>
            
            <div className="flex flex-wrap justify-center gap-10 pt-10 border-t border-white/5 w-full">
              {["Cancelamento em 1 clique", "Suporte Integrado", "Pix Ilimitado"].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-black text-text-dim uppercase tracking-widest">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 border-t border-white/5">
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
            <span className="text-white font-black text-xs">E$</span>
          </div>
          <span className="text-xl font-black text-white">EMPRESTFÁCIL</span>
        </div>
        <p className="text-text-dim text-sm font-medium">
          © {new Date().getFullYear()} EmprestFácil. Alta performance financeira.
        </p>
        <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-text-dim">
          <a href="#" className="hover:text-primary transition-colors">Termos</a>
          <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}



