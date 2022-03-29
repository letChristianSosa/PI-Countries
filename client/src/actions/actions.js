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

export function receiveActivities(activities){
     return {
          type: 'GET_ALL_ACTIVITIES',
          payload: activities
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
          return function(dispatch){
               axios.get(`http://localhost:3001/countries/?order=${order}`)
               .then(r => r.data)
               .then(r => dispatch(receiveCountries(r)))
               .catch(e => console.log(e));
          }
     }else{
          return function(dispatch){
               axios.get(`http://localhost:3001/countries/`)
               .then(r => r.data)
               .then(r => dispatch(receiveCountries(r)))
               .catch(e => console.log(e));
          }
     }
}

export function getActivities(){
     return function(dispatch){
          axios.get('http://localhost:3001/activities')
          .then(r => r.data)
          .then(r => dispatch(receiveActivities(r)))
          .catch(e => console.log(e));
     }
}

export function getCountryName(name){
     return function(dispatch){
          axios.get(`http://localhost:3001/countries/?name=${name}`)
          .then(r => r.data)
          .then(r => {
               if(r === null || r.length > 1){
                    dispatch(receiveCountries(r))
               }else{
                    dispatch(receiveCountryName(r))
               }
          })
          .catch(e => console.log(e));
     }
}

export function getCountryId(id){
     return function(dispatch){
          axios.get(`http://localhost:3001/countries/${id}`)
          .then(r => r.data)
          .then(r => dispatch(receiveCountryID(r)))
          .catch(e => console.log(e));
     }
}