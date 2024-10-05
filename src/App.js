import React from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import About from './components/About.tsx';
import Feature from './components/Feature.tsx';
import Hero from './components/Hero.tsx';
import Video from './components/Video.tsx';
import GamePlay from './components/GamePlay.tsx';

const App = () => {
  return (
    <div className="font-vt323 bg-[#222] ">
      <Header />
      <main className=' flex flex-col gap-[100px] mt-[150px]'>
        <Video />
        <About />
        <GamePlay />
        <Hero />
        <Feature />
      </main>
      <Footer />
    </div>
  );
};

export default App;
