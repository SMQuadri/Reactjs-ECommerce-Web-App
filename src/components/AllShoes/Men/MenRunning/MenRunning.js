import React from 'react';

// import './MenRunning.css';
import AllShoes_Navbar from '../../AllShoes_Navbar/AllShoes_Navbar';
import ShoeComponent from '../../ShoeComponent/ShoeComponent';
import AllShoes from '../../AllShoes.css';

import Gravity2 from './gravity2.jpg';
import Pegasus37 from './pegasus37.jpg';
import Quest2 from './quest2.jpg';
import Downshifter10 from './downshifter10.jpg';
import ReactPhantom from './reactPhantom.jpg';
import Miler from './miler.jpg';
import Revolution5 from './revolution5.jpg';

const MenRunning = () => {
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
          image={Gravity2}
          id="400000"
          title="Nike Zoom Gravity 2"
          before={110}
          after={100}
          category="Men's Running Shoe"
        />
        <ShoeComponent 
          image={Pegasus37}
          id="400001"
          title="Nike Air Zoom Pegasus 37"
          before={135}
          after={110}
          category="Men's Running Shoe"
        />
        <ShoeComponent 
          image={Quest2}
          id="400002"
          title="Nike Quest 2"
          before={80}
          after={65}
          category="Men's Running Shoe"
        />
        <ShoeComponent 
          image={Downshifter10}
          id="400003"
          title="Nike DownShifter 10"
          before={60}
          after={50}
          category="Men's Running Shoe"
        />
        <ShoeComponent 
          image={ReactPhantom}
          id="400004"
          title="Nike React Phantom Run"
          before={170}
          after={170}
          category="Men's Running Shoe"
        />
        <ShoeComponent 
          image={Miler}
          id="400005"
          title="Nike React Miler"
          before={155}
          after={120}
          category="Men's Running Shoe"
        />
        <ShoeComponent 
          image={Revolution5}
          id="400006"
          title="Nike Revolution 5"
          before={50}
          after={37}
          category="Men's Running Shoe"
        />
      </div>
    </div>
  );
}

export default MenRunning;