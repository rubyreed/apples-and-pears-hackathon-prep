import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return(
    <div>
      <h1 style = {styles.header}>Home</h1>
      <h2 style = {styles.item}>Lots of interesting information about apples and pears here</h2>
    </div>
  )
}

const styles = {
  header:{
    textAlign: "center",
    fontSize: "4em",
  },
  item:{
    textAlign:"center",
  }
};

export default Home;