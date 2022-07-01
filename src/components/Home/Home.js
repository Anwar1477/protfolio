import React from 'react';

import Social from '../../Shared/Social';
import Education from './Education';
import InfoPart from './InfoPart';
import MyProject from './MyProject';
import Skills from './Skills';

const Home = () => {
  return (
    <div>
      <InfoPart></InfoPart>
      <Education></Education>
      <Skills></Skills>
      <MyProject></MyProject>
    </div>
  );
};

export default Home;
