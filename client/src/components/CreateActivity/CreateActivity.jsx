import React from 'react'

export default function CreateActivity(){
     return (
     <div>
          <h1>
               Crear Actividad
          </h1>
          <form>
               <div>
                    <label>
                         Nombre
                    </label>
                    <input 
                         type="text" 
                         placeholder="Nombre de la actividad" 
                         name="name">             
                    </input>
               </div>
               <div>
                    <label>
                         Dificultad
                    </label>
                    <select name="difficulty">
                         <option value="">Elige una dificultad</option>
                         <option value="1">1</option>
                         <option value="2">2</option>
                         <option value="3">3</option>
                         <option value="4">4</option>
                         <option value="5">5</option>
                    </select>
               </div>
               <div>
                    <label>
                         Duracion
                    </label>
                    <input 
                         type="time" 
                         >                    
                    </input>
               </div>
               <div>
                    <label>
                         Temporada
                    </label>
                    <select name="season">
                         <option value="">Elige una temporada</option>
                         <option value="winter">Invierno</option>
                         <option value="spring">Primavera</option>
                         <option value="summer">Verano</option>
                         <option value="autumm">Otono</option>
                    </select>
               </div>
               <input type="submit" value="Registrar actividad"/>
          </form>
     </div>
     )  
}
