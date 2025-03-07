import { useState } from 'react';
import React from 'react';
import Navbar from './components/NavBar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App= () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle ='Our Programs' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subtitle ='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle ='TESTIMONIALS' title='What Students Say'/>
        <Testimonials/>
        <Title subtitle ='Contact Us' title='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      
    </div>
  )
}

export default App
