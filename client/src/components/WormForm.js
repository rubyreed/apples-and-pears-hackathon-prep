import React, {useState} from "react";
import axios from "axios";
import { useParams } from "react-router";

const WormForm = (props) => {
  const params = useParams();
  const {id, newestWorm, updateWorm, species:initialSpecies, description:initialDescription} = props
  const [speciesState, setSpeciesState] = useState(initialSpecies ? initialSpecies : "");
  const [descriptionState, setDescriptionState] = useState(initialDescription ? initialDescription : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWorm = {species: speciesState, description: descriptionState};

if (id) {
  let response = await axios.put(`/api/apples/${params.id}/worms/${id}`, newWorm);
    updateWorm(response.data);
}
  else {
    let response = await axios.post(`/api/apples/${params.id}/worms/`, newWorm);
    newestWorm(response.data)
};
  };

  return (
  <div style={styles.form}>
    <h1>{id ? "Update" : "New"} Worm Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Species:</p>
        <input value = {speciesState} onChange = {(e) => setSpeciesState(e.target.value)}/>
        <p>Description:</p>
        <input value = {descriptionState} onChange = {(e) => setDescriptionState(e.target.value)}/>
       <br/>
        <button style={styles.button}>{id ? "Update" : "Create"}</button>
      </form>
  </div>
  );
};

const styles = {
  form: {
    border: "3px solid blue",
    margin: "5px",
    padding: "5px"
  },
  button: {
    margin:"10px",
     }
};

export default WormForm;