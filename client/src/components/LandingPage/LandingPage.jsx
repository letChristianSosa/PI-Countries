import React from 'react';
import s from './LandingPage.module.css';
import { Link } from 'react-router-dom';

export default function LandingPage(){
     return (
          <div className={`${s.LandingPageContent} ${s.container}`}>
               <h1>Proyecto API <span>Countries</span></h1>
               <p>Proyecto para SoyHenry.</p>
               <p>App realizada con React, React-Redux, Node y Sequelize</p>
               <Link to="/countries" className={s.button}>Iniciar</Link>
          </div>
     )
}
