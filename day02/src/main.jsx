//architect
import {createRoot} from "react-dom/client"
import "./index.css"


//finding land
const root=createRoot(document.getElementById("root"))

//building

root.render(
 <div className="main">
  <div className="child">
      <h1>rulls of jsx</h1>
        <ul> 

            <li>use {} </li>
            <li> camel case</li>
            <li>every thing should be in one parent</li>
            <li>every tag must be closed ok</li>

        </ul>
  </div>
 </div>

)



/* import  {createRoot} from "react-dom/client"


//finding the land ok 
const root =createRoot(document.getElementById("root"))

//start building
root.render();
 */

