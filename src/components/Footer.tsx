import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white mt-8 h-[394px] ">
      <div className="divider h-[2px] bg-white">  </div>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="container text-[32px] text-center">
          CONTACT US
        </div>
        <a href="https://x.com/_longvu/" className="text-[32px] underline">
          contact@weminal.org
        </a>
        <div className="flex flex-row gap-[50px] mt-[40px]">
          <a href="https://x.com/_longvu">
            <img src={process.env.PUBLIC_URL + "/images/x-contact.png"} alt="Twitter" />
          </a>
          <a href="https://x.com/_longvu">
            <img src={process.env.PUBLIC_URL + "/images/tele-contact.png"} alt="Telegram" />
          </a>
          <a href="https://x.com/_longvu">
            <img src={process.env.PUBLIC_URL + "/images/dis-contact.png"} alt="Discord" />
          </a>
          <a href="https://x.com/_longvu">
            <img src={process.env.PUBLIC_URL + "/images/yout-contact.png"} alt="Youtube" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
