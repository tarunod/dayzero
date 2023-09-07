import React from "react";
import "./card.css";
import CardData from "./CardData";
import tick from "./aseets/download.png";

const Cards = () => {
  return (
    <>
      <div id="main">
        <div className="headings" id="head">
          <p data-aos="fade-down">use it like a</p>
          <h2 data-aos="fade-down">pro, starts at $499</h2>
          <p
            data-aos="fade-in"
            className="fade-in-on-scroll"
            data-aos-duration="2000"
          >
            Get started with DayZero for free. Upgrade for unlocking services,
            <br></br>
            expert guidance, and additional features
          </p>
        </div>
        <div id="plans">
          {CardData.map((data, id) => (
            <div
              className="card"
              data-aos="fade-down"
              data-aos-delay={(id + 1) * 200}
              key={id}
            >
              {id === 1 && (
                <div className="offer">
                  <span className="offertext">{data.offer}</span>
                  <span>{data.recommend}</span>
                </div>
              )}
              <h1 className="name">{data.name}</h1>
              <h2 className="vision">{data.vision}</h2>

              <div
                className={`price ${
                  id === 1
                    ? "oldprice-card-1"
                    : id === 2
                    ? "oldprice-card-2"
                    : ""
                }`}
              >
                <strike>{data.oldprice}</strike>
                <span>{data.newprice}</span>
              </div>
              <span className="divider"></span>
              <div className="pfeature">
                {data.features.map((feature, id) => (
                  <div className="feature" key={id}>
                    <img id="tick" src={tick} alt="" />
                    <span className="fwords">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="end">
                <span className="divider d2"></span>
                <button className="btn" id="btn">
                  {data.btntxt}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
