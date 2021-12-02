import React, {useState} from "react";
import axios from "axios";

const PearForm = (props) => {

  const {newestPear} = props

  const [varietyState, setVarietyState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPear = {variety: varietyState, description: descriptionState};

    let response = await axios.post("/api/pears", newPear);
    newestPear(response.data)
  };

  return (
  <div style={styles.form}>
    <h1>Add New Pear</h1>
      <form onSubmit={handleSubmit}>
        <p>Variety:</p>
        <input value = {varietyState} onChange = {(e) => setVarietyState(e.target.value)}/>
        <p>Description:</p>
        <input value = {descriptionState} onChange = {(e) => setDescriptionState(e.target.value)}/>
       <br/>
        <button>Click to Add New Pear</button>
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

export default PearForm;