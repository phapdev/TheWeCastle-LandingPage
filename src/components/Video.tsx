import React from "react";

const Video = () => {
    return (
        <div className="relative w-full h-[1024px] flex flex-row justify-center items-center">
            <div className="absolute inset-0"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(5px)',
                }}
            />
            <div className="relative z-10">
                <h1 className="text-[#ff9d43] text-[64px] leading-[64px] text-right mr-[150px] tracking-wide">
                    WeCastle:<br />
                    Seamless Web3<br />
                    Integration
                </h1>
                <div className="flex flex-row items-center gap-[20px]">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="ml-[110px] text-white text-[24px] leading-[80px] underline">Watch video</a>
                    <button className="bg-[#FF9D43] text-black px-4 rounded-md h-[34px] w-[112px]">Play now</button>
                </div>
            </div>
            <div className="w-[720px] h-[480px] bg-white rounded-xl relative z-10">
                <video src={`${process.env.PUBLIC_URL}/video.mp4`} autoPlay loop muted className="w-full h-full rounded-xl" />
            </div>
        </div>
    )
}

export default Video;
