const {Router} = require('express');
const {Country, Activity} = require('../db.js');
const { Op } = require('sequelize');

const router = Router();

//Retorna el pais con el nombre coincidente pasado por query o retorna todos los paises. GET http://localhost:3001/countries/    O    // http://localhost:3001/countries/?name=mexico
// Todos los get retornan sus respectivos activities 

router.get('/', async (req,res) => {
     const {name, order} = req.query;     
     // Si se le pasa el name por query ejecuta lo siguiente: 
     if(name){
          // select * from "Countries" where name = $name;
          try{
               const country = await Country.findAll({
                    include: {
                         model: Activity
                    },
                    // Retorna los countries coincidentes por el name, el name en spanish o el code de 3 letras
                    where: {
                         [Op.or]:{
                              code: {
                                   [Op.iLike]: name
                              },
                              name: {
                                   [Op.iLike]: `%${name}%`
                              },
                              nameSpanish: {
                                   [Op.iLike]: `%${name}%`
                              }
                         }
                    }
               });
               // Da como respuesta todos los countries coincidentes
               res.json(country.length >= 1 ? country : [])
          }catch(e){
               res.send(e);
          }           
     }else{
          try{
               // select * from "Countries";
               
               // Si se manda por query el order, se retornan los countries ordenados por nombre o por poblacion
               if(!order){
                    const countries = await Country.findAll({
                         include: {
                              model: Activity
                         },
                         order: [
                              ['nameSpanish', 'ASC']
                         ]
                    })
                    res.json(countries.length > 0 ? countries : []);
               }else{
                    switch(order){
                         case 'AZ': 
                              countries = await Country.findAll({
                                   include: {
                                        model: Activity
                                   },order: [
                                        ['nameSpanish', 'ASC']
                                   ]
                              })                              
                              break;
                         case 'ZA':
                              countries = await Country.findAll({
                                   include: {
                                        model: Activity
                                   },order: [
                                        ['nameSpanish', 'DESC']
                                   ]
                              })
                              break;
                         case 'PLtoH': //(Population Higher to Lower) Poblacion Mas alta a Mas baja
                              countries = await Country.findAll({
                                   include: {
                                        model: Activity
                                   },order: [
                                        ['population', 'ASC']
                                   ]
                              })
                              break;
                         case 'PHtoL': //(Population Higher to Lower) Poblacion Mas alta a Mas baja
                              countries = await Country.findAll({
                                   include: {
                                        model: Activity
                                   },order: [
                                        ['population', 'DESC']
                                   ]
                              })
                              break;
                         default:
                              countries = await Country.findAll({
                                   include: {
                                        model: Activity
                                   },
                                   order: [
                                        ['name', 'ASC']
                                   ]
                              })
                              break;
                    }
                    
                    res.json(countries.length > 0 ? countries : []);
               }
          }catch(e){
               res.send(e);
          }
     }
});

//Retorna el pais con el id coincidente pasado por params. GET http://localhost:3001/countries/1

router.get('/:id', async (req,res) => {
     try{
          const {id} = req.params;
          const country = await Country.findByPk(id, {
               include: {
                    model: Activity
               }
          });
          res.json(country ? country : []);
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