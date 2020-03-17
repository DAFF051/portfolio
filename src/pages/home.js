import React from 'react';
import HomeHeader from '../components/homeHeader';
import WhatIDoHome from '../components/whatIDoHome';
import TogetherBanner from '../components/togetherBanner';

function Home () {
  return (
    <div>
      <HomeHeader />
      <WhatIDoHome />
      <TogetherBanner />
    </div>
  );
}

export default Home;
