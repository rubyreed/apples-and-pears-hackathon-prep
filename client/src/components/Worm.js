import React, {useState} from "react";
import {Link} from "react-router-dom";
import WormForm from "./WormForm";

const Worm = (props) => {
  const [showForm, setShowForm] = useState(false);
  const {apple_id, id, species, description, deleteWorm, updateWorm} = props

const toggleForm = () => {
  setShowForm(!showForm);
};

  return (
    <div>
      <p>Species: {species}</p>
      <p>Description: {description}</p>
      <Link to={`/apples/${apple_id}/worms/${id}`}>View</Link>
      <button onClick ={toggleForm}>
        {showForm ? "Cancel" : "Update"}
        </button>
        {showForm && <WormForm id = {id} species = {species} description = {description} updateWorm = {updateWorm} deleteWorm = {deleteWorm}/>}
    <button onClick={() => deleteWorm(id)}>Delete</button>
    </div>
  )
};

export default Worm;