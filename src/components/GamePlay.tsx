import React from 'react';

const GamePlay = () => {
  return (
    <section
      id="playgame"
      className="relative py-8 w-full"
      style={{
        padding: '100px',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo_3.png), url(${process.env.PUBLIC_URL}/images/logo_4.png)`,
        backgroundPosition: '100px 600px, 1150px 20px',
        backgroundSize: '268px 268px, 380px 380px',
        backgroundRepeat: 'no-repeat, no-repeat',
      }}
    >
      <div className="w-full h-[1024px] relative">
        <div
          id="div1"
          className="absolute top-[40px] left-[85px] rounded-2xl w-[350px] h-[250px] bg-[#ddd] border-2 border-black opacity-80 p-10 pt-14"
        >
          <p className='text-black text-left text-2xl text-justify'>THE GAME IS AN "ON CHAIN" GAME, MEANING THE BATTLES ARE SIMULATED AND STORED ON THE SUI BLOCKCHAIN.</p>
        </div>
        <div
          id="div2"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-2xl bg-white bg-opacity-5 backdrop-blur-md w-[578px] h-[685px] p-10"
        >
          <h1 className='text-[#ff9d43] text-[64px] mt-[-20px]'>GamePlay</h1>
          <h1 className='text-[#fff] text-[94px] leading-[80px]'>
            WeCastle: 
            <br />
            Seamless Web3 Integration
          </h1>
          <p className='text-[#fff] text-[34px] leading-[34px] text-justify tracking-wide mt-[20px]'>
            Welcome to WeCastle, a real-time strategy game inspired by the challenges in the Web3 gaming space. We've noticed that starting a game in Web3 can be quite difficult due to poor user experience and the overwhelming power held by game administrators.
          </p>
        </div>
        <div
          id="div3"
          className="absolute bottom-[50px] right-[70px] rounded-2xl w-[350px] h-[250px] bg-[#ddd] opacity-60 border-2 border-black p-10"
        >
          <p className='text-black text-left text-2xl text-justify p-[20px] tracking-widest text-justify'>
            MAKING EARNING AS SIMPLE AND NATURAL AS SENDING A TEXT.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GamePlay;
