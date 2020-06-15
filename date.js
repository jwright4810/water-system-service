const moment = require('moment'); 

const dateFormat = (date) => {
    return moment(date).format('LLL');
}

module.exports = {
    dateFormat
}