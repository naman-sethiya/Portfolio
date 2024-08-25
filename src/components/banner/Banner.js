import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-40 pb-40 pl-40 flex flex-col gap-20 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
    <LeftBanner/>
    <RightBanner/>
    </section>
  )
}

export default Banner