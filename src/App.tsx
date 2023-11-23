import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Contect from './components/Contect/Contect';
import Works from './components/Works/Works';

function App() {
  return (
    <div className=' h-screen font-MyFont overflow-auto snap-y scroll-smooth'>
      <section id='top' className=' h-screen w-screen relative snap-center'>
        <div className="text-center absolute bottom-[10%] left-[50%] translate-x-[-50%] ">
          <div className="top">你好</div>
          <div className="top">我是林子捷</div>
        </div>
      </section>
      <section id='about' className=' h-screen w-screen snap-center'>
        <About />
      </section>
      <section id='skills' className=' h-screen w-screen snap-center'>
        <Skill />
      </section>
      <section id='works' className=' h-screen w-screen snap-center'>
        <Works/>
      </section>
      <section id='contect' className=' h-screen w-screen snap-center'>
        <Contect />
      </section>
      <style>@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;600;700;900&display=swap');</style>
    </div>
  );
}

export default App;
