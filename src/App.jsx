import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, Smartphone, Database, Globe, Mail, Github, Linkedin } from 'lucide-react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Header() {
  return (
    <header className="sticky top-0 backdrop-blur bg-white/70 z-20 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">FB</div>
          <span className="font-semibold text-gray-800">Full‑Stack Node.js & React</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#projects" className="hover:text-gray-900">Projets</a>
          <a href="#process" className="hover:text-gray-900">Process</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Hero({ onContactClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Développement Web & Applications Mobile
            </motion.h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Freelancer full‑stack spécialisé en Node.js, React et React Native. Je conçois, développe et déploie des produits modernes, performants et scalables.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" onClick={onContactClick} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition">
                Demander un devis
                <ArrowRight size={18} />
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
                Voir les projets
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">Stack: Node.js · Express · NestJS · React · Next.js · React Native · MongoDB · PostgreSQL · Docker · CI/CD</div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl blur-2xl" />
            <div className="relative bg-white/80 rounded-2xl border border-black/5 shadow-xl p-6">
              <div className="grid grid-cols-3 gap-4">
                <TechCard icon={Code2} title="Web Apps" desc="SPA/SSR avec React & Next.js" />
                <TechCard icon={Smartphone} title="Mobile" desc="Apps iOS/Android React Native" />
                <TechCard icon={Database} title="Back‑end" desc="API Node.js, bases de données" />
                <TechCard icon={Globe} title="Cloud" desc="Déploiement & DevOps" />
                <TechCard icon={Code2} title="UI/UX" desc="Design system & performance" />
                <TechCard icon={Code2} title="Intégrations" desc="Paiements, auth, emails" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TechCard({ icon: Icon, title, desc }) {
  return (
    <div className="p-4 rounded-xl border border-black/5 bg-white hover:shadow-md transition">
      <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center mb-3">
        <Icon size={20} />
      </div>
      <div className="font-semibold text-gray-800">{title}</div>
      <div className="text-sm text-gray-600">{desc}</div>
    </div>
  )
}

function Services() {
  const items = [
    { icon: Code2, title: 'Applications Web', desc: 'Développement front‑end React/Next.js et back‑end Node.js/NestJS.' },
    { icon: Smartphone, title: 'Applications Mobile', desc: 'Apps natives iOS/Android avec React Native et Expo.' },
    { icon: Database, title: 'API & Bases de données', desc: 'Conception d’API REST/GraphQL, MongoDB, PostgreSQL.' },
    { icon: Globe, title: 'Déploiement', desc: 'Docker, CI/CD, hébergement cloud (Vercel, AWS, GCP).' },
  ]
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, idx) => (
          <TechCard key={idx} icon={it.icon} title={it.title} desc={it.desc} />
        ))}
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    { title: 'SaaS d’analytics', tags: ['React', 'Node.js', 'MongoDB'] },
    { title: 'Marketplace mobile', tags: ['React Native', 'Stripe', 'NestJS'] },
    { title: 'Dashboard interne', tags: ['Next.js', 'PostgreSQL', 'Prisma'] },
  ]
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Projets</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="group p-6 rounded-xl border border-black/5 bg-white hover:shadow-md transition">
            <div className="h-36 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 mb-4" />
            <div className="font-semibold text-gray-800">{p.title}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.tags.map((t, j) => (
                <span key={j} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { title: 'Découverte', desc: 'Compréhension du besoin et cadrage.' },
    { title: 'Design & Architecture', desc: 'UX, maquettes et choix techniques.' },
    { title: 'Développement', desc: 'Sprints agiles avec démos régulières.' },
    { title: 'Lancement & Suivi', desc: 'Mise en prod, monitoring et amélioration.' },
  ]
  return (
    <section id="process" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Process</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="p-6 rounded-xl border border-black/5 bg-white">
            <div className="text-3xl font-extrabold text-blue-600 mb-2">{i + 1}</div>
            <div className="font-semibold text-gray-800">{s.title}</div>
            <div className="text-sm text-gray-600 mt-1">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', company: '', budget: '', timeline: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Envoi...')
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) setStatus('Message envoyé ✅')
      else setStatus(data.detail || 'Erreur lors de l’envoi')
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
      <form onSubmit={submit} className="grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input className="input" placeholder="Nom" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
          <input className="input" placeholder="Email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <input className="input" placeholder="Société (optionnel)" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
          <input className="input" placeholder="Budget (optionnel)" value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} />
          <input className="input" placeholder="Délai (optionnel)" value={form.timeline} onChange={e => setForm({ ...form, timeline: e.target.value })} />
        </div>
        <input className="input" placeholder="Sujet" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
        <textarea className="input min-h-[140px]" placeholder="Décrivez votre projet" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
        <button className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition">
          <Mail size={18} /> Envoyer
        </button>
        {status && <div className="text-sm text-gray-700">{status}</div>}
      </form>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-black/5 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div>© {new Date().getFullYear()} Freelancer Full‑Stack. Tous droits réservés.</div>
        <div className="flex items-center gap-4">
          <a className="hover:text-gray-900" href="https://github.com" target="_blank" rel="noreferrer"><Github size={18} /></a>
          <a className="hover:text-gray-900" href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const handleContactClick = (e) => {
    // just anchors to section
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero onContactClick={handleContactClick} />
      <Services />
      <Projects />
      <Process />
      <Contact />
      <Footer />
      <style>{`
        .input { @apply w-full border border-black/10 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30; }
      `}</style>
    </div>
  )
}

export default App
