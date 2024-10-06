import React from "react";

const Video = () => {
  return (
    <div className="relative w-full h-[1024px] flex flex-row justify-center items-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(5px)",
        }}
      />
      <div className="relative z-10">
        <h1 className="text-[#ff9d43] text-[64px] leading-[64px] text-right mr-[150px] tracking-wide">
          WeCastle:
          <br />
          Seamless Web3
          <br />
          Integration
        </h1>
        <div className="flex flex-row items-center gap-[20px] mt-[20px] justify-center ml-[100px]">
          <a
            href="https://wecastle.vercel.app/"
            className="bg-[#FF9D43]  rounded-md h-[34px]"
          >
            <h1 className="text-black px-6 mt-1">Play now</h1>
          </a>
        </div>
      </div>
      <div className="w-[750px] h-[421.5px] bg-white rounded-2xl relative z-10">
        <iframe
          src="https://www.veed.io/embed/89df0c19-bb39-4ff0-8ffb-57b4c9697e85?watermark=0&color=blue&sharing=0&title=1"
          width="744"
          height="504"
          title="WECASTLE DEMO"
          className="w-full h-full rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
