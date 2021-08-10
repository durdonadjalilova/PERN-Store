import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="mt-3 text-secondary" id="homepage">
        Welcome To PERN Famous Footwear!
      </h1>
      <span id="main">
        <Link to={`/shoes`}>
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0d9e485f-bc09-4686-a53b-87afd15968ee/air-jordan-1-mid-shoe-nwV1GK.png"
            alt="shoes"
          />
          <img
            src="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-ultimate-pump--ALUE3JSC02_PM2_Front%20view.png?wid=656&hei=656"
            alt="shoes"
          />
          <img
            src="https://media.gucci.com/style/DarkGray_South_0_160_470x470/1623087013/661301_2SH80_9062_001_100_0000_Light-Mens-Gucci-Basket-sneaker.jpg"
            alt="shoes"
          />
        </Link>
      </span>
    </div>
  );
};

export default Home;
