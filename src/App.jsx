import { BrowserRouter, NavLink,Route,Switch } from 'react-router-dom';
import './App.css';
import Courses from './content/courses/Courses.jsx'
import DetailsCourses from './content/courses/DetailsCourses';
function App() {

  let Menu = [{class:"home",name:"Home"},
              {class:"e-learning",name:"Courses"},
              {class:"book-alt",name:"Lessons"},
              {class:"shield-interrogation",name:"Topics"},
              {class:"feather",name:"Blogs"},
              {class:"laptop",name:"Codes"},
              {class:"file",name:"Files"}];
  return (
    <BrowserRouter>
    <div className="main">
      <div className="header">
        <div>  <i className="fi fi-rr-physics"> </i> Learn web </div>
        <div> 
          <input type="text" placeholder="What are you looking for"/> 
          <i className="fi fi-rr-search"></i>
          <i className="fi fi-rr-cross-small"></i>
        </div>
        <div> <div> <i className="fi fi-rr-user"> </i> Login </div> </div>
      </div>
      <div className="menu">
        {
          Menu.map((e,i)=>
            <NavLink key={i} to={"/"+((e.name==="Home")?"":e.name.toLowerCase())} exact={(e.name==="Home")}>
              <i className={"fi fi-rr-"+e.class}></i>
              <span> {e.name} </span>
            </NavLink>
          )
        }
      </div>
      <div className="content">
       <Switch>
          <Route path="/courses" exact>
            <Courses/> 
          </Route>
          <Route path="/courses/:id" exact>
            <DetailsCourses/>
          </Route>
       </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
