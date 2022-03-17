const {Router} = require('express');
const {Country} = require('../db.js');

const router = Router();


router.get('/', async (req,res) => {
     const {name} = req.query;
     if(name){

     }else{
          try{
               const countries = await Country.findAll();
               res.json(countries.length > 0 ? countries : "No hay paises");
          }catch(e){
               res.send(e);
          }
     }
});

router.get('/{idPais}', (req,res) => {

});

// router.get('/?name', (req,res) => {

// });

module.exports = router;   