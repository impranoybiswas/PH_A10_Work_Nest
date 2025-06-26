import React from 'react'

export default function Offers() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full my-5"
      data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
    >
    <div>
        <img src='/assets/blogpost-bro.svg' className='w-11/12 mx-auto' alt='offers' />
    </div>
    <div>
    <img src='/assets/offers.svg' className='w-11/12 mx-auto' alt='offers' />
    </div>

    </section>
  )
}
