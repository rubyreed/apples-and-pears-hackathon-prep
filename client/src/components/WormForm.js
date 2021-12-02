import React, {useState} from "react";
import axios from "axios";
import { useParams } from "react-router";

const WormForm = (props) => {

  const {newestWorm} = props

  const params = useParams();

  const [speciesState, setSpeciesState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWorm = {species: speciesState, description: descriptionState};

    let response = await axios.post(`/api/apples/${params.id}/worms/`, newWorm);
    newestWorm(response.data)
  };

  return (
  <div style={styles.form}>
    <h1>Add New Worm</h1>
      <form onSubmit={handleSubmit}>
        <p>Species:</p>
        <input value = {speciesState} onChange = {(e) => setSpeciesState(e.target.value)}/>
        <p>Description:</p>
        <input value = {descriptionState} onChange = {(e) => setDescriptionState(e.target.value)}/>
       <br/>
        <button>Click to Add New Worm</button>
      </form>
  </div>
  );
};

const styles = {
  form: {
    border: "3px solid blue",
    margin: "5px",
    padding: "5px"
  }
};

export default WormForm;