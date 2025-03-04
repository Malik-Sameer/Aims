import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/footer/Footer'
import VideoPlayer from './Components/videoplayer/VideoPlayer'

function App() {
    const [playState, setPlayState] = useState(false)


  return (
   <>
   <Navbar/>
   <Hero/>
   <Title subTitle="OUR PROGRAM" title="What We Offer" />
   <Programs/>
   <About setPlayState={setPlayState}/>
   <Title subTitle="Gallery" title="Campus Photos" />
   <Campus/>
   <Title subTitle="TESTIMONIALS" title="What Students Says" />
   <div className="container">
   <Testimonials/>
   </div> 
   <Title subTitle="CONTACT US" title="Get In Touch" />
   <Contact/>
   <Footer/>
   <VideoPlayer playState={playState} setPlayState={setPlayState} />
   </>
  )
}

export default App
