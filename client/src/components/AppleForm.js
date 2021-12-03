import React, {useState} from "react";
import axios from "axios";
// import { useParams } from "react-router";

const AppleForm = (props) => {
  // const params = useParams();
  
  const {id, newestApple, updateApple, variety: initialVariety, description: initialDescription} = props
  const [varietyState, setVarietyState] = useState(initialVariety ? initialVariety : "");
  const [descriptionState, setDescriptionState] = useState(initialDescription ? initialDescription : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newApple = {variety: varietyState, description: descriptionState};

if (id) {
  let response = await axios.put(`/api/apples/${id}`, newApple);
  updateApple(response.data);
  }
else {
  let response = await axios.post("/api/apples", newApple)
  newestApple(response.data)
  };
    };

  return (
  <div style={styles.form}>
    <h1>{id ? "Update" : "New"} Apple Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Variety:</p>
        <input value = {varietyState} onChange = {(e) => setVarietyState(e.target.value)}/>
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

export default AppleForm;