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
  <div>
    <p>Pear Show Here</p>
    <p>Variety: {pear.variety}</p>
    <p>Description: {pear.description}</p>
  </div>
);
};

export default PearShow;