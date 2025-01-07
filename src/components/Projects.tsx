import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, ShoppingCart, Brain } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "AI-Powered Social Media Scheduling Tool",
      description: "Content creation tool automating 50+ unique posts weekly using React.js, Java, Spring Boot, and GPT-3",
      icon: <Code2 className="w-6 h-6" />,
      technologies: ["React.js", "Java", "Spring Boot", "MongoDB", "GPT-3", "AWS"],
      highlights: [
        "Automated content creation for 50+ weekly posts",
        "Built marketplace platform with real-time analytics",
        "Integrated with LinkedIn and Pinterest APIs"
      ]
    },
    {
      title: "Ecommerce Application",
      description: "Full-stack MERN application with secure authentication and seamless checkout",
      icon: <ShoppingCart className="w-6 h-6" />,
      technologies: ["React.js", "Node.js", "MongoDB", "Express"],
      highlights: [
        "Implemented core features and secure authentication",
        "Enhanced API performance with caching",
        "Designed scalable MongoDB database architecture"
      ]
    },
    {
      title: "Personality Analysis and Prediction",
      description: "ML-powered personality prediction system using MBTI framework",
      icon: <Brain className="w-6 h-6" />,
      technologies: ["Python", "MBTI", "XGBoost", "NLTK", "Machine Learning"],
      highlights: [
        "Achieved 93% prediction accuracy",
        "Reduced processing time by 30%",
        "Optimized data preprocessing techniques"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#0a0014]" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl font-bold mb-12 text-center text-purple-200"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-purple-900/10 backdrop-blur-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-purple-500/20"
              >
                <div className="h-1 bg-purple-500/20" />
                <div className="p-6">
                  <motion.div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-purple-900/30 text-purple-400"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {project.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-purple-200">{project.title}</h3>
                  <p className="text-purple-200/70 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-purple-200">Key Features:</h4>
                    <ul className="list-disc list-inside text-purple-200/70 space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span 
                        key={i} 
                        className="px-3 py-1 rounded-full text-sm bg-purple-900/30 text-purple-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;