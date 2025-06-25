import React from 'react'

function MainSection({children,customClass}) {
  return (
    <main className={`flex flex-col items-center w-full min-h-dvh md:w-3xl lg:w-5xl mx-auto px-4 md:px-0 pt-24 gap-6 md:gap-8 ${customClass}`}>
      {children}
    </main>
  )
}

export default MainSection
