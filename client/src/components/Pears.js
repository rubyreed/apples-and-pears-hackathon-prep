import React, {useEffect, useState} from "react";
import axios from "axios";
import Pear from "./Pear";
import PearForm from "./PearForm";

const Pears= () => {

  const [pears, setPears] = useState([]);

  useEffect(() => {
    console.log("mounted");
    getPears();
  },[]);

  const getPears = async () => {
    let response = await axios.get("/api/pears");
    setPears(response.data)
  };

  const updatePear = (changedPear) => {
    let updatedPears = pears.map((pear) => (pear.id === changedPear.id ? changedPear : pear));
    setPears(updatedPears)
  };

  const renderPears = () => {
    if (pears.length === 0) {
      return <p>No Pears</p>
    }
    return pears.map((pear) => {
      return <Pear key={pear.id}{...pear} updatePear={updatePear}/>;
    });
  };

  const displayNewPear = (pear) => {
    setPears([pear,...pears])
  };
  
  return (
    <div style={styles.container}>
      <h1>Pears</h1>
      <PearForm newestPear = {displayNewPear}/>
      {renderPears()}
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


export default Pears;