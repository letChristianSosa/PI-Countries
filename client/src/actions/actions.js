import axios from 'axios';

export function cambiarPagina(page){
     return{
          type: 'CHANGE_PAGE',
          payload: page
     } 
}

export function receiveCountries(countries){
     return {
          type: 'GET_ALL_COUNTRIES',
          payload: countries
     }
}

export function receiveCountryID(country){
     return {
          type: 'GET_COUNTRY_ID',
          payload: country
     }
}

export function receiveCountryName(country){
     return {
          type: 'GET_COUNTRY_NAME',
          payload: country
     }
}

export function setContinent(continent){
     return {
          type: 'SET_CONTINENT',
          payload: continent
     }
}

export function getCountries(order){
     if(order){
          return async function(dispatch){
               try {
                    const respuesta = await axios.get(`http://localhost:3001/countries/?order=${order}`);
                    const resultado = respuesta.data;
                    dispatch(receiveCountries(resultado));    
               } catch (error) {
                    console.log(error);
               }
                          
          }
     }else{
          return async function(dispatch){
               try {
                    const respuesta = await axios.get(`http://localhost:3001/countries/`)
                    const resultado = respuesta.data;
                    dispatch(receiveCountries(resultado));
               } catch (error) {
                    console.log(error);
               }
          }
     }
}

export function getCountryName(name){
     return async function(dispatch){
          try {
               const respuesta = await axios.get(`http://localhost:3001/countries/?name=${name}`)
               const resultado = respuesta.data;
               if(resultado === null || resultado.length > 1){
                    dispatch(receiveCountries(resultado))
               }else{
                    dispatch(receiveCountryName(resultado))
               }               
          } catch (error) {
               console.log(error);
          }
          
     }
}

export function getCountryId(id){
     return async function(dispatch){
          try {
               const respuesta = await axios.get(`http://localhost:3001/countries/${id}`)
               const resultado = respuesta.data;
               dispatch(receiveCountryID(resultado))
          } catch (error) {
               console.log(error);
          }
     }
}