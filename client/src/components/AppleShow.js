import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const AppleShow = () => {


  const params = useParams();
  const [apple, setApple] = useState({});

useEffect(() => {
  
const getApple = async () => {
  try {
    let response = await axios.get(`/api/apples/${params.id}`);
    setApple(response.data);
  } catch (err) {
    alert("err occurred getting apple");
  }
};

getApple();
}, [params]);

return (
  <div style={styles.apple}>
    <p style={styles.check}>Check out this apple!</p>
    <p>Variety: {apple.variety}</p>
    <p style={styles.description}>Description: {apple.description}</p>
    <Link style={styles.link} to={`/apples/${params.id}/worms`}>Worms</Link>
  </div>
);
};

const styles={
  apple:{
    textAlign:"center",
    textDecoration:"none",
    border: "5px red solid",
    margin:"10px",
    padding: "40px"
  },
  link: {
    color:"brown",
    fontSize: "2em",
    padding: "5px",
    textDecoration: "none",
    border: "1px brown solid",
    margin: "5px"
  },
  check:{
    fontSize: "1.5em"
  },
  description:{
    marginBottom:"50px",
  }
};

export default AppleShow;