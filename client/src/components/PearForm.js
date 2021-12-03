import React, {useState} from "react";
import axios from "axios";

const PearForm = (props) => {

  const {id, newestPear, updatePear, variety:initialVariety, description:initialDescription} = props

  const [varietyState, setVarietyState] = useState(initialVariety ? initialVariety : "");
  const [descriptionState, setDescriptionState] = useState(initialDescription ? initialDescription : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPear = {variety: varietyState, description: descriptionState};

if (id) {
  let response = await axios.put(`/api/pears/${id}`, newPear);
  updatePear(response.data);
}
else {
    let response = await axios.post("/api/pears", newPear);
    newestPear(response.data)
  };
};

  return (
  <div style={styles.form}>
    <h1>{id ? "Update" : "New"} Pear Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Variety:</p>
        <input value = {varietyState} onChange = {(e) => setVarietyState(e.target.value)}/>
        <p>Description:</p>
        <input value = {descriptionState} onChange = {(e) => setDescriptionState(e.target.value)}/>
       <br/>
        <button>{id ? "Update" : "Create"}</button>
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