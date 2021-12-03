import React, {useState} from "react";
import {Link} from "react-router-dom";
import PearForm from "./PearForm";

const Pear = (props) => {
  const [showForm, setShowForm] = useState(false);
  const {id, variety, description, updatePear} = props

const toggleForm = () => {
  setShowForm(!showForm);
};

  return (
    <div>
      <p>Variety: {variety}</p>
      <p>Description: {description}</p>
      <Link to={`/pears/${id}`}>View</Link>
      <button onClick = {toggleForm}>
        {showForm ? "Cancel" : "Update"}
      </button>
      {showForm && <PearForm id ={id} variety = {variety} description = {description} updatePear = {updatePear}/>}
    </div>
  )
};

export default Pear;