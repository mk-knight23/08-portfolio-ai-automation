import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Terminal, Code2, Globe, MessageSquare, Mail, Github, Linkedin, Phone,
    ExternalLink, CheckCircle2, Cpu, Layers, Zap, Shield, ChevronRight, ArrowRight
} from 'lucide-react';

const vibeProducts = [
    { name: 'VIBE CLI', tagline: 'Multi-agent AI coding tool', icon: Terminal, status: 'In Development' },
    { name: 'VIBE VS Code', tagline: 'Multi-agent IDE assistant', icon: Code2, status: 'Planned' },
    { name: 'VIBE Web', tagline: 'Documentation hub', icon: Globe, status: 'Live' },
    { name: 'VIBE Chat', tagline: 'AI website builder', icon: MessageSquare, status: 'Planned' }
];

const selectedProjects = [
    {
        name: 'AI-SaaS Workflow Engine',
        category: 'Automation',
        tech: 'n8n / Node.js',
        description: 'End-to-end automation pipeline for multi-channel content distribution and lead filtering.',
        outcome: 'Reduced operational overhead by 75%',
        details: 'Architected complex n8n workflows utilizing custom JS nodes for data transformation and advanced error handling.'
    },
    {
        name: 'Agentic Research Suite',
        category: 'Agents',
        tech: 'LangChain / Python / Claude',
        description: 'Autonomous research agent capable of web browsing, document analysis, and synthesis.',
        outcome: '3x faster technical research cycles',
        details: 'Implemented RAG with Pinecone and function-calling capabilities for real-time tool orchestration.'
    },
    {
        name: 'Auto-Lead Scoring System',
        category: 'AI / CRM',
        tech: 'Make / Python / OpenAI',
        description: 'Intelligent lead qualification engine using LLMs to score inbound prospects based on intent.',
        outcome: '40% increase in sales conversion',
        details: 'Built a multi-stage scoring logic that integrates with HubSpot and uses OpenAI for qualitative analysis.'
    },
    {
        name: 'Infrastructure Bot Controller',
        category: 'DevOps',
        tech: 'Slack Bolt / Python / AWS',
        description: 'Production-ready Slack bot for monitoring server health and executing remote deployments.',
        outcome: 'Saved 15+ dev hours weekly',
        details: 'Secure integration with AWS SDK for triggered actions and real-time status updates in Slack.'
    }
];

const skillsByCategory = {
    'AI Automation': ['n8n', 'Zapier', 'Make', 'LangChain', 'AutoGPT', 'Function Calling'],
    'Bot Engineering': ['Slack Bolt', 'Discord.js', 'Telegram API', 'Headless Browsing', 'Webhooks'],
    'Backend & APIs': ['Python', 'Node.js', 'FastAPI', 'REST / GraphQL', 'PostgreSQL', 'Docker'],
    'AI Architecture': ['RAG Systems', 'Vector DBs', 'Prompt Chaining', 'Agentic Workflows', 'Model Fine-tuning']
};

