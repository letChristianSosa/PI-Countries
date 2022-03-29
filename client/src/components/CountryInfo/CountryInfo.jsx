import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useParams, Link } from 'react-router-dom';
import {getCountryId} from '../../actions/actions'
import s from './CountryInfo.module.css';

export default function CountryInfo(){
     const {id} = useParams();
     const country = useSelector(state => state.country);
     const dispatch = useDispatch();

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
               </div>
                    <button className={s.button}>
                         <Link to="/countries">Volver</Link>
                    </button>
          </div>
     )
}