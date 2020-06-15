const axios = require('axios'); 
const {dateFormat} = require('./date'); 

const serviceFactory = (fetch = axios) => {
    
    async function getCurrentMoisture() {
        const { data } = await fetch.get('http://watersysapi.zapto.org/moisture_percent');
        
        const { moisturePercent, timeStamp } = JSON.parse(data)
        
        const config = {
            dry: 356.5,
            wet: 216.5
        }

        const transformMoisturePercent = (mp) => {
            const { dry, wet } = config;  
            const configRange = wet - dry;
            const varMinusMin = mp - dry; 
            console.log(mp);
            return Math.round(( varMinusMin / configRange ) * 100); 
            
        }

        return {
            moisturePercent: transformMoisturePercent(moisturePercent),
            timeStamp: dateFormat(timeStamp)
        }
    }

    return { getCurrentMoisture };
}



module.exports = {
    moistureService:  serviceFactory(),
}