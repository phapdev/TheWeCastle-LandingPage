import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero1.png), url(${process.env.PUBLIC_URL}/images/hero2.png), url(${process.env.PUBLIC_URL}/images/hero3.png), url(${process.env.PUBLIC_URL}/images/hero4.png)`,
        backgroundPosition: '0 200px, 600px 100px, 400px 670px, 1250px 600px',
        backgroundSize: '300px 350px, 190px 190px, 135px 135px, 273px 273px',
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat',
      }}
    >
      <div className="h-[1024px] w-full flex flex-col pt-[100px] items-center">
        <h1 className="text-[#ff9d43] text-[64px] leading-[64px] mb-[40px] tracking-wide">
          Hero
        </h1>
        <div className="w-[1165px] h-[500px] rounded-[40px] flex justify-center items-center bg-white bg-opacity-5 backdrop-blur-sm drop-shadow-lg p-4">
          <div className="flex flex-row justify-evenly items-center gap-[180px]">
            <div>
              <h1 className="text-white text-[64px] leading-[80px] tracking-wide">The Knight</h1>
              <p className="text-white text-[36px] leading-[36px] tracking-tighter">
                Knight of the Web3 Realm, The Ultimate 
                <br/>
                Web3 Loyalty and Entertainment App.
              </p>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + "/images/hero5.png"} alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
