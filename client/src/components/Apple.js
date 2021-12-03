import React, {useState} from "react";
import {Link} from "react-router-dom";
import AppleForm from "./AppleForm";

const Apple = (props) => {
  const [showForm, setShowForm] = useState(false);
  const {id, variety, description, updateApple, deleteApple} = props

const toggleForm = () => {
  setShowForm(!showForm);
};

  return (
    <div>
      <p>ID:{id}</p>
      <p>Variety: {variety}</p>
      <p>Description: {description}</p>
      <Link to={`/apples/${id}`}>View</Link>
      <button onClick ={toggleForm}>
        {showForm ? "Cancel" : "Update"}
        </button>
      {showForm && <AppleForm id = {id} variety = {variety} description = {description} updateApple = {updateApple} deleteApple = {deleteApple}/>}
    <button onClick={() => deleteApple(id)}>Delete</button>
    </div>
  );
};

export default Apple;