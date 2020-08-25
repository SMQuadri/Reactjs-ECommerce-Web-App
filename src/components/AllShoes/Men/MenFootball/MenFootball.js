import React from 'react';

// import './MenFootball.css';
import AllShoes_Navbar from '../../AllShoes_Navbar/AllShoes_Navbar';
import ShoeComponent from '../../ShoeComponent/ShoeComponent';
import AllShoes from '../../AllShoes.css';

import PhantomGT from './phantomGT.jpg';
import PhantomGTclub from './phantomGTclub.jpg';
import Superfly7 from './superfly7.jpg';
import Tiempo8 from './tiempo8.jpg';
import Superfly7pro from './superfly7pro.jpg';
import Vapor13 from './vapor13.jpg';
import Vapor13mds from './vapor13mds.jpg';
import Vision2 from './vision2.jpg';
import Vapor13neymar from './vapor13neymar.jpg';
import Legend8 from './legend8.jpg';

const MenFootball = () => {
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
          image={PhantomGT}
          id="500000"
          title="Nike Phantom GT Elite"
          before={300}
          after={250}
          category="Firm-Ground Football Boot"
        />
        <ShoeComponent 
          image={PhantomGTclub}
          id="500001"
          title="Nike Phantom GT Club"
          before={70}
          after={60}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent 
          image={Superfly7}
          id="500002"
          title="Nike Mercurial Superfly 7"
          before={320}
          after={320}
          category="Firm-Ground Football Boot"
        />
        <ShoeComponent 
          image={Tiempo8}
          id="500003"
          title="Nike Tiempo Legend 8"
          before={90}
          after={60}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent 
          image={Superfly7pro}
          id="500004"
          title="Nike Mercurial Superfly 7 Pro"
          before={200}
          after={175}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent 
          image={Vapor13}
          id="500005"
          title="Nike Mercurial Vapor 13"
          before={55}
          after={55}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent 
          image={Vapor13mds}
          id="500006"
          title="Nike Vapor 13 MDS"
          before={70}
          after={60}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent 
          image={Vision2}
          id="500007"
          title="Nike Max ALpha Trainer 2"
          before={100}
          after={100}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent 
          image={Vapor13neymar}
          id="500008"
          title="Nike Vapor 13 Neymar Jr."
          before={75}
          after={60}
          category="Artificial-Turf Football Shoe"
        />
        <ShoeComponent 
          image={Legend8}
          id="500009"
          title="Nike Legend 8 Academy"
          before={85}
          after={85}
          category="Artificial-Turf Football Shoe"
        />
      </div>
    </div>
  );
}

export default MenFootball;