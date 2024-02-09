import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../navigation/Nav.jsx";

import WebAppTemplateStyles from "./WebAppTemplate.module.css"

const WebAppTemplate = () => {
  return ( 
    <>
      <header className={WebAppTemplateStyles.header}>
        <Nav/>
      </header>

      <main className={WebAppTemplateStyles.main}>
        <Suspense fallback={<div>...is loading</div>}>
          <Outlet/>
        </Suspense>
      </main>
    </>
   );
}
 
export default WebAppTemplate; 