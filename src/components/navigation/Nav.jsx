import { NavLink } from "react-router-dom";
import navStyles from "./Nav.module.css"

const Nav = () => {
  return ( 
    <nav className={navStyles.nav}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/movies'>Movies</NavLink>
    </nav>
   );
}
 
export default Nav; 