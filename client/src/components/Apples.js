import React, {useEffect, useState} from "react";
import axios from "axios";
import Apple from "./Apple";
import AppleForm from "./AppleForm";

const Apples= () => {

  const [apples, setApples] = useState([]);

  useEffect(() => {
    console.log("apples mounted");
    getApples();
  },[]);

  const getApples = async () => {
    let response = await axios.get("/api/apples");
    setApples(response.data)
  };

  const updateApple = (changedApple) => {
    let updatedApples = apples.map((apple) => (apple.id === changedApple.id ? changedApple : apple));
  setApples(updatedApples)
  };

  const deleteApple = async (id) => {
    let response = await axios.delete(`/api/apples/${id}`);
    let filteredApples = apples.filter((apple) => apple.id !== id);
    setApples(filteredApples);
  };

  const renderApples = () => {
    if (apples.length === 0) {
      return <p>No Apples</p>
    }
    return apples.map((apple) => {
      return <Apple key={apple.id}{...apple} updateApple={updateApple} deleteApple={deleteApple}/>;
    });
  };

  const displayNewApple = (apple) => {
    setApples([apple,...apples])
  };
  
return (
<div style={styles.container}>
  <h1>Apples</h1>
  <AppleForm newestApple = {displayNewApple}/>
  {renderApples()}
</div>
);
};

const styles = {
  container: {
    border: "5px solid black",
    margin: "5px",
    padding: "5px"
  }
};


export default Apples;