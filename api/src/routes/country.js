const {Router} = require('express');
const {Country} = require('../db.js');

const router = Router();


router.get('/', async (req,res) => {
     const {name} = req.query;
     if(name){
          // select * from "Countries" where name = $name;
          try{
               const country = await Country.findAll({
                    where: {
                         name: name,
                    }
               });
               console.log(country);
               res.json(country.length === 1 ? country : "No existe el pais" )
          }catch(e){
               res.send(e);
          }          
     }else{
          try{
               // select * from "Countries";
               const countries = await Country.findAll();
               res.json(countries.length > 0 ? countries : "No hay paises");
          }catch(e){
               res.send(e);
          }
     }
});

router.get('/:idCountry', async (req,res) => {
     const {idCountry} = req.params;
     if(idCountry){
          try{
               const country = await Country.findAll({
                    where: {
                         id: idCountry,
                    }
               });
               res.json(country.length !== 0 ? country : "No existe pais con ese id");
          }catch(e){
               res.send(e);
          }
     }
});

router.get('/name/:nameCountry', async (req,res) => {
     const {nameCountry} = req.params;
     if(nameCountry){
          try{
               const country = await Country.findAll({
                    where: {
                         name: nameCountry,
                    }
               });
               res.json(country.length !== 0 ? country : "No existe pais con ese nombre");
          }catch(e){
               res.send(e);
          }
     }
});

// router.get('/?name', (req,res) => {

// });

module.exports = router;   