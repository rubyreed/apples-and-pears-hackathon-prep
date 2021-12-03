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
    <div style = {styles.container}>
      <p>ID: {id}</p>
      <p>Species: {species}</p>
      <p>Description: {description}</p>
      <Link style={styles.link} to={`/apples/${apple_id}/worms/${id}`}>View</Link>
    
      <button onClick ={toggleForm}>
        {showForm ? "Cancel" : "Update"}
        </button>
        {showForm && <WormForm id = {id} species = {species} description = {description} updateWorm = {updateWorm} deleteWorm = {deleteWorm}/>}
    <button onClick={() => deleteWorm(id)}>Delete</button>
    </div>
  )
};

const styles={
  container:{
    border: "3px brown solid",
    margin: "10px",
    padding: "10px"
  },
  link: {
    color:"black",
    padding: "5px",
    textDecoration: "none",
    border: "1px brown solid",
    margin: "10px"
  }
};

export default Worm;