import Nav from "../navigation/Nav";
import WebAppTemplateStyles from "../webAppTemplate/WebAppTemplate.module.css"

const NotExist = () => {
  return ( 
    <>
    {/* <header className={WebAppTemplateStyles.header}>
        <Nav/>
      </header> */}
    <div>
      <h2>The specified page does not exist</h2>
    </div>
    <div><Nav/></div>
    </>
   );
}
 
export default NotExist;