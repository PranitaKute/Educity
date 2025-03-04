import React from 'react'
import Navbar from './components/NavBar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'

const App= () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      
      <div className="container">
        <Title subtitle ='Our Programs' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subtitle ='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle ='TESTIMONIALS' title='What Students Says'/>
      </div>
      
    </div>
  )
}

export default App
