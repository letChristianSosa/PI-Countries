import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useParams, Link } from 'react-router-dom';
import {getCountryId} from '../../actions/actions'
import s from './CountryInfo.module.css';

export default function CountryInfo(){
     // Hook de react-router-dom que lee los params. match.params.id
     const {id} = useParams();
     const country = useSelector(state => state.country);
     const dispatch = useDispatch();

     // Al construirse, se despacha el getCountryId( id pasado por Params)
     useEffect(()=>{    
          dispatch(getCountryId(id));
     },[])

     return(
          <div className={`${s.cardInfo}`}>
               <div>
                    <img src={`${country.flag}`} className={`${s.img}`} alt="Imagen de la bandera"/>
               </div>
               <div className={`${s.info}`}>
                    <p>Nombre: <span>{country.name}</span></p>
                    <p>Codigo: <span>{country.code}</span></p>
                    <p>Capital: <span>{country.capital}</span></p>
                    <p>Poblacion: <span>{country.population}</span></p>
                    <p>Continente: <span>{country.continent}</span></p>
                    <p>Subregion: <span>{country.subregion}</span></p>
                    <p>Area: <span>{country.area}</span></p>
                         <h3>Actividades turisticas</h3>
                    <div className={s.activities}>
                         
                         {country.Activities ? country.Activities.map(activity => {
                              return (<div key={activity.id} className={s.activity}>
                                   <p>Nombre: <span>{activity.name}</span></p>
                                   <p>Dificultad: <span>{activity.difficulty}</span></p>
                                   <p>Duracion: <span>{activity.duration}</span></p>
                                   <p>Temporada: <span>{activity.season}</span></p>
                              </div>)
                         }) : <>
                                   <p>No hay actividades</p>
                              </>}
                    </div>
               </div>
               <Link to="/countries" className={s.button}>Volver</Link>
          </div>
     )
}