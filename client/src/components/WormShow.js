import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const WormShow = () => {
 
  const params = useParams();
  const [worm, setWorm] = useState({});
  console.log(params);
useEffect(() => {
 

const getWorm = async () => {
  try {
    let response = await axios.get(`/api/apples/${params.apple_id}/worms/${params.id}`);
    setWorm(response.data);
  } catch (err) {
    alert("err occurred getting worm");
  }
};

getWorm();
//params can only be here when it is not changing, good for simply projects not everything
}, [params]);

return (
  <div style={styles.worm}>
    <p style={styles.check}>Check out this worm!</p>
    <p>ID: {worm.id}</p>
    <p>Species: {worm.species}</p>
    <p>Description: {worm.description}</p>
  </div>
);
};

const styles={
  worm:{
    textAlign:"center",
    textDecoration:"none",
    border: "5px brown solid",
    margin:"10px",
    padding: "10px"
  },
  check:{
    fontSize: "1.5em"
  },
}

export default WormShow;