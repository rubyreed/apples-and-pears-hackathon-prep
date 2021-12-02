import React from "react";

const Home = () => {
  return(
    <div>
      <h1 style = {styles.header}>Home</h1>
      <h2 style = {styles.item}>Welcome to my Orchard!</h2>
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