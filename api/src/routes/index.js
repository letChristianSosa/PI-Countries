const { Router } = require('express');
const countryRoutes = require('./country.js')
const activityRoutes = require('./activity.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/api/countries', countryRoutes);
router.use('/api/activities', activityRoutes);

module.exports = router;
