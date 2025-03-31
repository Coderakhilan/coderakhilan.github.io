import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const [text, setText] = useState('')
  const fullText = `Hello World!

I am Akhilan Vairamuthu, a Btech Computer Science Student at VIT Vellore with a strong focus on UI/UX design, Web development and Python programming. I have also worked with Data Structures & Algorithms (C, C++, Java, Python), Web data extraction in C++ and Database management (Python with MySQL), Video game multiplayer server plugins in Javascript. I am also decently skilled in Video editing.

I love blending creativity to build intuitive, visually appealing and functional digital experiences.

Outside of tech, I am a passionate follower of everything to do with cinema.

> Press spacebar to continue...`

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-terminal text-3xl leading-relaxed max-w-6xl whitespace-pre-line"
    >
      {text}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="text-4xl"
      >
        ▮
      </motion.span>
    </motion.div>
  )
}

export default About 