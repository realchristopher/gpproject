// HPI 1.7-V
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ArrowRight, FileText, BarChart2, BookOpen, ChevronRight, Scale, Globe, TrendingDown } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Utility Components ---

const SectionDivider = () => (
  <div className="w-full h-[1px] bg-primary/20 my-0" />
);

const VerticalDivider = ({ className }: { className?: string }) => (
  <div className={`w-[1px] bg-primary/20 h-full ${className}`} />
);

// Perspective Badge Component
const PerspectiveBadge = ({ label, color }: { label: string; color: string }) => (
  <span className={`inline-block px-3 py-1 text-xs font-paragraph tracking-wider uppercase ${color} rounded-full`}>
    {label}
  </span>
);

// --- Hero Section (Inspiration Image Replica) ---

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yImageFast = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yImageSlow = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[110vh] flex flex-col pt-32 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Massive Headline - Top Layer */}
      <div className="relative z-10 w-full mb-12 md:mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-[15vw] md:text-[13vw] leading-[0.85] text-primary text-center tracking-tight"
        >
          Unveiling <br className="md:hidden" /> Corruption
        </motion.h1>
      </div>

      {/* Content Grid - Bottom Layer */}
      <div className="w-full max-w-[120rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start relative z-20">
        
        {/* Left Column: Intro & CTA */}
        <motion.div 
          style={{ y: yText }}
          className="lg:col-span-4 flex flex-col justify-between h-full pt-12 lg:pt-24"
        >
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-12 h-[1px] bg-primary"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-paragraph text-xl md:text-2xl text-primary leading-relaxed max-w-md"
            >
              An investigative examination into the systemic effects of corruption on Nigeria's economic stability and resource distribution.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                to="/case-studies"
                className="group inline-flex items-center gap-4 px-8 py-4 border border-primary bg-transparent hover:bg-primary transition-all duration-500"
              >
                <span className="font-paragraph text-lg text-primary group-hover:text-primary-foreground transition-colors duration-300">
                  Explore Research
                </span>
                <ArrowRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300 group-hover:translate-x-1 transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Dual Imagery */}
        <div className="lg:col-span-8 grid grid-cols-2 gap-6 md:gap-12 h-full min-h-[60vh]">
          <motion.div style={{ y: yImageSlow }} className="relative w-full h-[60vh] lg:h-[80vh] mt-12 lg:mt-0">
            <div className="absolute inset-0 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&h=1600&fit=crop"
                alt="Nigerian economic landscape"
                className="w-full h-full object-cover scale-110"
                width={800}
              />
            </div>
          </motion.div>
          
          <motion.div style={{ y: yImageFast }} className="relative w-full h-[60vh] lg:h-[80vh] lg:-mt-24">
             <div className="absolute inset-0 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=1200&h=1600&fit=crop"
                alt="Financial data and analysis"
                className="w-full h-full object-cover scale-110"
                width={800}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Sticky Research Question Section ---

