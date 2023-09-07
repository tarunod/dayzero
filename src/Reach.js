import React from "react";
import "./reach.css";
import AOS from "aos";
import "aos/dist/aos.css";
import tick from "./aseets/download.png";

import CountUp from "react-countup";

const Reach = () => {
  return (
    <div>
      <div id="reach">
        <div className="left" data-aos="fade-right">
          <h3>globally serving and building in public</h3>
        </div>
        <div className="right" data-aos="fade-up">
          <div id="grid-box">
            <div className="item">
              <img src={tick} alt="" />
              <CountUp
                className="count"
                end={3695}
                start={3500}
                duration={1}
                enableScrollSpy={true}
              ></CountUp>
              <div className="label">Users</div>
            </div>
            <div className="item">
              <img src={tick} alt="" />
              <CountUp
                className="count"
                start={4000}
                end={5800}
                duration={1}
                enableScrollSpy={true}
              ></CountUp>
              <div className="label">Blueprint</div>
            </div>
            <div className="item">
              <img src={tick} alt="" />
              <CountUp
                className="count"
                start={100}
                end={156}
                duration={1}
                enableScrollSpy={true}
              ></CountUp>
              <div className="label">Upgrades</div>
            </div>
            <div className="item">
              <img src={tick} alt="" />
              <CountUp
                className="count"
                start={10}
                end={24}
                duration={1 / 2}
                enableScrollSpy={true}
              ></CountUp>
              <div className="label">Country</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reach;

AOS.init({
  offset: 0,
  duration: 1000,
});
