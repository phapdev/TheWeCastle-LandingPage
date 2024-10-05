import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="w-full"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo_1.png), url(${process.env.PUBLIC_URL}/images/logo_2.png)`,
        backgroundPosition: 'left, 800px 220px',
        backgroundSize: '600px 800px, 540px 540px',
        backgroundRepeat: 'no-repeat, no-repeat',
      }}
    >
      <div className="w-full h-[1024px] ml-[150px] flex flex-col justify-center">
        <h1 className="text-[#ff9d43] text-[64px] leading-[64px] mb-[20px] tracking-wide">
          About Us
        </h1>
        <p className="text-[#DDD] text-[36px] leading-[36px] mb-[20px] ">
          Our team, called the Weminal team,
          <br />
          created the real-time strategy game
          <br />
          called WECASTLE.
        </p>
        <p className="text-[#DDD] text-[24px] leading-[24px] tracking-wide flex flex-row gap-[10px]">
          <span>Build on The Open Network</span>
          <img src={`${process.env.PUBLIC_URL}/images/aptos_title.png`} alt="aptos_title" width={100} height={24} />
        </p>
      </div>
    </section>
  );
};

export default About;
