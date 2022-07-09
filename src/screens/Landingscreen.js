import React from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration:'2000'
});
function Landingscreen() {
  return (
    
      <div className="landing row justify-content-center text-center">
        <div className="col-md-9 my-auto" >
          <h2 style={{ color: "blue", fontSize: "130px" }} data-aos='zoom-in'>KLM Rooms</h2>
          {/* <h1 style={{ color: "green"}} data-aos='zoom-out' >“There is only one boss. The Guest.</h1> */}
          <Link to="/home">
             <button className='btn1'>Get Started {">>"}</button>
          </Link>
        </div>

        
        
      </div>
     

  );
}

export default Landingscreen;