import React from 'react';

// import './WomenRunning.css';
import AllShoes_Navbar from '../../AllShoes_Navbar/AllShoes_Navbar';
import ShoeComponent from '../../ShoeComponent/ShoeComponent';
import AllShoes from '../../AllShoes.css';

import Pegasus37 from './pegasus37.jpg';
import Fly3 from './fly3.jpg';
import InfinityRun from './infinityRun.jpg';
import AllDay from './allDay.jpg';
import PhantomRun from './phantomRun.jpg';
import React3 from './react3.jpg';
import Flex8 from './flex8.jpg';

const WomenRunning = () => {
  return (
    <div className="allShoes">
      <AllShoes_Navbar 
        title="Women's"
        pathGym="/women/gym"
        pathJordan="/women/jordan"
        pathWalking="/women/running"
        pathFootball="/women/football"
        pathAthletics="/women/tennis"
        pathBasketball="/women/basketball"
      />
      <div className="allShoes__shoes">
        <ShoeComponent 
          image={Pegasus37}
          id="440000"
          title="Nike Air Zoom Pegasus 37"
          before={130}
          after={100}
          category="Women's Running Shoe"
        />
        <ShoeComponent 
          image={Fly3}
          id="440001"
          title="Nike Zoom Fly 3"
          before={210}
          after={170}
          category="Women's Running Shoe"
        />
        <ShoeComponent 
          image={InfinityRun}
          id="440002"
          title="Nike React Infinity Run"
          before={190}
          after={165}
          category="Women's Running Shoe"
        />
        <ShoeComponent 
          image={AllDay}
          id="440003"
          title="Nike Run All Day 2"
          before={75}
          after={50}
          category="Women's Running Shoe"
        />
        <ShoeComponent 
          image={PhantomRun}
          id="440004"
          title="Nike React Phantom Run"
          before={170}
          after={170}
          category="Women's Running Shoe"
        />
        <ShoeComponent 
          image={React3}
          id="440005"
          title="Nike Legend React 3"
          before={115}
          after={90}
          category="Women's Running Shoe"
        />
        <ShoeComponent 
          image={Flex8}
          id="440006"
          title="Nike Flex Experience RN 8"
          before={55}
          after={40}
          category="Women's Running Shoe"
        />
      </div>
    </div>
  );
}

export default WomenRunning;