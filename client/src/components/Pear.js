import React from "react";
import {Link} from "react-router-dom";

const Pear = (props) => {
  const {id, variety, description} = props
  return (
    <div>
      <p>Variety: {variety}</p>
      <p>Description: {description}</p>
      <Link to={`/pears/${id}`}>View</Link>
    </div>
  )
};

export default Pear;