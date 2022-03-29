import React from 'react';
import {cambiarPagina} from '../../actions/actions';
import {useDispatch} from 'react-redux'
import s from './Paginator.module.css'

export default function Paginator({countriesLength}){

     const dispatch = useDispatch();

     const paginas = [];
     if(countriesLength === 250){
          for(let i = 1; i<=Math.ceil(countriesLength/10)+1;i++){
               paginas.push(i);
          }   
     }else{
          for(let i = 1; i<=Math.ceil(countriesLength/10);i++){
               paginas.push(i);
          }   
     }

     return(
          <div >
               {
                    paginas.map(pagina => (
                         <button key={pagina} className={s.button} onClick={()=>dispatch(cambiarPagina(pagina))}>
                              {pagina}
                         </button>
                    ))
               }
          </div>
     )
}