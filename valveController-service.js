const axios = require('axios'); 

const serviceFactory = ( fetch = axios ) => {

    async function getValveStatus() {
        const { data } = await fetch.get('http://watersysapi.zapto.org/valve_status');

        return data; 
    }

    async function valveController(status) {
        const { data } = await fetch.post('http://watersysapi.zapto.org/valve_controller', {
            valve: status
        });

        return data; 

    }

    return {
        getValveStatus,
        valveController
    };
}

module.exports = {
    valveService: serviceFactory(),
}