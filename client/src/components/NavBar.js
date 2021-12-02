import {Link} from "react-router-dom";

const NavBar = () => {
return (
<div style={styles.navbar}>
<Link style={styles.link} to='/'>Apples</Link>
<Link style={styles.link} to='/about'>About</Link>
</div>
);
};

const styles = {
  navbar:{
    textAlign: "center",
    border: "2px solid grey",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
  },
  link:{
    fontSize: "2em",
    display: "inline-block",
  }
};

export default NavBar;
