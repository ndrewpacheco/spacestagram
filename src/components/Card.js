import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = ({ apod }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e) => {
    setIsLiked((prevLike) => !prevLike);
  };

  const handleShare = () => {
    const text = `${apod.url}`;

    function updateClipboard(newClip) {
      navigator.clipboard.writeText(newClip).then(
        function () {
          /* clipboard successfully set */
          alert("Copied image link!");
        },
        function () {
          /* clipboard write failed */
          alert("Did not copy, try again?");
        }
      );
    }
    updateClipboard(text);

    // navigator.clipboard.writeText(text.toString());
    // navigator.clipboard.writeText("hi");
    // alert("Copied the text: " + text.toString());
  };

  return (
    <div className='card'>
      <img
        src={apod.url}
        alt='astronomy pic of the day'
        className='card--img'
      />
      <div className='card--info'>
        <h1>{apod.title}</h1>
        <h3>{apod.date}</h3>
        <p>{apod.explanation}</p>
      </div>
      <button
        onClick={handleLike}
        className={isLiked ? "button liked" : "button"}
      >
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <button onClick={handleShare} className='button'>
        Share Image
      </button>
    </div>
  );
};

export default Card;
