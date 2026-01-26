import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Terminal, Code2, Globe, MessageSquare, Mail, Github, Linkedin,
    ExternalLink, CheckCircle2, Cpu, Layers, Zap, Shield, ChevronRight, ArrowRight
} from 'lucide-react';

const vibeProducts = [
    { name: 'VIBE CLI', tagline: 'Multi-agent AI coding tool', icon: Terminal, status: 'In Development' },
    { name: 'VIBE VS Code', tagline: 'Multi-agent IDE assistant', icon: Code2, status: 'Planned' },
    { name: 'VIBE Web', tagline: 'Documentation hub', icon: Globe, status: 'Live' },
    { name: 'VIBE Chat', tagline: 'AI website builder', icon: MessageSquare, status: 'Planned' }
];

const selectedProjects = [
    { name: 'Country Explorer', category: 'Web', tech: 'React', description: 'Country data exploration dashboard' },
    { name: 'Recipe Finder', category: 'Web', tech: 'Vue', description: 'Recipe discovery application' },
    { name: 'Meme Generator', category: 'Web', tech: 'React', description: 'Custom meme creation tool' },
    { name: 'Mini Games', category: 'Game', tech: 'React', description: 'Collection of mini-games' }
];

const skillsByCategory = {
    'AI & Agents': ['RAG', 'H-RAG', 'Multi-Agent Systems', 'Tooling', 'LLM Routing'],
    'Developer Platforms': ['CLI Tools', 'VS Code Extensions', 'Automation', 'DX'],
    'Engineering & Stack': ['Python', 'Node.js', 'React', 'TypeScript', 'APIs', 'Cloud'],
    'LLM Ecosystem': ['OpenAI', 'Claude', 'Gemini', 'OpenRouter', 'Ollama']
};

type Tab = 'about' | 'vibe' | 'work' | 'skills' | 'contact';

