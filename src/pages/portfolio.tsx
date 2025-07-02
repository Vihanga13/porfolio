import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import logoImage from "@/assets/logo.png";
import portraitImage from "@/assets/nw.jpg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Timeline } from "@/components/ui/timeline";
import { Chatbot } from "@/components/ui/chatbot";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@/shared/schema";
import { sendEmail } from "@/lib/emailService";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  Instagram,
  Download,
  Users,
  User,
  RefreshCw,
  Brain,
  Clock,
  PuzzleIcon,
  Medal,
  FlaskRound,
  Cross,
  Target,
  Code,
  Lightbulb,
  Menu,
  X
} from "lucide-react";
import { motion } from "framer-motion";

import {
  PERSONAL_INFO,
  ABOUT_TEXT,
  PROJECTS,
  TECHNICAL_SKILLS,
  SOFT_SKILLS,
  EDUCATION,
  EXPERIENCE
} from "@/lib/constants";

const iconMap = {
  Users,
  RefreshCw,
  Brain,
  Clock,
  PuzzlePiece: PuzzleIcon,
  Medal,
  Flask: FlaskRound,
  Cross,
  Target,
  Code
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      await sendEmail(data);
      return { success: true };
    },onSuccess: (_data) => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (_error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };    const downloadCV = () => {
    // Create a link to download the CV with correct GitHub Pages path
    const link = document.createElement('a');
    // Use the base path from vite config for GitHub Pages
    link.href = `${import.meta.env.BASE_URL}VIHANGA NILUSHA - CV.pdf`;
    link.download = 'VIHANGA_NILUSHA_CV.pdf';
    link.target = '_blank'; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show toast notification
    toast({
      title: "CV Download",
      description: "PDF CV downloaded successfully!",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 navbar-blur border-b border-border"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">          <div className="flex justify-between items-center h-20">          
            <div className="relative group cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => scrollToSection('home')}>
              <div className="w-20 h-20 overflow-hidden">
                <img 
                  src={logoImage}
                  alt="Vihanga Nilusha"
                  className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors duration-300">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors duration-300">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors duration-300">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors duration-300">
                Skills
              </button>
              <button onClick={() => scrollToSection('education')} className="hover:text-primary transition-colors duration-300">
                Education
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors duration-300">
                Contact
              </button>
            </div>
            
            <button 
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border">
              <div className="px-4 py-4 space-y-4">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-primary transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-primary transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('projects')} className="block w-full text-left hover:text-primary transition-colors">
                  Projects
                </button>
                <button onClick={() => scrollToSection('skills')} className="block w-full text-left hover:text-primary transition-colors">
                  Skills
                </button>
                <button onClick={() => scrollToSection('education')} className="block w-full text-left hover:text-primary transition-colors">
                  Education
                </button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-primary transition-colors">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="animate-fade-in"
          >
            {/* Professional headshot */}            <motion.div 
              variants={scaleIn}
              className="w-64 h-80 mx-auto mb-8 rounded-lg border-4 border-primary animate-pulse-glow overflow-hidden"
            >
              <img 
                src={portraitImage} 
                alt="Vihanga Nilusha - Professional Portrait" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </motion.h1>
            
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <Badge className="bg-gradient-to-r from-green-500 via-primary to-secondary text-white px-6 py-3 text-base font-bold animate-bounce shadow-lg ring-4 ring-primary/30">
                  ✨ CURRENTLY WORKING AT ALTITUDE1 (PVT) LTD ✨
                </Badge>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-primary to-secondary rounded-full blur opacity-30 animate-pulse"></div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center mb-6"
            >
              <Badge className="bg-green-100 text-green-800 border-2 border-green-300 px-4 py-2 text-sm font-semibold animate-pulse">
                🚀 Started in June 2025 - Fresh & Excited!
              </Badge>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              {PERSONAL_INFO.title} & Full-Stack Developer passionate about creating innovative digital solutions
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 hover:scale-105 transition-transform duration-300"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={downloadCV}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center space-x-6 mt-8"
            >
              <a href={PERSONAL_INFO.linkedin} className="text-2xl hover:text-primary transition-colors duration-300">
                <Linkedin />
              </a>
              <a href={PERSONAL_INFO.github} className="text-2xl hover:text-primary transition-colors duration-300">
                <Github />
              </a>
              <a href={PERSONAL_INFO.instagram} className="text-2xl hover:text-primary transition-colors duration-300">
                <Instagram />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-2xl hover:text-primary transition-colors duration-300">
                <Mail />
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="text-2xl hover:text-primary transition-colors duration-300">
                <Phone />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {ABOUT_TEXT.intro}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {ABOUT_TEXT.journey}
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {ABOUT_TEXT.goal}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="glass-card border-primary/10">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-2">Location</h4>
                    <p className="text-muted-foreground">{PERSONAL_INFO.location}</p>
                  </CardContent>
                </Card>
                <Card className="glass-card border-primary/10">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-2">Languages</h4>
                    <p className="text-muted-foreground">{PERSONAL_INFO.languages.join(", ")}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern coding workspace" 
                className="rounded-xl shadow-2xl w-full h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my notable projects that showcase my skills in full-stack development, 
              mobile applications, and innovative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <Card key={project.id} className="glass-card border-primary/10 group hover:scale-105 transition-all duration-300">
                <CardContent className="p-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      {project.type === "Group Project" ? (
                        <Users className="h-4 w-4 text-primary mr-2" />
                      ) : (
                        <User className="h-4 w-4 text-secondary mr-2" />
                      )}
                      <span className="text-sm text-muted-foreground">{project.type}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-primary">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="skill-tag text-xs font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                      <div className="flex items-center">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        View Code
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and soft skills developed through education and hands-on projects.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center">
                <Code className="mr-3" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {Object.entries(TECHNICAL_SKILLS).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="font-semibold mb-3 text-foreground">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} className="skill-tag px-4 py-2 text-sm font-mono">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center">
                <Lightbulb className="mr-3" />
                Soft Skills
              </h3>
              <div className="space-y-4">
                {SOFT_SKILLS.map((skill) => {
                  const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
                  return (
                    <Card key={skill.name} className="glass-card border-primary/10">
                      <CardContent className="p-4 flex items-center">
                        <IconComponent className="h-5 w-5 text-primary mr-4" />
                        <div>
                          <h4 className="font-semibold">{skill.name}</h4>
                          <p className="text-muted-foreground text-sm">{skill.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My educational journey and professional development through formal education and specialized training.
            </p>
          </div>
          
          <Timeline items={EDUCATION} />
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Leadership & <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My leadership roles and extracurricular activities that have shaped my professional development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {EXPERIENCE.map((exp, index) => {
              const IconComponent = iconMap[exp.icon as keyof typeof iconMap];
              const isNew = index === 0; // First item is the new role
              return (
                <Card 
                  key={exp.id} 
                  className={`glass-card transition-all duration-500 transform hover:scale-102 ${
                    isNew 
                      ? 'border-4 border-green-400 bg-gradient-to-br from-green-50 to-blue-50 shadow-2xl ring-4 ring-green-200 relative overflow-hidden' 
                      : 'border-primary/10 hover:shadow-lg'
                  }`}
                >
                  {isNew && (
                    <>
                      <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-green-500"></div>
                      <div className="absolute top-2 right-2 text-white text-xs font-bold transform rotate-45">
                        NEW
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-primary/10 to-secondary/10 animate-pulse"></div>
                    </>
                  )}
                  
                  <CardContent className={`p-6 relative z-10 ${isNew ? 'bg-white/80 backdrop-blur-sm rounded-lg m-2' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <IconComponent className={`h-8 w-8 mr-4 ${isNew ? 'text-green-600 animate-bounce' : 'text-primary'}`} />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className={`text-xl font-bold ${isNew ? 'text-green-700 text-2xl' : ''}`}>
                              {exp.title}
                            </h3>
                            {isNew && (
                              <div className="flex gap-2">
                                <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold animate-bounce">
                                  🔥 CURRENT
                                </Badge>
                                <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold animate-pulse">
                                  ⭐ FEATURED
                                </Badge>
                              </div>
                            )}
                          </div>
                          <p className={`${isNew ? 'text-green-600 font-semibold text-lg' : 'text-muted-foreground'}`}>
                            {exp.organization} • {exp.period}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className={`text-sm leading-relaxed ${isNew ? 'text-gray-700 font-medium' : 'text-muted-foreground'}`}>
                      {exp.description}
                    </p>
                    {isNew && (
                      <div className="mt-6 space-y-3">
                        <div className="p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl border-2 border-green-300 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-green-200/50 to-blue-200/50 animate-pulse"></div>
                          <div className="relative z-10">
                            <p className="text-green-800 font-bold text-center mb-2 text-lg">
                              🎊 JUST STARTED IN JUNE 2025! 🎊
                            </p>
                            <p className="text-green-700 text-sm text-center font-medium">
                              Fresh energy • New challenges • Exciting opportunities ahead!
                            </p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2">
                          <div className="text-center p-2 bg-green-50 rounded-lg border border-green-200">
                            <div className="text-green-600 font-bold text-xs">MONTH 1</div>
                            <div className="text-green-800 text-xs">Learning & Growing</div>
                          </div>
                          <div className="text-center p-2 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="text-blue-600 font-bold text-xs">CURRENT</div>
                            <div className="text-blue-800 text-xs">Building Impact</div>
                          </div>
                          <div className="text-center p-2 bg-purple-50 rounded-lg border border-purple-200">
                            <div className="text-purple-600 font-bold text-xs">FUTURE</div>
                            <div className="text-purple-800 text-xs">Endless Potential</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and innovation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-8 text-primary">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a 
                      href={`tel:${PERSONAL_INFO.phone}`} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href={PERSONAL_INFO.linkedin} 
                    className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={PERSONAL_INFO.github} 
                    className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href={PERSONAL_INFO.instagram} 
                    className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-8 text-primary">Send Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Name" 
                            className="bg-card border-border focus:border-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your.email@example.com" 
                            className="bg-card border-border focus:border-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Project Collaboration" 
                            className="bg-card border-border focus:border-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={6}
                            placeholder="Tell me about your project or idea..." 
                            className="bg-card border-border focus:border-primary resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-105 transition-transform duration-300"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            &copy; 2025 Vihanga Nilusha. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with passion using MERN Stack • Designed for modern web experiences
          </p>
        </div>
      </motion.footer>

      {/* Add Chatbot */}
      <Chatbot />
    </div>
  );
}
