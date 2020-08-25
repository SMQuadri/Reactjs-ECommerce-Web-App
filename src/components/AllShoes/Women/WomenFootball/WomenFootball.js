import React from 'react';

// import './WomenFootball.css';
import AllShoes_Navbar from '../../AllShoes_Navbar/AllShoes_Navbar';
import ShoeComponent from '../../ShoeComponent/ShoeComponent';
import AllShoes from '../../AllShoes.css';

import PhantomGT from '../../Men/MenFootball/phantomGT.jpg';
import PhantomGTclub from '../../Men/MenFootball/phantomGTclub.jpg';
import Superfly7 from '../../Men/MenFootball/superfly7.jpg';
import Tiempo8 from '../../Men/MenFootball/tiempo8.jpg';
import Superfly7pro from '../../Men/MenFootball/superfly7pro.jpg';
import Vapor13 from '../../Men/MenFootball/vapor13.jpg';
import Vapor13mds from '../../Men/MenFootball/vapor13mds.jpg';
import Vision2 from '../../Men/MenFootball/vision2.jpg';
import Vapor13neymar from '../../Men/MenFootball/vapor13neymar.jpg';
import Legend8 from '../../Men/MenFootball/legend8.jpg';

const WomenFootball = () => {
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
          image={Vapor13neymar}
          id="550000"
          title="Nike Vapor 13 Neymar Jr."
          before={75}
          after={60}
          category="Artificial-Turf Football Shoe"
        />
        <ShoeComponent 
          image={Superfly7}
          id="550001"
          title="Nike Mercurial Superfly 7"
          before={320}
          after={320}
          category="Firm-Ground Football Boot"
        />
        <ShoeComponent 
          image={PhantomGT}
          id="550002"
          title="Nike Phantom GT Elite"
          before={300}
          after={250}
          category="Firm-Ground Football Boot"
        />
        <ShoeComponent 
          image={Superfly7pro}
          id="550003"
          title="Nike Mercurial Superfly 7 Pro"
          before={200}
          after={175}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent 
          image={Vapor13}
          id="550004"
          title="Nike Mercurial Vapor 13"
          before={55}
          after={55}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent 
          image={Tiempo8}
          id="550005"
          title="Nike Tiempo Legend 8"
          before={90}
          after={60}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent 
          image={Vapor13mds}
          id="550006"
          title="Nike Vapor 13 MDS"
          before={70}
          after={60}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent 
          image={PhantomGTclub}
          id="550007"
          title="Nike Phantom GT Club"
          before={70}
          after={60}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent 
          image={Vision2}
          id="550008"
          title="Nike Max ALpha Trainer 2"
          before={100}
          after={100}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent 
          image={Legend8}
          id="550009"
          title="Nike Legend 8 Academy"
          before={85}
          after={85}
          category="Artificial-Turf Football Shoe"
        />
      </div>
    </div>
  );
}

export default WomenFootball;