export default function App() {
    const [activeTab, setActiveTab] = useState<Tab>('about');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden">
            {/* Custom cursor */}
            <motion.div
                className="fixed w-96 h-96 rounded-full pointer-events-none z-0 mix-blend-overlay"
                animate={{
                    x: mousePosition.x - 192,
                    y: mousePosition.y - 192
                }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                style={{
                    background: 'radial-gradient(circle, rgba(129, 140, 248, 0.15) 0%, transparent 70%)'
                }}
            />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold tracking-tight">MK</span>
                        <div className="flex gap-1 bg-white/5 rounded-lg p-1">
                            {(['about', 'vibe', 'work', 'skills', 'contact'] as Tab[]).map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                                        activeTab === tab
                                            ? 'bg-indigo-600 text-white'
                                            : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            <main className="relative z-10 pt-20">
                {/* Hero - Always visible at top */}
                <section className="min-h-[50vh] flex items-center justify-center py-20 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl"
                    >
                        <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm mb-6">
                            AI Engineer & Indie Builder
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            MUSHARRAF KAZI
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-8">
                            Building the <span className="text-indigo-400 font-medium">VIBE Ecosystem</span> —
                            a multi-product AI developer platform focused on AI-powered coding workflows,
                            multi-agent orchestration, and production-grade tooling.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => setActiveTab('vibe')}
                                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-colors"
                            >
                                Explore VIBE
                            </button>
                            <button
                                onClick={() => setActiveTab('work')}
                                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-medium transition-colors"
                            >
                                View Projects
                            </button>
                        </div>
                    </motion.div>
                </section>

                {/* Stats Bar */}
                <section className="border-y border-white/10">
                    <div className="max-w-6xl mx-auto px-6 py-6">
                        <div className="grid grid-cols-4 gap-4">
                            {[
                                { value: '60+', label: 'Projects', icon: null },
                                { value: '4', label: 'Products', icon: null },
                                { value: 'AI', label: 'Focus', icon: null },
                                { value: 'India', label: 'Location', icon: null }
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center py-4"
                                >
                                    <div className="text-3xl font-bold text-indigo-400 mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tab Content */}
                <div className="max-w-6xl mx-auto px-6 py-16">
                    {/* About Tab */}
                    {activeTab === 'about' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-bold">About</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6 text-gray-400">
                                    <p>
                                        AI Engineer and Indie Product Builder specializing in <strong className="text-white">Agentic AI</strong>,
                                        <strong className="text-white"> Developer Tools</strong>,
                                        <strong className="text-white"> Multi-LLM Routing</strong>, and
                                        <strong className="text-white"> SaaS Automation</strong>.
                                    </p>
                                    <p>
                                        Building the <span className="text-indigo-400">VIBE Ecosystem</span> — a multi-product AI
                                        developer platform (CLI, VS Code Extension, Web SaaS, and Agents) focused on
                                        AI-powered coding workflows, multi-agent orchestration, and production-grade tooling.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                    <h3 className="font-semibold mb-4">Quick Info</h3>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between py-2 border-b border-white/5">
                                            <span className="text-gray-500">Location</span>
                                            <span className="text-white">India</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-white/5">
                                            <span className="text-gray-500">Available</span>
                                            <span className="text-green-400">Remote & Hybrid</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-white/5">
                                            <span className="text-gray-500">Stack</span>
                                            <span className="text-white">Python, React, TS</span>
                                        </div>
                                        <div className="flex justify-between py-2">
                                            <span className="text-gray-500">Focus</span>
                                            <span className="text-indigo-400">AI & Agents</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* VIBE Tab */}
                    {activeTab === 'vibe' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm">
                                    Flagship Project
                                </span>
                                <h2 className="text-3xl font-bold">VIBE Ecosystem</h2>
                            </div>
                            <p className="text-gray-400 text-lg">Founder & AI Engineer — A multi-product AI developer platform</p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {vibeProducts.map((product, i) => (
                                    <motion.div
                                        key={product.name}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-indigo-500/50 transition-all group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-indigo-500/10 rounded-xl">
                                                <product.icon className="w-5 h-5 text-indigo-400" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="font-semibold">{product.name}</h3>
                                                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                                                        product.status === 'Live'
                                                            ? 'bg-green-500/10 text-green-400'
                                                            : 'bg-gray-700 text-gray-400'
                                                    }`}>
                                                        {product.status}
                                                    </span>
                                                </div>
                                                <p className="text-indigo-400 text-sm mb-2">{product.tagline}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-2xl">
                                <h3 className="font-semibold mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                                    Technical Highlights
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-400">
                                    {[
                                        'Hierarchical RAG (H-RAG) + Decision Agents + Orchestrator',
                                        'Multi-provider LLM routing with fallback and evaluation',
                                        '55-feature roadmap with 4-tier system prompt strategy',
                                        'Competitive analysis across 60 AI coding tools',
                                        'Monorepo strategy with ecosystem boundaries',
                                        'Security-first architecture'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Work Tab */}
                    {activeTab === 'work' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-bold">Selected Work</h2>
                            <p className="text-gray-400 text-lg">A showcase of recent projects across web, games, and tools.</p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {selectedProjects.map((project, i) => (
                                    <motion.div
                                        key={project.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-indigo-500/50 transition-all group cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded text-xs font-medium">
                                                {project.category}
                                            </span>
                                            <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                                                {project.tech}
                                            </span>
                                        </div>
                                        <h3 className="font-semibold text-lg mb-1 group-hover:text-indigo-400 transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">{project.description}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <a
                                href="https://github.com/mk-knight23?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                                View all 60 projects <ExternalLink className="w-4 h-4" />
                            </a>
                        </motion.div>
                    )}

                    {/* Skills Tab */}
                    {activeTab === 'skills' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
                            <p className="text-gray-400 text-lg">Core competencies across AI, development, and product.</p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {Object.entries(skillsByCategory).map(([category, skills], i) => (
                                    <motion.div
                                        key={category}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-6 bg-white/5 border border-white/10 rounded-2xl"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            {category.includes('AI') ? (
                                                <Cpu className="w-5 h-5 text-indigo-400" />
                                            ) : category.includes('Developer') ? (
                                                <Layers className="w-5 h-5 text-indigo-400" />
                                            ) : category.includes('LLM') ? (
                                                <Zap className="w-5 h-5 text-indigo-400" />
                                            ) : (
                                                <Shield className="w-5 h-5 text-indigo-400" />
                                            )}
                                            <h3 className="font-semibold">{category}</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.map(skill => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Contact Tab */}
                    {activeTab === 'contact' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-bold">Get In Touch</h2>
                            <p className="text-gray-400 text-lg max-w-2xl">
                                Actively building the VIBE Ecosystem and open to opportunities in AI Engineering,
                                Applied AI, Agent Systems, Developer Tools, SaaS Platforms, and Cloud AI roles.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm">
                                    <span className="text-gray-500">Location:</span>{' '}
                                    <span className="text-white">India</span>
                                </span>
                                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm">
                                    <span className="text-gray-500">Available:</span>{' '}
                                    <span className="text-green-400">Remote & Hybrid</span>
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="mailto:mk.knight970@gmail.com"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-colors"
                                >
                                    <Mail className="w-5 h-5" /> Email
                                </a>
                                <a
                                    href="https://github.com/mk-knight23"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-medium transition-colors"
                                >
                                    <Github className="w-5 h-5" /> GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kazi-musharraf-0674871a4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-medium transition-colors"
                                >
                                    <Linkedin className="w-5 h-5" /> LinkedIn
                                </a>
                            </div>
                        </motion.div>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-white/10">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>&copy; 2025 MUSHARRAF KAZI. All rights reserved.</p>
                    <p>Part of a 60-project portfolio ecosystem</p>
                </div>
            </footer>
        </div>
    );
}