const ResearchQuestion = () => {
  return (
    <section className="relative w-full bg-secondary text-secondary-foreground py-32 px-6 md:px-12 lg:px-20 overflow-clip">
      <div className="max-w-[120rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Sticky Question */}
          <div className="relative h-fit lg:h-[calc(100vh-10rem)] lg:sticky lg:top-20 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="block font-paragraph text-sm tracking-[0.2em] uppercase mb-8 opacity-60">The Core Inquiry</span>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
                How does corruption in Nigeria affect the country's finances and access to resources?
              </h2>
              <div className="w-24 h-1 bg-secondary-foreground/30 mt-12" />
            </motion.div>
          </div>

          {/* Scrolling Context */}
          <div className="flex flex-col gap-32 lg:pt-20 lg:pb-40">
            {[
              {
                title: "Systemic Instability",
                text: "This investigation explores the multifaceted relationship between corrupt practices and their tangible consequences on Nigeria's economic infrastructure. It is not merely about lost funds, but the erosion of foundational systems."
              },
              {
                title: "Resource Inequality",
                text: "Through rigorous analysis of case studies, we uncover how misappropriation directly correlates with the scarcity of public services. The gap between potential wealth and actual resource availability is the focal point of this study."
              },
              {
                title: "Evidence-Based Analysis",
                text: "Utilizing statistical data and documented evidence, this project reveals the systemic patterns that perpetuate financial instability. We move beyond anecdote to establish a clear causal link between corruption and economic stagnation."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="space-y-6 border-l border-secondary-foreground/20 pl-8 md:pl-12"
              >
                <h3 className="font-heading text-3xl md:text-4xl">{item.title}</h3>
                <p className="font-paragraph text-lg md:text-xl leading-relaxed opacity-80 max-w-xl">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Visual Breather / Impact Section ---

const ImpactVisual = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <section ref={ref} className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center bg-secondary">
      <motion.div style={{ scale, opacity }} className="absolute inset-0 w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1600&h=900&fit=crop"
          alt="Nigerian cityscape and infrastructure"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
      </motion.div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-heading text-4xl md:text-6xl text-secondary-foreground leading-tight"
        >
          "Corruption is not just a financial crime; it is a resource crisis that reshapes the destiny of a nation."
        </motion.p>
      </div>
    </section>
  );
};

// --- Project Components (Navigation) ---

const ProjectComponents = () => {
  const components = [
    {
      id: "01",
      title: "Case Studies",
      desc: "Detailed examinations of specific corruption incidents and their documented financial impacts.",
      link: "/case-studies",
      icon: <FileText className="w-8 h-8" />
    },
    {
      id: "02",
      title: "Data & Analysis",
      desc: "Statistical evidence, charts, and analytical findings supporting the research conclusions.",
      link: "/data-analysis",
      icon: <BarChart2 className="w-8 h-8" />
    },
    {
      id: "03",
      title: "Sources & References",
      desc: "Complete bibliography and citations documenting all research materials.",
      link: "/sources",
      icon: <BookOpen className="w-8 h-8" />
    }
  ];

  return (
    <section className="w-full py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-[120rem] mx-auto">
        <div className="mb-20 border-b border-primary/20 pb-8 flex flex-col md:flex-row justify-between items-end">
          <h2 className="font-heading text-5xl md:text-7xl text-primary">Project Components</h2>
          <p className="font-paragraph text-lg text-primary/70 max-w-md mt-6 md:mt-0 text-right">
            Navigate through the core pillars of this research project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {components.map((item, index) => (
            <Link key={index} to={item.link} className="group block">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative border-t border-primary/20 py-12 md:py-16 transition-all duration-500 hover:bg-primary/5 hover:px-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex items-start md:items-center gap-8 md:gap-16">
                    <span className="font-paragraph text-sm md:text-base tracking-widest text-primary/50">
                      {item.id}
                    </span>
                    <h3 className="font-heading text-4xl md:text-6xl text-primary group-hover:translate-x-4 transition-transform duration-500">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-8 md:gap-12">
                    <p className="hidden md:block font-paragraph text-base text-primary/70 max-w-sm text-right group-hover:text-primary transition-colors">
                      {item.desc}
                    </p>
                    <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                      <div className="text-primary group-hover:text-primary-foreground transition-colors duration-500">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
          <div className="border-t border-primary/20" />
        </div>
      </div>
    </section>
  );
};

// --- Multi-Perspective Section (Global, National, Local) ---

const MultiPerspective = () => {
  const perspectives = [
    {
      level: "Global",
      badge: "bg-primary/10 text-primary",
      title: "International Context",
      content: "Nigeria ranks 145th out of 180 countries in Transparency International's 2023 Corruption Perceptions Index. This places the nation among the most corrupt globally, affecting foreign investment, international aid distribution, and global economic partnerships. The World Bank estimates that corruption costs developing nations like Nigeria up to $1 trillion annually in lost economic growth.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      level: "National",
      badge: "bg-secondary text-secondary-foreground",
      title: "Federal Impact",
      content: "At the national level, corruption manifests through embezzlement of public funds, contract inflation, and mismanagement of oil revenues. The Nigerian Economic and Financial Crimes Commission (EFCC) reports that between 2016-2020, over ₦1.3 trillion was recovered from corrupt officials. Yet, this represents only a fraction of estimated losses. National infrastructure projects face chronic delays and cost overruns, with funds diverted from healthcare, education, and essential services.",
      icon: <Scale className="w-8 h-8" />
    },
    {
      level: "Local",
      badge: "bg-accent text-accent-foreground",
      title: "Community Effects",
      content: "Local communities bear the most direct consequences of corruption. Citizens face daily challenges: non-functional healthcare facilities, deteriorating roads, inadequate water supply, and underfunded schools. In rural areas, ghost worker schemes drain local government budgets while essential services remain unfunded. Small businesses struggle with extortion and bribery demands, stifling entrepreneurship and economic mobility at the grassroots level.",
      icon: <TrendingDown className="w-8 h-8" />
    }
  ];

  return (
    <section className="w-full py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-[120rem] mx-auto">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-5xl md:text-7xl text-primary mb-6">
            Multi-Level Perspectives
          </h2>
          <p className="font-paragraph text-lg text-primary/70 max-w-3xl mx-auto">
            Understanding corruption requires examining its impact across global, national, and local dimensions.
          </p>
        </motion.div>

        <div className="space-y-16">
          {perspectives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-3 flex flex-col gap-4">
                  <PerspectiveBadge label={item.level} color={item.badge} />
                  <div className="flex items-center gap-4">
                    <div className="text-primary">
                      {item.icon}
                    </div>
                    <h3 className="font-heading text-3xl text-primary">
                      {item.title}
                    </h3>
                  </div>
                </div>
                
                <div className="lg:col-span-9">
                  <div className="p-8 bg-accent/30 border-l-4 border-primary">
                    <p className="font-paragraph text-base md:text-lg text-primary leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Solutions Section ---

const Solutions = () => {
  const solutions = [
    {
      category: "Institutional Reform",
      items: [
        "Strengthen anti-corruption agencies with operational independence and adequate funding",
        "Implement transparent public procurement systems with digital tracking",
        "Establish whistleblower protection programs with guaranteed anonymity"
      ]
    },
    {
      category: "Technological Innovation",
      items: [
        "Deploy blockchain technology for government financial transactions",
        "Create public databases for contract awards and budget allocations",
        "Utilize AI-powered systems to detect irregular spending patterns"
      ]
    },
    {
      category: "Legal & Judicial",
      items: [
        "Fast-track corruption cases through specialized courts",
        "Enforce asset declaration requirements for public officials",
        "Implement stricter penalties including asset forfeiture and lengthy prison terms"
      ]
    },
    {
      category: "Civic Engagement",
      items: [
        "Promote civic education on citizens' rights and anti-corruption mechanisms",
        "Support investigative journalism and media freedom",
        "Encourage community-based monitoring of local government projects"
      ]
    }
  ];

  return (
    <section id="solutions" className="w-full py-32 px-6 md:px-12 lg:px-20 bg-secondary text-secondary-foreground">
      <div className="max-w-[120rem] mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-5xl md:text-7xl mb-6">
            Potential Solutions
          </h2>
          <p className="font-paragraph text-lg opacity-80 max-w-3xl leading-relaxed">
            Addressing corruption in Nigeria requires a comprehensive, multi-faceted approach combining institutional reform, technological innovation, legal enforcement, and civic participation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border border-secondary-foreground/20 p-8 hover:border-secondary-foreground/40 transition-colors duration-300"
            >
              <h3 className="font-heading text-3xl mb-6 pb-4 border-b border-secondary-foreground/20">
                {solution.category}
              </h3>
              <ul className="space-y-4">
                {solution.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0 text-secondary-foreground/60" />
                    <span className="font-paragraph text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Methodology Section ---

const Methodology = () => {
  const steps = [
    {
      num: "01",
      title: "Literature Review",
      desc: "Comprehensive analysis of academic papers, reports, and documented cases.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      num: "02",
      title: "Data Collection",
      desc: "Gathering statistical evidence from credible national and international sources.",
      icon: <TrendingDown className="w-6 h-6" />
    },
    {
      num: "03",
      title: "Case Analysis",
      desc: "Detailed examination of specific corruption incidents and their documented impacts.",
      icon: <Scale className="w-6 h-6" />
    },
    {
      num: "04",
      title: "Synthesis",
      desc: "Integration of findings to establish patterns and draw evidence-based conclusions.",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  return (
    <section className="w-full bg-secondary text-secondary-foreground py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-[120rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-heading text-5xl md:text-6xl mb-8">Methodology</h2>
            <p className="font-paragraph text-lg opacity-80 leading-relaxed max-w-md">
              Our research follows a structured, multi-phase approach to ensure accuracy, objectivity, and comprehensive coverage of the subject matter.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-secondary-foreground/20 group-hover:bg-secondary-foreground transition-colors duration-500" />
                <div className="pt-8">
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-heading text-4xl text-secondary-foreground/40 group-hover:text-secondary-foreground transition-colors duration-300">
                      {step.num}
                    </span>
                    <div className="p-2 border border-secondary-foreground/20 rounded-full opacity-50 group-hover:opacity-100 transition-opacity">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl mb-4">{step.title}</h3>
                  <p className="font-paragraph text-base opacity-70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        <SectionDivider />
        <ResearchQuestion />
        <ImpactVisual />
        <MultiPerspective />
        <Solutions />
        <ProjectComponents />
        <Methodology />
      </main>

      <Footer />
    </div>
  );
}