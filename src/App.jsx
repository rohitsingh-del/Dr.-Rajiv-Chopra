// src/App.jsx
import React, { useState } from 'react';
import {
    BookOpen, Award, GraduationCap, Briefcase, ExternalLink,
    ChevronRight, Globe, FileText, Mail, Phone, ShieldCheck,
    Mic, CheckCircle, Download, Monitor, Users, Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Carousel.css';
import {
    STATS, INTERNATIONAL_BOOKS, NATIONAL_BOOKS, TIMELINE,
    AWARDS, RESEARCH, MEMBERSHIPS, CERTIFICATIONS, ENGAGEMENTS
} from './data/index';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

// --- COMPONENTS ---

const Navbar = () => (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
                <div className="flex items-center gap-3">
                    <div className="bg-slate-900 p-2 rounded-lg">
                        <BookOpen className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                        <span className="font-serif font-bold text-xl text-slate-900 leading-none block">Dr. Rajiv Chopra</span>
                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-semibold">Author & Professor</span>
                    </div>
                </div>
                <div className="hidden md:flex space-x-10">
                    {['Home', 'Books', 'CV', 'Awards', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().split(' ')[0]}`}
                            className="text-slate-600 hover:text-amber-600 font-medium text-sm uppercase tracking-wide transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    <BookOpen className="h-6 w-6 text-slate-900" />
                </div>
            </div>
        </div>
    </nav>
);

const Hero = () => (
    <section id="home" className="pt-24 pb-20 lg:pt-32 lg:pb-32 relative overflow-hidden bg-slate-50">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 skew-x-12 translate-x-32 z-0"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-bold uppercase tracking-wider mb-8 shadow-lg shadow-slate-900/20">
                        <Award className="w-4 h-4" />
                        <span>Internationally Acclaimed Author</span>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
                        Bridging Theory <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700">
                            & Practice.
                        </span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-light">
                        Empowering the next generation of tech leaders with
                        <span className="font-semibold text-slate-900"> 43 textbooks </span>
                        spanning Data Science, Cloud Computing, and Quantum Mechanics.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                        <a href="#books" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2">
                            Explore Library <ChevronRight className="w-4 h-4" />
                        </a>
                        <a href="#cv" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-all hover:border-amber-500 hover:text-amber-700 flex items-center gap-2 group">
                            View Curriculum Vitae <Download className="w-4 h-4 group-hover:animate-bounce" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Dynamic Author/Book Showcase */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative aspect-[4/5] max-w-md mx-auto">
                        {/* Abstract Frames */}
                        <div className="absolute inset-0 border-2 border-slate-200 translate-x-4 translate-y-4 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center group">
                            {/* Placeholder for Author Image */}
                            <div className="text-center p-8">
                                <div className="w-32 h-32 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <GraduationCap className="w-16 h-16 text-amber-500" />
                                </div>
                                <h3 className="text-2xl font-serif text-white mb-2">Dr. Rajiv Chopra</h3>
                                <p className="text-slate-400 font-mono text-sm">Professor & Scientist</p>

                                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-white">43</div>
                                        <div className="text-[10px] uppercase text-slate-500 tracking-wider">Books</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">25+</div>
                                        <div className="text-[10px] uppercase text-slate-500 tracking-wider">Years</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">30+</div>
                                        <div className="text-[10px] uppercase text-slate-500 tracking-wider">Papers</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating "Latest Book" Card */}
                            <motion.div
                                className="absolute -bottom-10 -left-10 w-48 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            >
                                <div className="text-xs font-bold text-amber-600 uppercase mb-1">Latest Release</div>
                                <div className="font-serif font-bold text-slate-900 leading-tight mb-2">Cloud Computing (2024)</div>
                                <div className="text-[10px] text-slate-500">Mercury Learning (USA)</div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

const RevolvingCarousel = () => {
    return (
        <div className="bg-slate-900 text-white py-24 overflow-hidden relative" id="international-showcase">
            <div className="max-w-7xl mx-auto px-4 text-center mb-12 relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">International Acclaim</h2>
                <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Dr. Chopra's works are standard references in universities across the USA, UK, and Germany, bridging cultural and academic boundaries.
                </p>
            </div>

            <div className="scene">
                <div className="carousel">
                    {INTERNATIONAL_BOOKS.map((book) => (
                        <div key={book.id} className={`carousel__cell rounded-lg shadow-2xl p-6 flex flex-col justify-between bg-gradient-to-br ${book.color} border border-white/20 hover:scale-105 transition-transform cursor-pointer group`}>
                            <div>
                                <div className="bg-white/20 w-8 h-1 mb-6 rounded-full"></div>
                                <h3 className="font-serif font-bold text-xl leading-tight mb-3 text-white">{book.title}</h3>
                                <p className="text-xs text-white/80 font-medium tracking-wide uppercase">{book.publisher}</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white/20 absolute bottom-4 right-4">{book.year}</p>
                                <a href="#buy" onClick={(e) => e.preventDefault()} className="inline-flex items-center justify-center w-full py-3 bg-white text-slate-900 text-sm font-bold rounded hover:bg-amber-400 hover:text-slate-900 transition-colors duration-300 shadow-lg">
                                    Order Copy <ExternalLink className="ml-2 w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const BookCard = ({ book }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-slate-100 group"
    >
        {/* Mock Book Cover */}
        <div className={`h-64 bg-gradient-to-br ${book.color} p-8 flex flex-col justify-end relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            <h3 className="text-white font-serif font-bold text-2xl leading-tight relative z-10 drop-shadow-md">{book.title}</h3>
        </div>

        <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-start justify-between mb-4 border-b border-slate-100 pb-4">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">{book.publisher}</p>
                <span className="text-xs font-bold bg-amber-50 text-amber-700 px-3 py-1 rounded-full border border-amber-100">{book.year}</span>
            </div>

            <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                Essential reading for mastering the core concepts and advanced applications in this field.
            </p>

            {/* Buy Links */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
                <button className="flex items-center justify-center w-full py-3 px-4 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-700 transition-colors">
                    Amazon
                </button>
                <button className="flex items-center justify-center w-full py-3 px-4 bg-slate-100 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-200 transition-colors">
                    Publisher
                </button>
            </div>
        </div>
    </motion.div>
);

const LibrarySection = () => {
    const [activeTab, setActiveTab] = useState('international');

    return (
        <section id="books" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2 block">The Collection</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Authored Works</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        A comprehensive library of 43 books designed to simplify complex technologies for students and professionals.
                    </p>
                </div>

                {/* Custom Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex bg-slate-100 rounded-full p-1.5 shadow-inner">
                        <button
                            onClick={() => setActiveTab('international')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'international' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-500 hover:text-slate-900'
                                }`}
                        >
                            International
                        </button>
                        <button
                            onClick={() => setActiveTab('national')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'national' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-500 hover:text-slate-900'
                                }`}
                        >
                            National
                        </button>
                    </div>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {(activeTab === 'international' ? INTERNATIONAL_BOOKS : NATIONAL_BOOKS).map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>

                {activeTab === 'national' && (
                    <div className="mt-16 text-center">
                        <button className="inline-flex items-center text-slate-900 font-bold border-b-2 border-amber-500 hover:text-amber-600 transition-colors pb-1 text-lg">
                            View Complete Bibliography <ChevronRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

const ResumeSection = () => (
    <section id="cv" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Curriculum Vitae</h2>
                    <p className="text-slate-600 max-w-xl">
                        A snapshot of academic excellence, research contributions, and professional milestones.
                    </p>
                </div>
                <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-lg">
                    <Download className="w-4 h-4" /> Download Full Resume
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Column */}
                <div className="md:col-span-2 space-y-12">

                    {/* Experience */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-amber-600" /> Professional Experience
                        </h3>
                        <div className="space-y-8 border-l-2 border-slate-100 ml-2 pl-8 relative">
                            {TIMELINE.filter(t => t.type === 'work').map((item, idx) => (
                                <div key={idx} className="relative">
                                    <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-white border-4 border-amber-500"></div>
                                    <h4 className="font-bold text-slate-900 text-lg">{item.role}</h4>
                                    <p className="text-slate-600 font-medium">{item.org}</p>
                                    <span className="inline-block mt-2 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                                        {item.year}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-amber-600" /> Education
                        </h3>
                        <div className="space-y-6">
                            {TIMELINE.filter(t => t.type === 'edu').map((item, idx) => (
                                <div key={idx} className="group">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{item.role}</h4>
                                        <span className="text-sm font-semibold text-slate-400">{item.year}</span>
                                    </div>
                                    <p className="text-slate-600">{item.org}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Research */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-amber-600" /> Key Research
                        </h3>
                        <ul className="space-y-4">
                            {RESEARCH.map((paper, idx) => (
                                <li key={idx} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                                    <span className="text-amber-500 font-bold">•</span>
                                    {paper}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-6 text-amber-600 text-sm font-bold hover:underline">View all Publications →</button>
                    </div>

                </div>

                {/* Sidebar Column */}
                <div className="space-y-8">

                    {/* Awards */}
                    <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Award className="w-32 h-32" />
                        </div>
                        <h3 className="text-xl font-bold text-amber-500 mb-6 relative z-10">Awards & Honors</h3>
                        <ul className="space-y-4 relative z-10">
                            {AWARDS.slice(0, 5).map((award, idx) => (
                                <li key={idx} className="text-sm text-slate-300 border-l-2 border-amber-500/30 pl-3">
                                    {award}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Certifications */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Certifications</h3>
                        <div className="flex flex-wrap gap-2">
                            {CERTIFICATIONS.slice(0, 6).map((cert, idx) => (
                                <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200">
                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                    {cert.split('(')[0]}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Memberships */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Memberships</h3>
                        <ul className="space-y-2">
                            {MEMBERSHIPS.map((mem, idx) => (
                                <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                                    <Users className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                                    {mem}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </section>
);


const App = () => {
    return (
        <div className="min-h-screen font-sans text-slate-800 bg-slate-50">
            <Navbar />
            <Hero />

            {/* Stats Section - Compact */}
            <section className="bg-slate-900 py-12 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {STATS.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="flex flex-col items-center text-center group">
                                    <Icon className="w-8 h-8 text-amber-500 mb-3 group-hover:scale-110 transition-transform" />
                                    <p className="text-3xl font-serif font-bold text-white mb-1">{stat.value}</p>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <RevolvingCarousel />
            <LibrarySection />
            <ResumeSection />

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <BookOpen className="h-6 w-6 text-amber-600" />
                            <span className="font-serif font-bold text-xl text-white">Dr. Rajiv Chopra</span>
                        </div>
                        <p className="text-slate-500 text-sm max-w-xs">
                            Bridging the gap between academic theory and industrial application since 2002.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 text-sm font-medium">
                        <a href="mailto:raj_74chopra2004@yahoo.com" className="flex items-center gap-3 hover:text-amber-500 transition-colors bg-white/5 px-4 py-2 rounded-lg">
                            <Mail className="w-4 h-4" /> raj_74chopra2004@yahoo.com
                        </a>
                        <span className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg">
                            <Phone className="w-4 h-4" /> +91-8800887301
                        </span>
                    </div>
                </div>
                <div className="mt-12 text-center text-xs text-slate-600 border-t border-white/5 pt-8">
                    &copy; {new Date().getFullYear()} Dr. Rajiv Chopra. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default App;
