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
  <div>
    <p>Apple Show Here</p>
    <p>Variety: {apple.variety}</p>
    <p>Description: {apple.description}</p>
    <Link to={`/apples/${params.id}/worms`}>Worms</Link>
  </div>
);
};

export default AppleShow;