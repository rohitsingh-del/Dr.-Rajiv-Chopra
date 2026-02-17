// src/App.jsx
import React, { useState } from 'react';
import {
    BookOpen, Award, GraduationCap, Briefcase, ExternalLink,
    ChevronRight, Globe, FileText, Mail, Phone, ShieldCheck,
    Mic, CheckCircle, Download, Monitor, Users, Layers, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Carousel.css';
import {
    STATS, INTERNATIONAL_BOOKS, NATIONAL_BOOKS, TIMELINE,
    AWARDS, RESEARCH, MEMBERSHIPS, CERTIFICATIONS, ENGAGEMENTS
} from './data/index';

import logo from './assets/logo.png';
import authorImg from './assets/author.jpg';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

// --- COMPONENTS ---

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 inset-x-0 z-50 glass-nav transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center gap-4">
                        <img src={logo} alt="Dr. Rajiv Chopra Logo" className="h-12 w-auto object-contain drop-shadow-md" />
                        <div>
                            <span className="font-serif font-bold text-xl text-navy-900 leading-none block">Dr. Rajiv Chopra</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-sans font-bold">Author & Scientist</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-12">
                        {['Home', 'Books', 'CV', 'Awards', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().split(' ')[0]}`}
                                className="text-navy-800 hover:text-gold-600 font-medium text-xs uppercase tracking-widest transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-navy-900 p-2">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {['Home', 'Books', 'CV', 'Awards', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().split(' ')[0]}`}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 text-base font-medium text-navy-900 hover:bg-cream-100 hover:text-gold-600 rounded-md"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Hero = () => (
    <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden bg-cream-50">
        <div className="absolute inset-0 bg-hero-pattern opacity-40"></div>
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy-900/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gold-200 text-gold-700 text-[10px] font-bold uppercase tracking-widest mb-8 shadow-sm">
                        <Award className="w-3 h-3" />
                        <span>Internationally Acclaimed</span>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-serif font-bold text-navy-900 leading-[1.1] mb-6 tracking-tight">
                        Bridging Theory <br />
                        <span className="relative inline-block">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-500">
                                & Practice.
                            </span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-gold-200/50 -rotate-1 -z-0"></span>
                        </span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-lg text-navy-800/70 mb-10 max-w-lg leading-relaxed font-light">
                        Dr. Rajiv Chopra is a distinguished Professor and Scientist with over 25 years of experience in Computer Science & Engineering. He has authored
                        <span className="font-semibold text-navy-900"> 43 textbooks </span>
                        used globally, specializing in Data Science, Cloud Computing, and Quantum Computing. His work bridges the gap between complex theoretical concepts and practical industry applications, empowering the next generation of tech leaders.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                        <a href="#books" className="px-8 py-4 bg-navy-900 text-white font-bold text-sm rounded-lg hover:bg-navy-800 transition-all shadow-xl shadow-navy-900/10 hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2">
                            Explore Library <ChevronRight className="w-4 h-4" />
                        </a>
                        <a href="#cv" className="px-8 py-4 bg-white border border-gray-200 text-navy-900 font-bold text-sm rounded-lg hover:bg-gray-50 transition-all hover:border-gold-400 hover:text-gold-700 flex items-center gap-2 group shadow-sm">
                            View Curriculum Vitae <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Dynamic Author/Book Showcase */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative lg:h-[600px] flex items-center justify-center"
                >
                    <div className="relative w-full max-w-md aspect-[4/5]">
                        {/* Decorative Frames */}
                        <div className="absolute inset-0 border border-navy-900/10 translate-x-6 translate-y-6 rounded-none z-0"></div>
                        <div className="absolute inset-0 bg-white shadow-2xl overflow-hidden flex flex-col z-10 border border-gray-100">

                            <div className="h-2/3 bg-navy-900 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent opacity-80 z-10"></div>
                                {/* Placeholder Pattern */}
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500 via-navy-900 to-transparent"></div>

                                <div className="relative z-20 h-full flex flex-col items-center justify-center p-8 text-center">
                                    <div className="w-40 h-40 rounded-full flex items-center justify-center mb-6 border-4 border-gold-500/30 overflow-hidden shadow-2xl">
                                        <img src={authorImg} alt="Dr. Rajiv Chopra" className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-3xl font-serif text-white mb-2 tracking-wide">Dr. Rajiv Chopra</h3>
                                    <p className="text-gold-400/80 font-mono text-xs uppercase tracking-widest">Professor & Scientist</p>
                                </div>
                            </div>

                            <div className="h-1/3 bg-white p-8 flex items-center justify-between">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-navy-900 font-serif">43</div>
                                    <div className="text-[10px] uppercase text-gray-500 tracking-widest font-semibold mt-1">Books</div>
                                </div>
                                <div className="w-px h-10 bg-gray-200"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-navy-900 font-serif">25+</div>
                                    <div className="text-[10px] uppercase text-gray-500 tracking-widest font-semibold mt-1">Years</div>
                                </div>
                                <div className="w-px h-10 bg-gray-200"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-navy-900 font-serif">30+</div>
                                    <div className="text-[10px] uppercase text-gray-500 tracking-widest font-semibold mt-1">Papers</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating "Latest Book" Card */}
                        <motion.div
                            className="absolute -bottom-8 -left-8 w-56 bg-white p-5 shadow-2xl border-l-4 border-gold-500 hidden md:block z-20"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center">
                                    <BookOpen className="w-4 h-4 text-gold-600" />
                                </div>
                                <div className="text-[10px] font-bold text-gold-600 uppercase tracking-wider">Latest Release</div>
                            </div>
                            <div className="font-serif font-bold text-navy-900 leading-tight mb-1">Cloud Computing (2024)</div>
                            <div className="text-[10px] text-gray-500">Mercury Learning (USA)</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

