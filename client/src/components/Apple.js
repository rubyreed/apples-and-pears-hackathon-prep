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
    <div style={styles.container}>
      <p>ID: {id}</p>
      <p>Variety: {variety}</p>
      <p>Description: {description}</p>
      <Link style = {styles.link} to={`/apples/${id}`}>View</Link>
      <button onClick ={toggleForm}>
        {showForm ? "Cancel" : "Update"}
        </button>
      {showForm && <AppleForm id = {id} variety = {variety} description = {description} updateApple = {updateApple} deleteApple = {deleteApple}/>}
    <button onClick={() => deleteApple(id)}>Delete</button>
    </div>
  );
};

const styles={
  container:{
    border: "3px red solid",
    margin: "10px",
    padding: "10px"
  },
  link: {
    color:"black",
    padding: "5px",
    textDecoration: "none",
    border: "1px red solid",
    margin: "10px"
  }
};

export default Apple;