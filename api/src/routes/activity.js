const {Router} = require('express');
const {Activity, Country} = require('../db.js');

const router = Router();

// Se postea algo como esto {
//      "name": "Fly", "difficulty": "5", "duration": "1:00:09", "season": "spring"
// }

router.post('/', async (req,res) => {
     const {idCountries, name, difficulty, duration, season} = req.body;
     try{
          const newActivity = await Activity.create({
               name, difficulty, duration, season
          });
          newActivity.addCountries(idCountries);
          res.json(newActivity);
     }catch(e){
          res.send(e);
     }
});

router.get('/:idActivity', async (req,res) => {
     const {idActivity} = req.params;
     if(idActivity){
          try{
               const activity = await Activity.findByPk(id);
               res.json(activity.length !== 0 ? activity : "No existe actividad con ese id");
          }catch(e){
               res.send(e);
          }
     }
});


module.exports = router; 