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
    <div style={styles.container}>
      <p>ID: {id}</p>
      <p>Variety: {variety}</p>
      <p>Description: {description}</p>
      <Link style={styles.link}to={`/pears/${id}`}>View</Link>
      <button onClick = {toggleForm}>
        {showForm ? "Cancel" : "Update"}
      </button>
      {showForm && <PearForm id ={id} variety = {variety} description = {description} updatePear = {updatePear} deletePear={deletePear}/>}
    <button onClick={() => deletePear(id)}>Delete</button>
    </div>
  )
};

const styles={
  container:{
    border: "3px green solid",
    margin: "10px",
    padding: "10px"
  },
  link: {
    color:"black",
    padding: "5px",
    textDecoration: "none",
    border: "1px green solid",
    margin: "10px"
  }
};

export default Pear;