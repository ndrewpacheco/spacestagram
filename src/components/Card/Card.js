import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardImg from "./CardImg";
import CardBtn from "./CardBtn";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = ({ apod, id }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleLike = (e) => {
    setIsLiked((prevLike) => !prevLike);
  };

  const handleCopy = (e) => {
    const text = `${apod.url}`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section className='card' id={id}>
      <CardImg apod={apod} />

      <section className='card--info'>
        <h1>{apod.title}</h1>
        <h3>{apod.date}</h3>
        <p>{apod.explanation}</p>
      </section>
      <CardBtn handleClick={handleLike} stateVar={isLiked} stateName='liked'>
        <FontAwesomeIcon icon={faHeart} />
      </CardBtn>

      <CardBtn handleClick={handleCopy} stateVar={isCopied} stateName='copied'>
        Copy Image Link
      </CardBtn>

      {isCopied && (
        <span className='popuptext' id='myPopup'>
          Link Copied!
        </span>
      )}
    </section>
  );
};

export default Card;
