import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AppleShow = (props) => {
  const {variety, description} = props

  const params = useParams();
  const [props, setApple] = useState({});

useEffect(() => {
  getApple();
}, []);

const getApple = async () => {
  try {
    let response = await axios.get(`/api/apples/${params.id}`);
    setApple(response.data);
  } catch (err) {
    alert("err occurred getting apple");
  }
};

return (
  <div>
    <p>Apple Show Here</p>
    <p>Variety: {variety}</p>
    <p>Description: {description}</p>
  </div>
);
};

export default AppleShow;