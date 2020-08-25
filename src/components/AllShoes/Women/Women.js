import React from 'react';

import './Women.css';
import MenWomenFootwear from '../MenWomenFootwear/MenWomenFootwear';
// import AllShoes_Navbar from '../AllShoes_Navbar/AllShoes_Navbar';
import WGym from './wGym.jpg';
import WTennis from './wTennis.jpg';
import WJordan from './wJordan.jpg';
import WRunning from './wRunning.jpg';
import WFootball from './wFootball.jpg';
import WBasketball from './wBasketball.jpg';

const Women = () => {
  return (
    <div className="women">
      {/* <AllShoes_Navbar 
        title="Women's"
        pathGym="/women/gym"
        pathJordan="/women/jordan"
        pathWalking="/women/running"
        pathFootball="/women/football"
        pathAthletics="/women/tennis"
        pathBasketball="/women/basketball"
      /> */}
      .
      <div className="men__categories">
        <MenWomenFootwear 
          title="Gym Shoes"
          image={WGym}
          pathTo="/women/gym"
        />
        <MenWomenFootwear 
          title="Tennis Shoes"
          image={WTennis}
          pathTo="/women/tennis"
        />
        <MenWomenFootwear 
          title="Air Jordan"
          image={WJordan}
          pathTo="/women/jordan"
        />
        <MenWomenFootwear 
          title="Running Shoes"
          image={WRunning}
          pathTo="/women/running"
        />
        <MenWomenFootwear 
          title="Football Boots"
          image={WFootball}
          pathTo="/women/football"
        />
        <MenWomenFootwear 
          title="Basketball Shoes"
          image={WBasketball}
          pathTo="/women/basketball"
        />
      </div>
      .
    </div>
  );
}

export default Women;