const About = () => {
  return(
    <div>
      <h1 style={styles.header}>About</h1>
      <h2 style={styles.info}>very interesting information about the apple/pear orchard</h2>
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