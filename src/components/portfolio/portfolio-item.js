import React from "react";
import { Link } from "react-router-dom";

export default function (props) {
  // Data that we'll need
  // - background image: thumb_image_url
  // - logo
  // - description: description
  // - id: id
  // - Leverage destructuring(have an object, pull out the keys and automatically assign them to variables)

  const { id, description, thumb_image_url, logo } = props.item;
  return (
    <div>
      <div>{ description }</div>
      <Link to={`/portfolio/${id}`}>Link</Link>
    </div>
  );
}
