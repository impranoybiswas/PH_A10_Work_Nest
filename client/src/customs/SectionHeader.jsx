import React from 'react'

import { Typewriter } from 'react-simple-typewriter'

function SectionHeader({title, subtitle, customClass}) {
  return (
    <div className={`flex flex-col justify-center items-center gap-1 my-5 text-primary ${customClass}`}>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-2">{title}</h1>
      <p className="text-sm md:text-xl text-justify opacity-60">
        <Typewriter
          words={[subtitle]}
          loop={1}
          cursor
          cursorStyle=""
          typeSpeed={60}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
    </div>
  )
}

export default SectionHeader
