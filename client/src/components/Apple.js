import React, {useState} from "react";
import {Link} from "react-router-dom";
import AppleForm from "./AppleForm";

const Apple = (props) => {
  const [showForm, setShowForm] = useState(false);
  const {id, variety, description, updateApple} = props

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
      {showForm && <AppleForm id = {id} variety = {variety} description = {description} updateApple = {updateApple}/>}
    </div>
  );
};

export default Apple;