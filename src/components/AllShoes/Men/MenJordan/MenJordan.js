import React from 'react';

// import './MenJordan.css';
import AllShoes_Navbar from '../../AllShoes_Navbar/AllShoes_Navbar';
import ShoeComponent from '../../ShoeComponent/ShoeComponent';
import AllShoes from '../../AllShoes.css';

import AirMid from './airMid.jpg';
import AirOg from './airOg.jpg';
import Jumpman from './jumpman.jpg';
import ProtoZ from './protoZ.jpg';
import Retro5 from './retro5.jpg';
import Retro14 from './retro14.jpg';
import Westbrook from './westbrook.jpg';
import Zoom92 from './zoom92.jpg';
import ZoomTrunner from './zoomTrunner.jpg';

const MenJordan = () => {
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
          image={AirMid}
          id="300000"
          title="Air Jordan 1 Mid"
          before={140}
          after={140}
          category="Air Jordan"
        />
        <ShoeComponent 
          image={AirOg}
          id="300001"
          title="Air Jordan OG"
          before={140}
          after={125}
          category="Air Jordan"
        />
        <ShoeComponent 
          image={Jumpman}
          id="300002"
          title="Jordan Jumpman 2020 PF"
          before={100}
          after={85}
          category="Air Jordan"
        />
        <ShoeComponent 
          image={ProtoZ}
          id="300003"
          title="Jordan Proto-React Z"
          before={150}
          after={130}
          category="Air Jordan"
        />
        <ShoeComponent 
          image={Retro5}
          id="300004"
          title="Air Jordan 5 Retro"
          before={230}
          after={150}
          category="Air Jordan"
        />
        <ShoeComponent 
          image={Retro14}
          id="300005"
          title="Air Jordan 14 Retro"
          before={300}
          after={180}
          category="Air Jordan"
        />
        <ShoeComponent 
          image={Westbrook}
          id="300006"
          title="Jordan Westbrook One Take"
          before={100}
          after={100}
          category="Air Jordan"
        />
        <ShoeComponent 
          image={Zoom92}
          id="300007"
          title="Jordan Zoom '92"
          before={190}
          after={160}
          category="Air Jordan"
        />
        <ShoeComponent 
          image={ZoomTrunner}
          id="300008"
          title="Jordan Zoom Trunner"
          before={180}
          after={180}
          category="Air Jordan"
        />
      </div>
    </div>
  );
}

export default MenJordan;