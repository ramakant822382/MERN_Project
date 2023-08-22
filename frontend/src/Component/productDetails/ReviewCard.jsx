import { Rating } from "@material-ui/lab";
import React from "react";
import ProfilePng from "../../images/Profile.png";

const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
    edit: false,
    isHalf: true,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
  };

  return (
    <div className="reviewCard">
      <img src={ProfilePng} alt="User" />
      <p>{review.name}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
