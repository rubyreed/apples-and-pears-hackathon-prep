import React from "react";
import {Link} from "react-router-dom";

const Worm = (props) => {
  const {apple_id, id, species, description, deleteWorm} = props
  return (
    <div>
      <p>Species: {species}</p>
      <p>Description: {description}</p>
      <Link to={`/apples/${apple_id}/worms/${id}`}>View</Link>
    <button onClick={() => deleteWorm(id)}>Delete</button>
    </div>
  )
};

export default Worm;