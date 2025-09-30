import react from "react"
import uane_logo from "../../img/uane_logo.png"
import person_icon from "../../img/person_icon.png"
import style from "./Navbar.module.css"

function Navbar(){
 return(

  <nav className={"navbar navbar-expand-lg navbar-dark " + style.bg_nav}>
   <div className="container-fluid">
     <a className="navbar-brand" href="#">
       <img src={uane_logo} alt="uane logo" width="75" height="24"/>
     </a>

     {/* Toggle button for mobile */} 
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" > <span className="navbar-toggler-icon"></span> </button> 
     
     {/* Menu */} 
     <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
       <ul className="navbar-nav d-flex align-items-lg-center">
         <li className="nav-item"> <a className="nav-link text-white text-uppercase" href="#"> Cursos </a> </li>
         <li className="nav-item"> <a className="nav-link text-white text-uppercase" href="#"> Professores </a> </li>
         <li className="nav-item"> <a className="nav-link text-white text-uppercase" href="#"> Sobre a UANE </a> </li>
         <li className="nav-item"> <a className="nav-link text-white text-uppercase" href="#"> Parcerias </a> </li>
         <li className="nav-item"> <a className="nav-link text-white text-uppercase d-flex align-items-center" href="#"> 
	  <img className="me-2"  src={person_icon} width="24" height="24" />
	 Portal do Aluno </a> </li>
       </ul>
     </div>

   </div>
  </nav>

 );
}

export default Navbar;
