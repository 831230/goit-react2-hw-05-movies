import { startTransition } from "react";
import { useNavigate } from "react-router-dom";
import NotExistStyles from "./NotExist.module.css";

const NotExist = () => {
  const navigate = useNavigate();

  const handleNavigate = (evt) => {
    const navString = evt.target.innerText==="home"?"":evt.target.innerText;
    startTransition(()=>{
      navigate(`/${navString}`)
    })
    
  }

  return ( 
    <div className={NotExistStyles.notExistContainer}>
      <div>
        <h2 className={NotExistStyles.header}>The specified page does not exist</h2>
      </div>
      <h3>Go to</h3>
      <div className={NotExistStyles.btnContainer}>
        <button className={NotExistStyles.button} type="button" onClick={handleNavigate}>home</button>
        <button className={NotExistStyles.button} onClick={handleNavigate}>movies</button>
      </div>
    </div>
   );
}
 
export default NotExist;