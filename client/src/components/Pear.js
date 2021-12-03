import React, {useState} from "react";
import {Link} from "react-router-dom";
import PearForm from "./PearForm";

const Pear = (props) => {
  const [showForm, setShowForm] = useState(false);
  const {id, variety, description, updatePear, deletePear} = props

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
      {showForm && <PearForm id ={id} variety = {variety} description = {description} updatePear = {updatePear} deletePear={deletePear}/>}
    <button onClick={() => deletePear(id)}>Delete</button>
    </div>
  )
};

export default Pear;