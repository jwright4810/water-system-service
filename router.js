const { Router } = require('express'); 
const router = Router({}); 
const { controller } = require('./controller');

router.get('/api/v1/moisturePercent', controller.getMoisturePercent); 
router.get('/api/v1/valveStatus', controller.getValveStatus); 
router.post('/api/v1/valveController', controller.valveController);


module.exports = router; 