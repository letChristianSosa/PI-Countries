const {Router} = require('express');
const {Activity} = require('../db.js');

const router = Router();

// Se postea algo como esto {
//      "name": "Fly", "difficulty": "5", "duration": "1:00:09", "season": "spring"
// }

router.post('/', async (req,res) => {
     const {name, difficulty, duration, season} = req.body;
     try{
          console.log(season);
          const newPlayer = await Activity.create({
               name, difficulty, duration, season
          });
          res.json(newPlayer);
     }catch(e){
          res.send(e);
     }

});


module.exports = router; 