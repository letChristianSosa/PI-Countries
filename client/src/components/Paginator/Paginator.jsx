import React from 'react';
import {cambiarPagina} from '../../actions/actions';
import {useDispatch, useSelector} from 'react-redux'
import s from './Paginator.module.css'

export default function Paginator({countriesLength}){

     const pagina = useSelector(state => state.actualPage);

     const dispatch = useDispatch();

     const paginas = [];
     // if(countriesLength === 250){
     //      for(let i = 1; i<=Math.ceil(countriesLength/10)+1;i++){
     //           paginas.push(i);
     //      }   
     // }else{
     //      for(let i = 1; i<=Math.ceil(countriesLength/10);i++){
     //           paginas.push(i);
     //      }   
     // }

     for(let i = 1; i<=Math.ceil((countriesLength+1)/10);i++){
                    paginas.push(i);
     }        
     
     const paginaAnterior = () =>{
          if(pagina === 1){
               return;
          }else{
               dispatch(cambiarPagina(pagina-1))
          }
     }

     const paginaSiguiente = () =>{
          if(pagina === paginas.length){
               return;
          }else{
               dispatch(cambiarPagina(pagina+1))
          }
     }

     return(
          <div >
               <button onClick={paginaAnterior}  className={s.button}>{`<`}</button>
               {
                    // Crea un boton por cada pagina
                    
                    paginas.map(pagina => (
                         <button key={pagina} className={s.button} onClick={()=>dispatch(cambiarPagina(pagina))}>
                              {pagina}
                         </button>
                    ))
               }
               <button onClick={paginaSiguiente}  className={s.button}>{`>`}</button>
          </div>
     )
}