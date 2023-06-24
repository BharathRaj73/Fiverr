import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";
import { cards } from "../../data";
import CatCard from "../catCard/CatCard";

const Slide = () => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={5} arrowsScroll={5}>
          {cards.map((card) => (
            <CatCard item={card} key={card.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