type Tab = 'about' | 'vibe' | 'work' | 'skills' | 'resume' | 'contact';

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
                            {(['about', 'vibe', 'work', 'skills', 'resume', 'contact'] as Tab[]).map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === tab
                                        ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)] ring-1 ring-white/20'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
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
                            AI Automation Engineer & Workflow Architect
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Kazi Musharraf
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-8">
                            Engineering intelligent <span className="text-indigo-400 font-medium">Automation Systems</span> and
                            autonomous agents. Specializing in n8n workflows, agentic orchestration, and
                            scaling business logic with AI.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => setActiveTab('vibe')}
                                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-colors"
                            >
                                Explore Automation Kit
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
                                { value: '60+', label: 'Automations', desc: 'Workflows deployed' },
                                { value: '100k+', label: 'Invocations', desc: 'Monthly API throughput' },
                                { value: 'Agents', label: 'Primary', desc: 'Deployment focus' },
                                { value: 'Remote', label: 'Availability', desc: 'Hyderabad, India' }
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center py-4"
                                >
                                    <div className="text-2xl md:text-3xl font-bold text-indigo-400 mb-1 font-mono tracking-tighter">{stat.value}</div>
                                    <div className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                    <div className="text-[10px] text-gray-600 mt-1">{stat.desc}</div>
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
                                        AI Automation Engineer specializing in <strong className="text-white">Workflow Orchestration</strong>,
                                        <strong className="text-white"> Autonomous Agents</strong>,
                                        <strong className="text-white"> API Integration</strong>, and
                                        <strong className="text-white"> Enterprise SaaS Automation</strong>.
                                    </p>
                                    <p>
                                        Currently a <strong className="text-white">Project Engineer (TURBO)</strong> at <strong>Wipro</strong>, leveraging my expertise to architect mission-critical automation pipelines and AI-driven internal tools that optimize operational efficiency at scale.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                    <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-indigo-400 font-mono">Quick Info</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                                            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">Location:</span>
                                            <span className="text-white text-sm">Hyderabad, India</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                                            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">Available:</span>
                                            <span className="text-green-400 text-sm">Remote / Hybrid</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                                            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">Phone:</span>
                                            <span className="text-white text-sm">+91 9765490536</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">Focus:</span>
                                            <span className="text-indigo-400 text-sm font-semibold">AI & Automation</span>
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
                                                    <span className={`text-xs px-2 py-0.5 rounded-full ${product.status === 'Live'
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
                                        'Multi-step Agentic Workflows with Error Handling',
                                        'Dynamic Tool-use and Function Calling Architecture',
                                        'Real-time Data Sync between 50+ SaaS Apps',
                                        'Headless Content Generation Hub',
                                        'Scalable Infrastructure for Event-driven Systems',
                                        'Security-first Webhook Management'
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
                            <h2 className="text-3xl font-bold">Recent Automations</h2>
                            <p className="text-gray-400 text-lg">A showcase of complex workflows and AI-driven engines.</p>

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
                                        <p className="text-sm text-gray-500 mb-3">{project.description}</p>
                                        <p className="text-xs text-gray-600 mb-4 leading-relaxed">{project.details}</p>
                                        <div className="pt-3 border-t border-white/10">
                                            <p className="text-xs text-green-400 flex items-center gap-1">
                                                <CheckCircle2 className="w-3 h-3" />
                                                <strong>Goal:</strong> {project.outcome}
                                            </p>
                                        </div>
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

                    {/* Resume Tab */}
                    {activeTab === 'resume' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-bold">Resume</h2>
                            <p className="text-gray-400 text-lg">AI Automation Engineer & Workflow Architect</p>

                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Main Content */}
                                <div className="lg:col-span-2 space-y-8">
                                    {/* Experience */}
                                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                        <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-white/10 flex items-center gap-2">
                                            <Cpu className="w-5 h-5 text-indigo-400" />
                                            Experience
                                        </h3>
                                        <div className="space-y-6">
                                            <div className="pl-6 border-l-2 border-indigo-500/50">
                                                <div className="flex items-start justify-between mb-2">
                                                    <h4 className="text-xl font-semibold">Project Engineer (TURBO)</h4>
                                                    <span className="text-sm text-gray-500 font-medium">Jul 2022 – Present</span>
                                                </div>
                                                <p className="text-indigo-400 font-medium mb-2">Wipro</p>
                                                <p className="text-gray-400 leading-relaxed text-sm">
                                                    Spearheading automation initiatives using n8n and advanced Python workflows.
                                                    Focused on architecting intelligent agents that leverage LLMs for high-reliability
                                                    internal systems and service optimization. Deployed 60+ production-grade automations
                                                    resulting in significant OpEx reduction and workflow efficiency.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Education */}
                                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                        <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-white/10 flex items-center gap-2">
                                            <Shield className="w-5 h-5 text-indigo-400" />
                                            Education
                                        </h3>
                                        <div className="pl-6 border-l-2 border-gray-700">
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className="text-xl font-semibold">B.Tech Computer Science & Engineering</h4>
                                                <span className="text-sm text-gray-500 font-medium">2022</span>
                                            </div>
                                            <p className="text-gray-500 text-sm">Focus on Algorithms, AI, and System Design.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar */}
                                <div className="space-y-8">
                                    {/* Tech Stack */}
                                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                        <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-white/10">Tech Stack</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Automation</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {['n8n', 'Zapier', 'Make', 'Python', 'Node.js'].map((tech) => (
                                                        <span key={tech} className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded text-sm">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">LLM</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {['LangChain', 'OpenAI', 'Claude', 'Vector DBs'].map((tech) => (
                                                        <span key={tech} className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded text-sm">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connect */}
                                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                        <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-white/10">Connect</h3>
                                        <div className="space-y-3">
                                            <a href="https://github.com/mk-knight23" target="_blank" rel="noopener"
                                                className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors">
                                                <Github className="w-4 h-4" />
                                                <span className="text-sm font-mono tracking-tight text-white/80">github.com/mk-knight23</span>
                                            </a>
                                            <a href="https://www.linkedin.com/in/kazi-musharraf-0674871a4" target="_blank" rel="noopener"
                                                className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors">
                                                <Linkedin className="w-4 h-4" />
                                                <span className="text-sm font-mono tracking-tight text-white/80">linkedin/in/kazi-musharraf</span>
                                            </a>
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <Phone className="w-4 h-4" />
                                                <span className="text-sm font-mono tracking-tight text-white/80">+91 9765490536</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <Globe className="w-4 h-4" />
                                                <span className="text-sm font-mono tracking-tight text-white/80">Hyderabad, India</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* What I'll Build Tab */}
                    {activeTab === 'resume' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm">
                                    If You Hire Me
                                </span>
                                <h2 className="text-3xl font-bold tracking-tight">If You Hire Me</h2>
                            </div>
                            <p className="text-gray-400 text-lg">First 3–6 months as your AI Automation Engineer</p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-2xl">
                                    <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                                        <span className="text-indigo-400 font-bold">01</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">Automation Audit</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        Map your current manual processes and identify automation opportunities.
                                        Calculate ROI for each workflow and prioritize quick wins.
                                    </p>
                                </div>

                                <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-2xl">
                                    <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                                        <span className="text-indigo-400 font-bold">02</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">Workflow Pipeline</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        Build n8n/Zapier workflows that connect your SaaS stack.
                                        Implement error handling, retry logic, and monitoring for reliability.
                                    </p>
                                </div>

                                <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-2xl">
                                    <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                                        <span className="text-indigo-400 font-bold">03</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">Agent Deployment</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        Deploy autonomous agents for research, outreach, or content.
                                        Use RAG for domain knowledge and function calling for tool use.
                                    </p>
                                </div>

                                <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-2xl">
                                    <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                                        <span className="text-indigo-400 font-bold">04</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">Measurement</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        Track time saved, error reduction, and throughput gains.
                                        Build dashboards that show the business impact of automation.
                                    </p>
                                </div>
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
                                Let's automate the future. Reach out if you need an AI Automation Engineer to
                                architect intelligent pipelines and agentic systems.
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
            <footer className="py-20 px-6 border-t border-white/10 bg-[#07070a]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <h4 className="text-xl font-bold mb-4 tracking-tighter">KAZI MUSHARRAF</h4>
                            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                                AI Automation Engineer dedicated to building mission-critical pipelines
                                and autonomous agentic systems. Scalability and reliability driven.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-indigo-400 mb-6">Expertise</h4>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li>n8n Workflows</li>
                                <li>Agentic Orchestration</li>
                                <li>LLM Integration</li>
                                <li>Custom Bot Dev</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-indigo-400 mb-6">Connect</h4>
                            <div className="flex flex-col gap-3 text-sm text-gray-500">
                                <a href="mailto:mk.knight970@gmail.com" className="hover:text-white transition-colors">Email</a>
                                <a href="https://github.com/mk-knight23" target="_blank" className="hover:text-white transition-colors">GitHub</a>
                                <a href="https://www.linkedin.com/in/kazi-musharraf-0674871a4" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                        <p>&copy; 2026 Kazi Musharraf</p>
                        <p className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            Systems Operational
                        </p>
                        <p>Automation Hub v8.0</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
