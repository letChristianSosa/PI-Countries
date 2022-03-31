// import {} from '../actions/actions'

// Se crea el estado inicial con todas sus propiedades vacias.
const initialState = {
     continent: "",
     country: [],
     countries: [],
     activities: [],
     actualPage: 1
}

export default function reducer(state = initialState, action){
     switch(action.type){
          case "GET_ALL_COUNTRIES":
               // Si el state continente no esta vacio, retorna todos los countries que coincidan con el continente
               if(state.continent !== ''){
                    return {
                         ...state,
                         actualPage: 1,
                         countries: action.payload.filter(country => country.continent === state.continent),
                    }
               }else           
               
               // Si no hay nada en el state.continent retorna todos los countries
               return {
                    ...state,
                    actualPage: 1,
                    countries: action.payload
               }
               // Retorna el country que coincida con el id
          case "GET_COUNTRY_ID":
               return {
                    ...state,
                    actualPage: 1,
                    country: action.payload
               }
               // Retorna el country que coincida con el nombre
          case "GET_COUNTRY_NAME":
                    return {
                         ...state,
                         actualPage: 1,
                         countries: action.payload
                    }
                    // Cambia la pagina actual
          case "CHANGE_PAGE":
               return {
                    ...state,
                    actualPage: action.payload
               }
               // Llena el state del continente
          case "SET_CONTINENT":
               return {
                    ...state,
                    continent: action.payload
               }
          default:
               return {
                    ...state
               }
     }
}