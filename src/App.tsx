import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Contect from './components/Contect/Contect';
import Works from './components/Works/Works';
import { useScroll } from 'framer-motion';
import Head from './components/Head/Head';
import Navbar from './components/Navbar/Navbar';

function App() {
  const ref = useRef(null)
  const {scrollY} = useScroll({container:ref})

  return (
    <div ref={ref} className=' h-screen font-MyFont overflow-auto snap-y scroll-smooth'>
      <Navbar scrollY={scrollY}/>
      <div className='fixed right-0 w-screen -z-10 h-[60vh] overflow-hidden'>
        <Head scrollY={scrollY}/>
      </div>
      <section id='top' className=' h-screen w-screen relative '>
        <div className="text-center absolute bottom-[10%] left-[50%] translate-x-[-50%] ">
          <div className="top">你好</div>
          <div className="top">我是林子捷</div>
        </div>
      </section>
      <section id='about' className=' h-screen w-screen '>
        <About scrollY={scrollY}/>
      </section>
      <section id='skills' className=' h-screen w-screen snap-center'>
        <Skill />
      </section>
      <section id='works' className=' h-screen w-screen snap-center'>
        <Works scrollY={scrollY}/>
      </section>
      <section id='contect' className=' h-screen w-screen snap-center'>
        <Contect />
      </section>
      <style>@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;600;700;900&display=swap');</style>
    </div>
  );
}

export default App;
