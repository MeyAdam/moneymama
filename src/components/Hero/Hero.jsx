import React from 'react'
import css from './Hero.module.css'

const Hero = () => {
  return (
    <section className={css.sectionHero} style={{backgroundColor: 'green'}}>
      <div className={css.wrapperHero}>
        <h1>Calculate how much you need to retire</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h2>
        <button type='button'>Start Now</button>
      </div>
    </section>
  )
}

export default Hero