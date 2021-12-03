import {Link} from "react-router-dom";

const NavBar = () => {
return (
<div style={styles.navbar}>
<Link style={styles.link} to='/'>Home</Link>
<Link style={styles.link} to='/about'>About</Link>
<Link style={styles.link} to='/apples'>Apples</Link>
<Link style={styles.link} to='/pears'>Pears</Link>
</div>
);
};

const styles = {
  navbar:{
    textAlign: "center",
    border: "2px solid grey",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
  },
  link:{
    color:"blue",
    fontSize: "2em",
    padding: "30px",
    textDecoration: "none"
  }
};

export default NavBar;
