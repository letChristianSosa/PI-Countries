import React, { useEffect } from 'react';
import {cambiarPagina} from '../../actions/actions';
import {useDispatch, useSelector} from 'react-redux'
import s from './Paginator.module.css'

export default function Paginator({countriesLength}){

     const pagina = useSelector(state => state.actualPage);
     const dispatch = useDispatch();
     const paginas = [];
     
     for(let i = 1; i<=Math.ceil((countriesLength+1)/10);i++){
                    paginas.push(i);
     }   

     const paginaAnterior = () => {
          if(pagina !== 1){
               dispatch(cambiarPagina(pagina-1));
          }
          window.scroll({top: 0, behavior: 'smooth'});
     }

     const primerPagina = () => {
          if(pagina !== 1){
               dispatch(cambiarPagina(1));
          }
          window.scroll({top: 0, behavior: 'smooth'});
     }

     const paginaSiguiente = () => {
          if(pagina !== paginas.length){
               dispatch(cambiarPagina(pagina+1));
          }
          window.scroll({top: 0, behavior: 'smooth'});
     }

     const ultimaPagina = () => {
          if(pagina !== paginas.length){
               dispatch(cambiarPagina(paginas.length));
          }
          window.scroll({top: 0, behavior: 'smooth'});
     }


     return(
          <div >
               <button onClick={primerPagina} className={s.button}>{`<<`}</button>
               <button onClick={paginaAnterior} className={s.button}>{`<`}</button>
               {    // Crea un boton por cada pagina                    
                    paginas.map(pagina => (
                         <button key={pagina} className={s.button} value={pagina} onClick={() => {window.scroll({top: 0, behavior: 'smooth'}); dispatch(cambiarPagina(pagina))}}>
                              {pagina}
                         </button>
                    ))
               }
               <button onClick={paginaSiguiente} className={s.button}>{`>`}</button>
               <button onClick={ultimaPagina} className={s.button}>{`>>`}</button>
          </div>
     )
}