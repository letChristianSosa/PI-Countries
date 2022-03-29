import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import CardCountry from '../Country/Country';
import {getCountries} from '../../actions/actions'
import Paginator from '../Paginator/Paginator';
import s from './ContainerCountries.module.css';


export default function ContainerCountries() {
  // Traigo el state Countries del store de Redux
  const countries = useSelector(state => state.countries);
  // Traigo la pagina actual del store de Redux
  const actualPage = useSelector(state => state.actualPage);
  const dispatch = useDispatch();
    
  useEffect(()=>{    
    dispatch(getCountries());
  },[])
  

  return (
    <div className={`${s.container}`}>
      <div className={`${s.containerCards}`}>
        {countries.map((country, index) =>{
        if(actualPage === 1 & index <9){
          return (<CardCountry 
            key={country.id} 
            id = {country.id}
            flag={country.flag}
            code={country.code}
            name={country.name}
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
            name={country.name}
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