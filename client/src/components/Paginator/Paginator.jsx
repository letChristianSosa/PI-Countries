import React from 'react';
import {cambiarPagina} from '../../actions/actions';
import {useDispatch} from 'react-redux'
import s from './Paginator.module.css'

export default function Paginator({countriesLength, onClick}){

     const dispatch = useDispatch();

     const paginas = [];
     for(let i = 1; i<=Math.ceil(countriesLength/10)+1;i++){
          paginas.push(i);
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