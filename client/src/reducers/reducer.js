import {} from '../actions/actions'

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
               if(state.continent !== ''){
                    return {
                         ...state,
                         actualPage: 1,
                         countries: action.payload.filter(country => country.continent === state.continent),
                    }
               }else               
               return {
                    ...state,
                    actualPage: 1,
                    countries: action.payload
               }
          case "GET_ALL_ACTIVITIES":
               return {
                    ...state,
                    activities: action.payload
          }
          case "GET_COUNTRY_ID":
               return {
                    ...state,
                    actualPage: 1,
                    country: action.payload
               }
          case "GET_COUNTRY_NAME":
                    return {
                         ...state,
                         actualPage: 1,
                         countries: action.payload
                    }
          case "CHANGE_PAGE":
               return {
                    ...state,
                    actualPage: action.payload
               }
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