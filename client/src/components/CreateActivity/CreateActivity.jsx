import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getCountries, setContinent} from '../../actions/actions'
import axios from 'axios';
import s from './CreateActivity.module.css'

export default function CreateActivity(){
     const [error, setError] = useState('Completa los datos');
     const [activity, setInputActivity] = useState({
          idCountries: [],
          name: '',
          difficulty: '',
          duration: '',
          season: '',
     })

     const countries = useSelector(state => state.countries);
     const dispatch = useDispatch();

     useEffect(()=>{
          console.log(activity);
          dispatch(getCountries());
          dispatch(setContinent(''));
          setInputActivity({
               idCountries: [],
               name: '',
               difficulty: '',
               duration: '',
               season: '',
          })
     },[])

     useEffect(()=>{
          if(activity.idCountries.length > 0 && activity.name !== '' && activity.difficulty !== '' && activity.duration !== '' && activity.season !== ''){
               setError('');
               console.log(activity);
     }
     },[activity, error])

     useEffect(()=>{}, [activity]);

     
     function handlerOnChange(e){
          setInputActivity({
               ...activity,
               [e.target.name]: e.target.value,
          })          
     };

     function pushPais(e){
          let value = e.target.value;
          const aux = activity.idCountries;
          aux.push(value);
          setInputActivity({
               ...activity,
               idCountries: aux
          })
     }

     function eliminarCountry(e){
          let Eliminarid = e.target.value;
          let aux = activity.idCountries.filter(id => id !== Eliminarid) 
          setInputActivity({
               ...activity,
               idCountries: aux
          });
     };
     

     async function handlerSubmit(e){
          e.preventDefault();
          
          await axios.post('http://localhost:3001/activity/', activity);
          setInputActivity({
               idCountries: [],
               name: '',
               difficulty: '',
               duration: '',
               season: '',
          })
     }

     return (
     <div className={s.container}>
          <h1>
               Crear Actividad
          </h1>

          <form onSubmit={handlerSubmit} className={s.formulario}>
               {/* <div> */}
                    <label>Nombre</label>
                    <input 
                         
                         type="text" 
                         placeholder="Nombre de la actividad" 
                         name="name"
                         onChange={handlerOnChange}
                         value={activity.name}
                    />
               {/* </div> */}

               {/* <div> */}
                    <label>Dificultad</label>
                    <select name="difficulty" onChange={handlerOnChange} value={activity.difficulty}>
                         <option value="">Elige una dificultad</option>
                         <option value="1">1</option>
                         <option value="2">2</option>
                         <option value="3">3</option>
                         <option value="4">4</option>
                         <option value="5">5</option>
                    </select>
               {/* </div> */}

               {/* <div> */}
                    <label>Duracion</label>
                    <input type="text" onChange={handlerOnChange} placeholder="Escribe en este formato hh:mm:ss" name="duration" value={activity.duration}/>    
               {/* </div> */}

               {/* <div> */}
                    <label>Temporada</label>
                    <select name="season" onChange={handlerOnChange} value={activity.season}>
                         <option value="">Elige una temporada</option>
                         <option value="winter">Invierno</option>
                         <option value="spring">Primavera</option>
                         <option value="summer">Verano</option>
                         <option value="autumm">Otono</option>
                    </select>
               {/* </div> */}

               {/* <div> */}
                    <label>Pais</label>
                    <select name="idCountries" onChange={pushPais} value=''>
                         <option value="">Selecciona un pais</option>
                         {countries.map(country => {
                              return <option key={country.id} value={country.id}>{country.nameSpanish}</option>
                         })}                                               
                    </select>
               {/* </div> */}

               <div className={s.seleccionadosDiv}>
                    <h3>Seleccionados</h3>
                    <div className={s.seleccionados}>
                         {activity.idCountries.length>0 ? countries.map(country => {
                              // console.log(country.id);
                              if(activity.idCountries.includes((country.id).toString())){
                                   console.log(activity);
                                   return (        
                                        <div key={country.id} className={s.seleccionado}>
                                             <p>{country.name}</p>
                                             <button value={country.id} onClick={eliminarCountry}>x</button>
                                        </div>                           
                                   )
                              }else{
                                   return;
                              }
                         }) : []}   
                    </div>
               </div>
               {error ? <div className={s.divError}><p>{error}</p></div> : <input type="submit" value="Registrar actividad" className={s.submit}/>}
               
          </form>
     </div>
     )  
}
