import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-4">
              Masters in Computer Science student at University at Albany, SUNY, with a strong foundation in software engineering
              and artificial intelligence. Passionate about building innovative solutions and exploring cutting-edge technologies.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h3 className="font-bold mb-2">Education</h3>
                <p className="text-gray-600">MS in Computer Science</p>
                <p className="text-gray-500">University at Albany, SUNY</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-gray-600">Albany, NY</p>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <SkillCard title="Languages" items={["Python", "Java", "JavaScript", "C++", "HTML5", "CSS3"]} />
            <SkillCard title="Cloud & DevOps" items={["AWS Services", "Docker", "CI/CD"]} />
            <SkillCard title="Frameworks" items={["React.js", "Node.js", "Spring Boot"]} />
            <SkillCard title="Databases" items={["MySQL", "MongoDB", "PostgreSQL"]} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="font-bold mb-3 text-gray-800">{title}</h3>
    <ul className="text-gray-600 text-sm">
      {items.map((item, index) => (
        <li key={index} className="mb-1">{item}</li>
      ))}
    </ul>
  </div>
);

export default About;