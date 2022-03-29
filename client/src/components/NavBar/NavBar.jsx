import React from "react"
import { Link } from "react-router-dom";
import s from './NavBar.module.css';

export default function Nav(){
     return(
          <div className={`${s.navBar} ${s.navBarBg}`}>
               <div className={`${s.container} ${s.navBarDiv}`}>
                    <div>
                         <Link to="/">Countries <span>API</span></Link>
                    </div>
                    <div className={`${s.links}`}>
                         <Link to="/countries"><span>Paises</span></Link>
                         <Link to="/addActivity">Agregar Actividad</Link>
                    </div>
               </div>
          </div>
     )
}