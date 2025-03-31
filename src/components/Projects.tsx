import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Webscraping Dictionary',
    description: 'A C++ implementation for web scraping and sorting synonyms. The code utilizes the libcurl library to fetch data from web pages and performs sorting operations on a linked list.',
    tech: ['C++', 'libcurl', 'Web Scraping', 'Data Structures'],
    link: 'https://github.com/Coderakhilan/Webscraping-Dictionary'
  },
  {
    id: 2,
    title: 'Tutoring Services Web App',
    description: 'A full-stack MERN (MongoDB, Express.js, React, Node.js) application for tutoring services.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'MERN Stack'],
    link: 'https://github.com/Coderakhilan/Tutoring-Services'
  },
  {
    id: 3,
    title: 'Expense Tracker',
    description: 'An expense tracking application built using Streamlit and Python for efficient financial management.',
    tech: ['Python', 'Streamlit', 'Data Analysis'],
    link: 'https://github.com/Coderakhilan/Expense-Tracker'
  },
  {
    id: 4,
    title: 'Automobile Review System',
    description: 'A full stack web application for reviewing automobiles.',
    tech: ['MongoDB', 'Express.js', 'Node.js', 'HTML', 'CSS', 'MERN Stack'],
    link: 'https://github.com/Coderakhilan/Automobile-Review-System'
  },
]

const Projects = () => {
  return (
    <div className="space-y-12 max-w-5xl">
      <h2 className="text-4xl mb-12">{'>_'} PROJECT_LIST</h2>
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="border border-terminal-blue p-10 hover:bg-terminal-blue/5 transition-colors"
        >
          <h3 className="text-3xl mb-6">{project.title}</h3>
          <p className="mb-8 opacity-80 text-2xl leading-relaxed">{project.description}</p>
          <div className="mb-8">
            <span className="opacity-70 mr-4 text-xl">Tech Stack:</span>
            {project.tech.map((tech, i) => (
              <span key={i} className="inline-block border border-terminal-blue px-4 py-2 text-xl mr-4 mb-4">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-terminal-blue px-8 py-4 text-2xl hover:bg-terminal-blue hover:text-terminal-black transition-all"
          >
            View Project {'>'}
          </a>
        </motion.div>
      ))}
    </div>
  )
}

export default Projects 