const RevolvingCarousel = () => {
    const totalBooks = INTERNATIONAL_BOOKS.length;
    const theta = 360 / totalBooks;
    const cellWidth = 220;
    const gap = 40; // Spacing between items
    const radius = Math.round(((cellWidth + gap) / 2) / Math.tan(Math.PI / totalBooks));

    return (
        <div className="bg-navy-900 text-white py-24 overflow-hidden relative border-t border-gold-500/20" id="international-showcase">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="max-w-7xl mx-auto px-4 text-center mb-16 relative z-10">
                <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Global Impact</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">International Acclaim</h2>
                <p className="text-navy-200/80 max-w-2xl mx-auto leading-relaxed font-light text-lg">
                    Dr. Chopra's works are standard references in universities across the USA, UK, and Germany, bridging cultural and academic boundaries.
                </p>
            </div>

            <div className="scene">
                <div className="carousel">
                    {INTERNATIONAL_BOOKS.map((book, index) => (
                        <div
                            key={book.id}
                            className={`carousel__cell rounded-sm shadow-2xl ${book.cover ? '' : 'p-8 flex flex-col justify-between bg-white'} border-none group`}
                            style={{
                                transform: `rotateY(${index * theta}deg) translateZ(${radius}px)`
                            }}
                        >
                            {book.cover ? (
                                <img src={book.cover} alt={book.title} className="w-full h-full object-cover rounded-sm" />
                            ) : (
                                <>
                                    {/* Book Spine Effect */}
                                    <div className={`absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-r ${book.color}`}></div>

                                    <div>
                                        <div className={`w-12 h-1 mb-6 ${book.color.replace('from-', 'bg-').split(' ')[0]}`}></div>
                                        <h3 className="font-serif font-bold text-2xl leading-tight mb-3 text-navy-900 group-hover:text-gold-600 transition-colors">{book.title}</h3>
                                        <p className="text-xs text-gray-400 font-bold w-max px-2 py-1 bg-gray-50 uppercase tracking-wider">{book.publisher}</p>
                                    </div>
                                    <div>
                                        <div className="w-full h-px bg-gray-100 my-4"></div>
                                        <div className="flex justify-between items-center">
                                            <p className="text-2xl font-bold text-gray-200 font-serif">{book.year}</p>
                                            <a
                                                href={book.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-navy-900 hover:text-gold-600 font-bold text-sm flex items-center gap-1 transition-colors"
                                            >
                                                Order <ExternalLink className="w-3 h-3" />
                                            </a>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const BookCard = ({ book }) => {
    const [showBack, setShowBack] = useState(false);

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-none shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 group relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            {/* Cover Art or Image */}
            <div className={`h-64 relative overflow-hidden group-hover:shadow-inner transition-all duration-500`}>
                {book.cover ? (
                    <div className="w-full h-full relative bg-gray-100">
                        <img
                            src={showBack && book.backCover ? book.backCover : book.cover}
                            alt={book.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {book.backCover && (
                            <button
                                onClick={(e) => { e.preventDefault(); setShowBack(!showBack); }}
                                className="absolute bottom-2 right-2 bg-white/90 p-1.5 rounded-full shadow-md hover:bg-gold-500 hover:text-white transition-colors z-20"
                                title="Flip Cover"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-repeat"><path d="m17 2 4 4-4 4" /><path d="M3 11v-1a4 4 0 0 1 4-4h14" /><path d="m7 22-4-4 4-4" /><path d="M21 13v1a4 4 0 0 1-4 4H3" /></svg>
                            </button>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                    </div>
                ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${book.color} p-8 flex flex-col justify-end relative`}>
                        <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply"></div>
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                        <h3 className="text-white font-serif font-bold text-2xl leading-tight relative z-10 drop-shadow-md pr-4">{book.title}</h3>
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow bg-white">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest truncate max-w-[60%]">{book.publisher}</p>
                    <span className="text-xs font-bold text-navy-900 bg-gray-100 px-2 py-1">{book.year}</span>
                </div>

                <h3 className="text-navy-900 font-serif font-bold text-lg leading-tight mb-2 line-clamp-2 group-hover:text-gold-600 transition-colors">
                    {book.title}
                </h3>

                <p className="text-gray-600 text-xs mb-6 flex-grow leading-relaxed font-light line-clamp-3">
                    A comprehensive guide designed for students and professionals.
                </p>

                {/* Buy Links */}
                <div className="grid grid-cols-1 gap-3 mt-auto">
                    <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full py-2.5 px-4 bg-navy-900 text-white text-xs font-bold uppercase tracking-wide hover:bg-gold-600 transition-colors"
                    >
                        Buy on Amazon
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const LibrarySection = () => {
    const [activeTab, setActiveTab] = useState('international');

    return (
        <section id="books" className="py-24 bg-cream-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-gold-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">The Collection</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">Authored Works</h2>
                    <p className="text-lg text-navy-800/60 max-w-2xl mx-auto font-light">
                        A comprehensive library of 43 books designed to simplify complex technologies for students and professionals.
                    </p>
                </div>

                {/* Custom Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-100">
                        <button
                            onClick={() => setActiveTab('international')}
                            className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'international' ? 'bg-navy-900 text-white shadow-md' : 'text-gray-400 hover:text-navy-900'
                                }`}
                        >
                            International
                        </button>
                        <button
                            onClick={() => setActiveTab('national')}
                            className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'national' ? 'bg-navy-900 text-white shadow-md' : 'text-gray-400 hover:text-navy-900'
                                }`}
                        >
                            National
                        </button>
                    </div>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(activeTab === 'international' ? INTERNATIONAL_BOOKS : NATIONAL_BOOKS).map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>

                {activeTab === 'national' && (
                    <div className="mt-20 text-center">
                        <button className="inline-flex items-center text-navy-900 font-bold border-b-2 border-gold-500 hover:text-gold-600 hover:border-gold-600 transition-colors pb-1 text-lg group">
                            View Complete Bibliography <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

const ResumeSection = () => (
    <section id="cv" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div>
                    <span className="text-gold-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Professional Journey</span>
                    <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Curriculum Vitae</h2>
                    <p className="text-gray-500 max-w-xl font-light text-lg">
                        A snapshot of academic excellence, research contributions, and professional milestones.
                    </p>
                </div>
                <button className="px-6 py-4 bg-navy-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-navy-800 transition-colors flex items-center gap-3 shadow-lg hover:shadow-xl">
                    <Download className="w-4 h-4" /> Download Full Resume
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                {/* Main Column */}
                <div className="lg:col-span-2 space-y-16">

                    {/* Experience */}
                    <div>
                        <h3 className="text-xl font-bold text-navy-900 mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 border border-gold-200">
                                <Briefcase className="w-4 h-4" />
                            </span>
                            Professional Experience
                        </h3>
                        <div className="space-y-10 border-l border-gray-200 ml-4 pl-10 relative">
                            {TIMELINE.filter(t => t.type === 'work').map((item, idx) => (
                                <div key={idx} className="relative group">
                                    <div className="absolute -left-[45px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-gold-500 group-hover:bg-gold-500 transition-colors"></div>
                                    <h4 className="font-bold text-navy-900 text-lg mb-1">{item.role}</h4>
                                    <p className="text-gray-500 font-medium mb-2">{item.org}</p>
                                    <span className="inline-block text-[10px] font-bold text-navy-500 bg-gray-50 px-2 py-1 uppercase tracking-widest border border-gray-100">
                                        {item.year}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-xl font-bold text-navy-900 mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-navy-50 flex items-center justify-center text-navy-600 border border-navy-100">
                                <GraduationCap className="w-4 h-4" />
                            </span>
                            Education
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {TIMELINE.filter(t => t.type === 'edu').map((item, idx) => (
                                <div key={idx} className="group p-6 bg-cream-50 border border-gray-100 hover:border-gold-200 hover:shadow-md transition-all">
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="font-bold text-navy-900 group-hover:text-gold-700 transition-colors text-lg leading-tight">{item.role}</h4>
                                        <span className="text-xs font-bold text-gray-400">{item.year}</span>
                                    </div>
                                    <p className="text-sm text-gray-500">{item.org}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Research */}
                    <div>
                        <h3 className="text-xl font-bold text-navy-900 mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 border border-green-100">
                                <FileText className="w-4 h-4" />
                            </span>
                            Key Research
                        </h3>
                        <ul className="space-y-4">
                            {RESEARCH.map((paper, idx) => (
                                <li key={idx} className="flex gap-4 text-gray-600 text-sm leading-relaxed p-4 bg-white border border-gray-100 hover:border-gold-200 transition-colors">
                                    <span className="text-gold-500 font-serif font-bold italic text-lg opacity-50">#{idx + 1}</span>
                                    {paper}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sidebar Column */}
                <div className="space-y-10">

                    {/* Awards */}
                    <div className="bg-navy-900 text-white p-8 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Award className="w-40 h-40" />
                        </div>
                        <h3 className="text-lg font-bold text-gold-500 mb-6 relative z-10 uppercase tracking-widest border-b border-gold-500/30 pb-4">Honors & Awards</h3>
                        <ul className="space-y-6 relative z-10">
                            {AWARDS.slice(0, 5).map((award, idx) => (
                                <li key={idx} className="text-sm text-gray-300 relative pl-4">
                                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                                    {award}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Certifications */}
                    <div className="bg-gray-50 p-8 border border-gray-100">
                        <h3 className="text-lg font-bold text-navy-900 mb-6 font-serif">Certifications</h3>
                        <div className="flex flex-wrap gap-2">
                            {CERTIFICATIONS.slice(0, 6).map((cert, idx) => (
                                <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-navy-700 text-xs font-semibold border border-gray-200 shadow-sm">
                                    <CheckCircle className="w-3 h-3 text-gold-500" />
                                    {cert.split('(')[0]}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Memberships */}
                    <div className="bg-white p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold text-navy-900 mb-6 font-serif">Memberships</h3>
                        <ul className="space-y-3">
                            {MEMBERSHIPS.map((mem, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-center gap-3">
                                    <Users className="w-4 h-4 text-gold-600" />
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
        <div className="min-h-screen font-sans text-navy-900 bg-cream-50 selection:bg-gold-200">
            <Navbar />
            <Hero />

            {/* Stats Section - Compact */}
            <section className="bg-navy-950 py-16 border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {STATS.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="flex flex-col items-center text-center group">
                                    <div className="mb-4 p-3 bg-white/5 rounded-full group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-500 text-gold-500">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <p className="text-4xl font-serif font-bold text-white mb-2">{stat.value}</p>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">{stat.label}</p>
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
            <footer className="bg-navy-950 text-gray-400 py-20 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <BookOpen className="h-8 w-8 text-gold-500" />
                            <div>
                                <span className="font-serif font-bold text-2xl text-white block leading-none">Dr. Rajiv Chopra</span>
                                <span className="text-[10px] uppercase tracking-widest text-gray-500">Author • Scientist • Professor</span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                            Bridging the gap between academic theory and industrial application since 2002.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 text-sm font-medium">
                        <a href="mailto:raj_74chopra2004@yahoo.com" className="flex items-center gap-4 text-gray-300 hover:text-gold-400 transition-colors group">
                            <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-900 transition-all">
                                <Mail className="w-4 h-4" />
                            </span>
                            raj_74chopra2004@yahoo.com
                        </a>
                        <span className="flex items-center gap-4 text-gray-300 group">
                            <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <Phone className="w-4 h-4" />
                            </span>
                            +91-8800887301
                        </span>
                    </div>
                </div>
                <div className="mt-16 text-center text-xs text-gray-600 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-center gap-4">
                    <span>&copy; {new Date().getFullYear()} Dr. Rajiv Chopra. All rights reserved.</span>
                    <span className="hidden md:inline">•</span>
                    <span>Designed with Precision & Excellence</span>
                </div>
            </footer>
        </div>
    );
};

export default App;
