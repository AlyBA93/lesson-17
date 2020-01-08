import React from 'react';

import Directory from '../../components/directory/directory.component';
import CitiesSlider from '../../components/slider/slider.component';

// import './homepage.styles.scss';

import {HomepageContainer} from './homepage.styles'

const HomePage = () => (
  <HomepageContainer>
    <CitiesSlider/> 
    <Directory />
  </HomepageContainer>
);

export default HomePage;
