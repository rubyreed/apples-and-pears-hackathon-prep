import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PearShow = () => {

  const params = useParams();
  const [pear, setPear] = useState({});

useEffect(() => {
 

const getPear = async () => {
  try {
    let response = await axios.get(`/api/pears/${params.id}`);
    setPear(response.data);
  } catch (err) {
    alert("err occurred getting apple");
  }
};

getPear();
}, [params]);

return (
  <div style={styles.pear}>
    <p style={styles.check}>Check out this pear!</p>
    <p>ID: {pear.id}</p>
    <p>Variety: {pear.variety}</p>
    <p>Description: {pear.description}</p>
  </div>
);
};

const styles={
  pear:{
    textAlign:"center",
    textDecoration:"none",
    border: "5px green solid",
    margin:"10px",
    padding: "10px"
  },
  check:{
    fontSize: "1.5em"
  },
}

export default PearShow;