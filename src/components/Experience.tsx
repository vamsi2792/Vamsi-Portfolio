import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Software Engineering Fellow",
      company: "Headstarter Fellowship",
      period: "Jul 2024 - Sept 2024",
      location: "Remote",
      description: [
        "Led a team of four to develop four AI based full-stack projects using React.js, Next.js, Firebase",
        "Created a customer support agent with Next.js, OpenAI, and Pinecone, improving response accuracy by 75%",
        "Launched a SaaS application using GPT-4 mini LLM for personalized flashcards with Stripe"
      ]
    },
    {
      title: "Internship",
      company: "Indian Space Research Organisation, SDSC-SHAR",
      period: "Jun 2023 - Aug 2023",
      location: "Sriharikota, India",
      description: [
        "Automated data verification process for migrating 200k+ documents to AWS cloud",
        "Achieved 98% accuracy rate during integration",
        "Reduced manual workload by over a week through automation"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Briefcase className="text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-gray-600 mb-2">{exp.company}</p>
                  <p className="text-gray-500 mb-4">{exp.period} | {exp.location}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;