import React from 'react';
import Footer from '../Share/Footer';
import Banner from './Banner';
import HappyClient from './HappyClient';
import HomePeart2 from './HomePeart2/HomePeart2';
import OurCloths from './Our Cloths/OurCloths';
import PaymentIcon from './PaymentIcon';
import Video from './Video/Video';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
  return (
    <div className=" text-white">
      <div className="mx-7 pb-7 grid grid-cols-2 gap-10">
        <HomePeart2/>
        <Banner />
      </div>
      <OurCloths />
      <WhyChooseUs />
      <Video/>
      {/* <Services /> */}
      {/* <Advertisement /> */}
      {/* <OurServices /> */}
      <HappyClient />
      <PaymentIcon />
      <Footer />
    </div>
  );
};

export default Home;
