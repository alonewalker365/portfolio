import React from 'react'
import sat from '../sat.jpg'

export default function Home() {
  return (
    <div id='home'>
      <section className='about'>
      <h1>Welcome to My Portfolio</h1>
      <p>Hello! I am a Web Developer Intern</p>
      </section>
      <img src={sat} alt='my photo' className='profile'/>
      
    </div>
  )
}
