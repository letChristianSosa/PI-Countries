import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import CardCountry from '../Country/Country';
import {getCountries, getCountryName, setContinent} from '../../actions/actions'
import Paginator from '../Paginator/Paginator';
import s from './ContainerCountries.module.css';
import searchStyle from './SearchBar.module.css';


export default function ContainerCountries() {
  const [country, setCountry] = useState('');
  const [order, setOrder] = useState('AZ');
  // const [continent, setContinent] = useState('');
  
  // Traigo el state Countries del store de Redux
  const countries = useSelector(state => state.countries);
  // Traigo la pagina actual del store de Redux
  const actualPage = useSelector(state => state.actualPage);
  const continent = useSelector(state => state.continent);
  const dispatch = useDispatch();
    
  useEffect(()=>{    
    
    if(country){
      dispatch(getCountryName(country));
    }else{
      dispatch(getCountries(order, continent));
    }
  },[country, order, continent])
  
  const cambiarContinente = (e) =>{
    dispatch(setContinent(e.target.value));
    console.log('entro?');
  }  

  return (
    
    <div className={`${s.container}`}>
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
                  <select onChange={cambiarContinente} name="continent">
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
      <div className={`${s.containerCards}`}>
        {countries.map((country, index) =>{
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
          return (<CardCountry 
            key={country.id} 
            id = {country.id}
            flag={country.flag}
            code={country.code}
            name={country.nameSpanish}
            continent={country.continent}  
            population={country.population}      
          />)}})};
      </div>
      <div>
        <Paginator countriesLength={countries.length}/>
      </div>
    </div>
  )
};