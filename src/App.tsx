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
    <div ref={ref} className=' h-screen w-screen font-MyFont overflow-x-hidden overflow-y-auto snap-y scroll-smooth '>
      <Navbar scrollY={scrollY}/>
      <div className='fixed right-0 w-screen -z-10 h-[60vh] overflow-hidden'>
        <Head scrollY={scrollY}/>
      </div>
      <section id='top' className=' min-h-screen w-screen relative snap-start'>
        <div className="w-full text-center absolute bottom-[20%] lg:bottom-[10%] left-[50%] translate-x-[-50%] ">
          <div className="top">你好</div>
          <div className="top">我是林子捷</div>
        </div>
      </section>
      <section id='about' className=' w-screen  snap-start'>
        <About scrollY={scrollY}/>
      </section>
      <section id='skills' className=' w-screen snap-start'>
        <Skill />
      </section>
      <section id='works' className=' w-screen snap-start'>
        <Works scrollY={scrollY}/>
      </section>
      <section id='contect' className='w-screen snap-start'>
        <Contect />
      </section>
      <style>@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;600;700;900&display=swap');</style>
    </div>
  );
}

export default App;
