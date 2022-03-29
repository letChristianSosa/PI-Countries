import {} from '../actions/actions'

const initialState = {
     country: [],
     countries: [],
     activities: [],
     actualPage: 1
}

export default function reducer(state = initialState, action){
     switch(action.type){
          case "GET_ALL_COUNTRIES":
               return {
                    ...state,
                    countries: action.payload
               }
          case "GET_ALL_ACTIVITIES":
               return {
                    ...state,
                    activities: action.payload
          }
          case "GET_COUNTRY":
               return {
                    ...state,
                    country: action.payload
               }
          case "CHANGE_PAGE":
               return {
                    ...state,
                    actualPage: action.payload
               }
          default:
               return {
                    ...state
               }
     }
}