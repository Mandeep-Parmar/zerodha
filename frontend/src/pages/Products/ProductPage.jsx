import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductPage = () => {
  return (
    <div>
      <Hero />
      <LeftSection
        imgUrl="/media/images/kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        linkTitle1="Try Demo"
        linkTitle2="Learn More"
        googlePlay="#"
        appStore="#"
      />
      <RightSection
        imgUrl="/media/images/console.png"
        title="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        linkTitle1="Learn More"
      />
      <LeftSection
        imgUrl="/media/images/coin.png"
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        linkTitle1="Coin"
        googlePlay="#"
        appStore="#"
      />
      <RightSection
        imgUrl="/media/images/kiteconnect.png"
        title="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        linkTitle1="Kite Connect"
      />
      <LeftSection
        imgUrl="/media/images/varsity.png"
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="#"
        appStore="#"
      />
      <Universe />
    </div>
  );
};

export default ProductPage;
