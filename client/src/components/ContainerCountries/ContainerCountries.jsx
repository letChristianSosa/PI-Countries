import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import CardCountry from '../Country/Country';
import {getCountries, getCountryName, setContinent} from '../../actions/actions'
import Paginator from '../Paginator/Paginator';
import s from './ContainerCountries.module.css';
import searchStyle from './SearchBar.module.css';


export default function ContainerCountries() {
  // Este state guarda el nombre escrito en la barra de busqueda
  const [country, setCountry] = useState('');

  // Guarda la opcion de order seleccionado. Por defecto se usa en AZ
  const [order, setOrder] = useState('AZ');
  // const [continent, setContinent] = useState('');
  
  // Traigo el state Countries del store de Redux
  const countries = useSelector(state => state.countries);
  // Traigo el state de la pagina actual del store de Redux
  const actualPage = useSelector(state => state.actualPage);
  // Traigo el state continent del store
  const continent = useSelector(state => state.continent);

  // Uso el Hook de React-Redux useDispatch
  const dispatch = useDispatch();
    
  // Al crearse, busca todos los countries y actualiza el componente cuando se actualiza el state de country, order o continent
  // Si el state country tiene algo, se despacha la busqueda por el country escrito.
  // O busca todos los countries
  useEffect(()=>{      
    if(country){
      dispatch(getCountryName(country));
    }else{
      dispatch(getCountries(order));
    }
  },[country, order, continent]);
  
  // funcion que despacha el cambio de continente
  const cambiarContinente = (e) =>{
    dispatch(setContinent(e.target.value));
    console.log('entro?');
  }  

  return (
    
    <div className={`${s.container}`}>

      {/* Div que contiene la barra de busqueda */}
      <div className={searchStyle.container}>
              <div>
                <input onChange={(e)=> setCountry(e.target.value)} type="text" name="searchCountry" placeholder="Buscar Pais" className={searchStyle.searchBar}/>
              </div>
              <div className={searchStyle.divOptions}>
                <div>
                  <button className={searchStyle.button} onClick={()=> setOrder('AZ')}>{`A -> Z`}</button>         
                  <button className={searchStyle.button} onClick={()=> setOrder('ZA')}>{`Z -> A`}</button>         
                  <button className={searchStyle.button} onClick={()=> setOrder('PLtoH')}>Poblacion Ascendente</button>         
                  <button className={searchStyle.button} onClick={()=> setOrder('PHtoL')}>Poblacion Descendente</button>
                </div>
                <div>
                  <select onChange={cambiarContinente} name="continent" className={searchStyle.select}>
                    <option value="">Todos los Continentes</option>
                    <option value="Africa">Africa</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Oceania">Oceania</option>
                  </select>                         
                </div>

              </div>
      </div>

      {/* Div que contiene todos los countries */}
      <div className={`${s.containerCards}`}>
        {countries.length > 0 ? countries.map((country, index) =>{
        // Se crea un CardCountry por cada country en el state. Si es la pagina 1, solo muestra 9 countries
        if(actualPage === 1 & index <9){
          return (<CardCountry 
            key={country.id} 
            id = {country.id}
            flag={country.flag}
            code={country.code}
            name={country.nameSpanish}
            continent={country.continent}  
            population={country.population}      
          />)
        }
        else if(actualPage !== 1 && index >= ((actualPage-1)*10)-1 && (index < (actualPage*10)-1)){
          // Se crea un CardCountry por cada country en el state. Si no es la pagina 1, muestra 10 countries
          return (<CardCountry 
            key={country.id} 
            id = {country.id}
            flag={country.flag}
            code={country.code}
            name={country.nameSpanish}
            continent={country.continent}  
            population={country.population}      
          />)}}): 
          <div className={s.noHay}>
            <p>No hay paises. Intenta otra busqueda.</p>
          </div>}
      </div>

      {/* Div que contiene el paginador */}
      <div>
        <Paginator countriesLength={countries.length}/>
      </div>
    </div>
  )
};