import React from 'react';
import s from './LandingPage.module.css';
import { Link } from 'react-router-dom';

export default function LandingPage(){
     return (
          <div className={`${s.LandingPageContent} ${s.container}`}>
               <h1>Proyecto API <span>Countries</span></h1>
               <button className={s.button}> 
                    <Link to="/countries">Iniciar</Link>
               </button>
          </div>
     )
}
