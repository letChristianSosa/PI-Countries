import React from "react";
import {Link} from 'react-router-dom'
import s from './Country.module.css';

export default function Country(props){
     const {id ,flag, name, code, continent, population} = props;


     // Componente Card que muestra los datos de su respectivo pais
     return(
          <div className={`${s.countryCard}`}>
               <div className={`${s.countryImg}`}>
                    <img src={`${flag}`} alt="flag-img" />
               </div>
               <div className={`${s.countryInfo}`}>
                    <h3>{name}</h3>
                    <p><span>Codigo: </span>{code}</p>
                    <p><span>Continente: </span>{continent}</p>
                    <p><span>Población: </span>{population}</p>
                    <Link to={`/countries/info/${id}`} className={s.button}>Mas Informacion</Link>                    

                    
               </div>
          </div>
     )
};
