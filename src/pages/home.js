import React from 'react';
import HomeHeader from '../components/homeHeader';
import WhatIDoHome from '../components/whatIDoHome';
import TogetherBanner from '../components/togetherBanner';

function Welcome () {
  return (
    <div>
      <HomeHeader />
      <WhatIDoHome />
      <TogetherBanner />
    </div>
  );
}

export default Welcome;
