import { useState, useEffect, KeyboardEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface HomeProps {
  onEnter: () => void;
}

const Home = ({ onEnter }: HomeProps) => {
  const [userInput, setUserInput] = useState('')
  const [showText, setShowText] = useState(false)
  const [showRoles, setShowRoles] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    // Sequence the animations
    setTimeout(() => setShowText(true), 500)
    setTimeout(() => setShowRoles(true), 1500)
    setTimeout(() => setShowPrompt(true), 2500)
  }, [])

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && userInput.length > 0) {
      onEnter()
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen bg-terminal-black flex flex-col items-center justify-center text-terminal-blue font-terminal"
    >
      <div className="space-y-8 text-center mb-16">
        <AnimatePresence>
          {showText && (
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl mb-8"
            >
              Hi there. <span className="text-terminal-blue brightness-150">I'm Akhilan</span>
            </motion.h1>
          )}
        </AnimatePresence>

        {showRoles && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4 text-3xl opacity-80"
          >
            <div>- UI/UX Designer</div>
            <div>- Software Engineer</div>
          </motion.div>
        )}

        {showPrompt && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 text-4xl"
          >
            Welcome to The Infi Operating System
          </motion.div>
        )}
        
        {showPrompt && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 text-4xl"
          >
            <span className="text-terminal-blue brightness-150">Type Anything and press Enter to continue...</span>
          </motion.div>
        )}
      </div>

      {showPrompt && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center text-3xl"
        >
          <span className="mr-2">user: ~$</span>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyPress}
            autoFocus
            className="bg-transparent border-none outline-none w-64"
            spellCheck="false"
          />
        </motion.div>
      )}
    </motion.div>
  )
}

export default Home 