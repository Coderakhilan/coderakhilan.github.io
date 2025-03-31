import { useState, useEffect } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Splash from './components/Splash'
import Home from './components/Home'
import { motion, AnimatePresence } from 'framer-motion'

type Section = 'about' | 'projects' | 'contact'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [showHome, setShowHome] = useState(false)
  const [showMain, setShowMain] = useState(false)
  const [activeSection, setActiveSection] = useState<Section>('about')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isLoaded && activeSection === 'about' && e.code === 'Space') {
        setActiveSection('projects')
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isLoaded, activeSection])

  const handleSplashComplete = () => {
    setShowSplash(false)
    setShowHome(true)
  }

  const handleHomeComplete = () => {
    setActiveSection('about')
    setShowMain(true)
    setIsLoaded(true)
    setTimeout(() => setShowHome(false), 100)
  }

  return (
    <>
      <AnimatePresence>
        {showSplash && <Splash onComplete={handleSplashComplete} />}
      </AnimatePresence>

      <AnimatePresence>
        {showHome && <Home onEnter={handleHomeComplete} />}
      </AnimatePresence>

      {showMain && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen p-4 md:p-8 flex items-center justify-center bg-terminal-dark"
        >
          <div className="w-full max-w-[98rem] h-screen-90 border border-terminal-blue grid grid-cols-[400px,1fr] gap-8 bg-terminal-black/95">
            {/* Left Panel */}
            <div className="border-r border-terminal-blue p-10 flex flex-col justify-between">
              <div>
                <h1 className="text-7xl mb-24 text-terminal-blue">PORTFOLIO_</h1>
                <nav className="space-y-12">
                  {(['about', 'projects', 'contact'] as Section[]).map((section) => (
                    <motion.button
                      key={section}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`terminal-button w-full text-left text-3xl py-4 px-6 ${
                        activeSection === section ? 'bg-terminal-blue text-terminal-black' : ''
                      }`}
                      onClick={() => setActiveSection(section)}
                    >
                      {'>_'} {section.toUpperCase()}
                    </motion.button>
                  ))}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="terminal-button w-full text-left text-3xl py-4 px-6"
                    onClick={() => {
                      setShowMain(false)
                      setShowHome(true)
                      setIsLoaded(false)
                    }}
                  >
                    {'>_'} LOGOUT
                  </motion.button>
                </nav>
              </div>
              <div className="space-y-8">
                <motion.div 
                  className="text-4xl text-terminal-blue opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <a 
                    href="/akhilanresume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    RESUME_
                  </a>
                </motion.div>
                <motion.div 
                  className="text-4xl text-terminal-blue opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <a 
                    href="https://linktr.ee/coderakhilan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    INFI_OS
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Right Panel */}
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-10 overflow-auto text-terminal-blue"
            >
              {activeSection === 'about' && <About />}
              {activeSection === 'projects' && <Projects />}
              {activeSection === 'contact' && <Contact />}
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default App
