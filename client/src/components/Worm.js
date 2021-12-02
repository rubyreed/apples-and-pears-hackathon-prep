import React from "react";
import {Link} from "react-router-dom";

const Worm = (props) => {
  const {apple_id, id, species, description} = props
  return (
    <div>
      <p>Species: {species}</p>
      <p>Description: {description}</p>
      <Link to={`/apples/${apple_id}/worms/${id}`}>View</Link>
    </div>
  )
};

export default Worm;