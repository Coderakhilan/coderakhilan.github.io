import { motion } from 'framer-motion'

const Contact = () => {
  const contactInfo = [
    { label: 'NAME', value: 'Akhilan Vairamuthu' },
    { label: 'EMAIL', value: 'akhilanvairam@gmail.com' },
    { label: 'GITHUB', value: '@https://github.com/coderakhilan', isLink: true },
    { label: 'LINKEDIN', value: '@https://www.linkedin.com/in/akhilan-vairamuthu-2381a1275/', isLink: true }
  ]

  return (
    <div className="max-w-5xl">
      <h2 className="text-4xl mb-12">{'>_'} CONTACT_INFO</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-10 text-2xl"
      >
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-terminal-blue p-8"
          >
            <span className="opacity-80">{'>_'} {info.label}: </span>
            {info.isLink ? (
              <a
                href={info.value.replace('@', '')}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity underline"
              >
                {info.value}
              </a>
            ) : (
              <span>{info.value}</span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Contact 