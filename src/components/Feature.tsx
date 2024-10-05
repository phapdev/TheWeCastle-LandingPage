import React from 'react';

const Feature = () => {
  return (
    <section
      id="feature"
      className="w-full"
    >
      <div className="h-[1000px] w-full flex flex-col pt-[100px] items-center">
        <h1 className="text-[#ff9d43] text-[64px] leading-[64px] mb-[80px] tracking-wide">
          Feature
        </h1>
        <div className="w-[1024px] h-[500px] flex justify-center items-center flex-row gap-[40px]">
          <div className="w-[282px] h-[382px]">
            <img src={process.env.PUBLIC_URL + "/images/img-feature.png"} alt="Feature" className="object-cover rounded-2xl" />
          </div>
          <div className="w-[412px] h-[558px] bg-white rounded-2xl">

          </div>
          <div className="w-[286px] h-[388px] bg-white rounded-2xl">

          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
