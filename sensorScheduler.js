const cron = require('node-cron');
const { moistureService } = require('./currentMoisture-service');

function sensorSchedule() {
    cron.schedule("* * * * *", async function() {
        try {
          const test = await moistureService.getCurrentMoisture(); 
          console.log(test); 
        }  catch (e) {
            console.log(e); 
        }
    });
}

module.exports = {
    sensorSchedule,
}