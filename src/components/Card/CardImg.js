import React from "react";

const CardImg = ({ apod }) => {
  return (
    <div className='card--img'>
      <img src={apod.url} alt='astronomy pic of the day' />
    </div>
  );
};

export default CardImg;
