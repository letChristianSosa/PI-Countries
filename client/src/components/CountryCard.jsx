import React from 'react';

export default function CountryCard(props){
     const { name, flag, capital, population } = props;
     return(
          <div className='.flex'>
               <img src={`${flag}`} className=".cardFlag"></img>
               <div className="cardInfo">
                    <h2>{name}</h2>
                    <p>{capital}</p>
                    <p>{population}</p>
               </div>
          </div>
     )
};