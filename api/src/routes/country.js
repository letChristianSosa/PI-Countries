const {Router} = require('express');
const {Country} = require('../db.js');

const router = Router();

//Retorna el pais con el nombre coincidente pasado por query o retorna todos los paises. GET http://localhost:3001/countries/    O    // http://localhost:3001/countries/?name=mexico

router.get('/', async (req,res) => {
     const {name, order} = req.query;
     
     // Si se le pasa el name por query ejecuta lo siguiente: 
     if(name){
          // select * from "Countries" where name = $name;
          try{
               let country = await Country.findAll({
                    where: {
                         name: name,
                    }
               });
               res.json(country.length === 1 ? country : `No existe el pais ${name}` )
          }catch(e){
               res.send(e);
          }           
     }else{
          try{
               // select * from "Countries";
               let countries;
               if(!order){
                    countries = await Country.findAll({
                         order: [
                              ['name', 'ASC']
                         ]
                    })
                    res.json(countries.length > 0 ? countries : "No hay paises");
               }else{
                    switch(order){
                         case 'AZ': 
                              countries = await Country.findAll({
                                   order: [
                                        ['name', 'ASC']
                                   ]
                              })                              
                              break;
                         case 'ZA':
                              countries = await Country.findAll({
                                   order: [
                                        ['name', 'DESC']
                                   ]
                              })
                              break;
                         case 'PHtoL': //(Population Higher to Lower) Poblacion Mas alta a Mas baja
                              countries = await Country.findAll({
                                   order: [
                                        ['population', 'DESC']
                                   ]
                              })
                              break;
                         case 'PLtoH': //(Population Higher to Lower) Poblacion Mas alta a Mas baja
                              countries = await Country.findAll({
                                   order: [
                                        ['population', 'ASC']
                                   ]
                              })
                              break;
                         default:
                              countries = await Country.findAll({
                                   order: [
                                        ['name', 'ASC']
                                   ]
                              })
                              break;
                    }
                    res.json(countries.length > 0 ? countries : "No hay paises");
               }
          }catch(e){
               res.send(e);
          }
     }
});

//Retorna el pais con el id coincidente pasado por params. GET http://localhost:3001/countries/1

router.get('/:id', async (req,res) => {
     try{
          let {id} = req.params;
          let country = await Country.findByPk(id);
          res.json(country ? country : "No existe pais con ese id");
     }catch(e){
          res.send(e);
     }
});

// //Retorna el pais con el nombre coincidente pasado por params. GET http://localhost:3001/countries/name/mexico

// router.get('/name/:nameCountry', async (req,res) => {
//      try{
//           const {nameCountry} = req.params;
//           let country = await Country.findAll({
//                where: {
//                     name: nameCountry,
//                }
//           });
//           res.json(country.length !== 0 ? country : "No existe pais con ese nombre");
//      }catch(e){
//           res.send(e);
//      }
// });

// router.get('/?name', (req,res) => {

// });

module.exports = router;   