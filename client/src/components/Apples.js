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

  const renderApples = () => {
    if (apples.length === 0) {
      return <p>No Apples</p>
    }
    return apples.map((apple) => {
      return <Apple key={apple.id}{...apple}/>;
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