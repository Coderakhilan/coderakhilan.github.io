import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SplashProps {
  onComplete: () => void;
}

const Splash = ({ onComplete }: SplashProps) => {
  const [showText, setShowText] = useState(false)
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowText(true), 500)
    setTimeout(() => setShowLoading(true), 1000)
    setTimeout(() => onComplete(), 2500)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-terminal-black flex flex-col items-center justify-center text-terminal-blue font-terminal"
    >
      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl mb-8 relative"
          >
            INFI_OS
          </motion.div>
        )}
      </AnimatePresence>
      
      {showLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative"
        >
          <svg
            className="w-12 h-12 animate-spin"
            viewBox="0 0 50 50"
          >
            <circle
              className="loading-circle"
              cx="25"
              cy="25"
              r="20"
              fill="none"
            />
          </svg>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Splash 