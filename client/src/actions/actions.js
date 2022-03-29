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

export function receiveCountry(country){
     return {
          type: 'GET_COUNTRY',
          payload: country
     }
}

export function receiveActivities(activities){
     return {
          type: 'GET_ALL_ACTIVITIES',
          payload: activities
     }
}

export function getCountries(){
     return function(dispatch){
          axios.get('http://localhost:3001/countries')
          .then(r => r.data)
          .then(r => dispatch(receiveCountries(r)))
          .catch(e => console.log(e));
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
          axios.get(`http://localhost:3001/countries/${name}`)
          .then(r => r.data)
          .then(r => dispatch(receiveCountry(r)))
          .catch(e => console.log(e));
     }
}

export function getCountryId(id){
     return function(dispatch){
          axios.get(`http://localhost:3001/countries/${id}`)
          .then(r => r.data)
          .then(r => dispatch(receiveCountry(r)))
          .catch(e => console.log(e));
     }
}