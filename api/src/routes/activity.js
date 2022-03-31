const {Router} = require('express');
const {Activity, Country} = require('../db.js');

const router = Router();

// Se postea algo como esto {
//      "name": "Fly", "difficulty": "5", "duration": "1:00:09", "season": "spring"
// }

// post a -> http://localhost:3001/activity
router.post('/', async (req,res) => {
     // Hago destructuring de la data mandada por body
     const {idCountries, name, difficulty, duration, season} = req.body;
     try{
          const newActivity = await Activity.create({
               name, difficulty, duration, season
          });
          // idCountries es un array de ids de los Countries. Por cada id, se le agrega la actividad posteada
          idCountries.forEach(id => {
               newActivity.addCountries(id);
          });          
          res.json(newActivity);
     }catch(e){
          res.send(e);
     }
});

router.get('/:idActivity', async (req,res) => {
     try{
          const {idActivity} = req.params;
          const activity = await Activity.findByPk(idActivity, {
               include: {
                    model: Country
               }
          });
          res.json(activity ? activity : []);
     }catch(e){
          res.send(e);
     }
});


module.exports = router; 