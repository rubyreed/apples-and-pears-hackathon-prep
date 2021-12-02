const About = () => {
  return(
    <div>
      <h1 style={styles.header}>About</h1>
      <h2 style={styles.info}>I have a massive orchard with both apples and pears. The apples have many worms unfortunately.</h2>
    </div>
  );
};

const styles = {

  header:{
    textAlign:"center",
    fontSize:"4em",
  },
  info:{
    textAlign:"center",
  }
};



export default About;