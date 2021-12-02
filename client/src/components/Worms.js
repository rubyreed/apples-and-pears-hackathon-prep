import React, {useEffect, useState} from "react";
import axios from "axios";
import Worm from "./Worm";
import WormForm from "./WormForm";
import { useParams } from "react-router";

const Worms= () => {

  const [worms, setWorms] = useState([]);

  const params = useParams();
  console.log(params);

  useEffect(() => {

    
  const getWorms = async () => {
    let response = await axios.get(`/api/apples/${params.id}/worms`);
    setWorms(response.data)
    console.log(response.data)
  };
 
    console.log("mounted");
    getWorms();
    //params can only be here when it is not changing, good for simply projects not everything
  },[params]);

  
  const renderWorms = () => {
    if (worms.length === 0) {
      return <p>No Worms</p>
    }
    return worms.map((worm) => {
      return <Worm key={worm.id}{...worm}/>;
    });
  };

  const displayNewWorm = (worm) => {
    setWorms([worm,...worms])
  };
  
  return (
    <div style={styles.container}>
      <h1>Worms</h1>
      <WormForm newestWorm = {displayNewWorm}/>
      {renderWorms()}
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


export default Worms;