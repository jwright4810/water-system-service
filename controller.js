const { moistureService } = require('./currentMoisture-service');
const { valveService } = require('./valveController-service');

function makeController() {
    const getMoisturePercent = async (req, res, next) => {
        try {
           const currentMoistureResponse = await moistureService.getCurrentMoisture();

           res.set('Content-type', 'application/json')
           res.status(200).send(currentMoistureResponse);
        } catch (e) {
            return res.status(500).end(); 
        }
    };

    const getValveStatus = async (req, res, next) => {
        try {
            const valveStatus = await valveService.getValveStatus();

            res.set('Content-type', 'application/json');
            res.status(200).send(valveStatus);
        } catch (e) {
            console.log(e);
            return res.status(500).end(); 
        }
    }

    const valveController = async (req, res, next) => {
        try {
            const { status } = req.body;

            const valveCtr = await valveService.valveController(status);

            res.set('Content-type', 'application/json'); 
            res.status(200).send(valveCtr);
        } catch (e) {
            console.log(e);
            return res.status(500).end(); 
        }
    }

    return { 
        getMoisturePercent, 
        getValveStatus,
        valveController 
    };
}

module.exports = {
    makeController,
    controller: makeController(),
}