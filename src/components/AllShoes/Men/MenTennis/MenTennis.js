import React from 'react';

// import './MenTennis.css';
import AllShoes_Navbar from '../../AllShoes_Navbar/AllShoes_Navbar';
import ShoeComponent from '../../ShoeComponent/ShoeComponent';
import AllShoes from '../../AllShoes.css';

import Lite2 from './lite2.jpg';
import ZoomX from './zoomX.jpg';
import ZoomTurbo from './zoomTurbo.jpg';
import VaporWing from './vaporWing.jpg';
import Wildcard from './wildcard.jpg';
import Tech20 from './tech20.jpg';
import ZoomZero from './zoomZero.jpg';

const MenTennis = () => {
  return (
    <div className="allShoes">
      <AllShoes_Navbar 
        title="Men's"
        pathGym="/men/gym"
        pathJordan="/men/jordan"
        pathWalking="/men/running"
        pathFootball="/men/football"
        pathAthletics="/men/tennis"
        pathBasketball="/men/basketball"
      />
      <div className="allShoes__shoes">
        <ShoeComponent 
          image={Lite2}
          id="200000"
          title="NikeCourt Lite 2"
          before={70}
          after={55}
          category="Men's Hard Court Tennis Shoe"
        />
        <ShoeComponent 
          image={ZoomX}
          id="200001"
          title="NikeCourt Zoom Vapor X"
          before={185}
          after={150}
          category="Men's Hard Court Tennis Shoe"
        />
        <ShoeComponent 
          image={ZoomTurbo}
          id="200002"
          title="NikeCourt Air Zoom Turbo"
          before={170}
          after={170}
          category="Men's Hard Court Tennis Shoe"
        />
        <ShoeComponent 
          image={VaporWing}
          id="200003"
          title="NikeCourt Max Vapor Wing"
          before={90}
          after={65}
          category="Men's Multi-Surface Tennis Shoe"
        />
        <ShoeComponent 
          image={Wildcard}
          id="200004"
          title="NikeCourt Air Max Wildcard"
          before={110}
          after={60}
          category="Men's Tennis Shoe"
        />
        <ShoeComponent 
          image={Tech20}
          id="200005"
          title="NikeCourt Tech 20"
          before={135}
          after={100}
          category="Men's Tennis Shoe"
        />
        <ShoeComponent 
          image={ZoomZero}
          id="200006"
          title="NikeCourt Air Zoom Zero"
          before={120}
          after={100}
          category="Men's Tennis Shoe"
        />
      </div>
    </div>
  );
}

export default MenTennis;