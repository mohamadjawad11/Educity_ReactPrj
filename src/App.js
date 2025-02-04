import './index.css';
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/hero'
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import React from 'react';
function App() {

  const[playState,setPlayState]=React.useState(false);

  

  return (
    <div className="App">

     <Navbar />
     <Hero />
     <div className='container'> 
     <Title subTitle='Our Program' title='What we Offer'/>
     <Programs />
     <About setPlayState={setPlayState}/>
     <Title subTitle='Gallery' title='Campus Photos'/>
     <Campus />
     <Title subTitle='TESTIMONIALS' title='What Students Says'/>
     <Testimonials />
     <Title subTitle='Contact Us' title='Get In Touch'/>
     <Contact />
     <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState}/>

    </div>
  );
}

export default App;
