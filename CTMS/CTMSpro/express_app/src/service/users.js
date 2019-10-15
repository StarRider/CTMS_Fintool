const db = require('../model/users');

const fBookingService = {}

fBookingService.addEntry = (entryObj) => {
    return db.addEntry(entryObj).then(entryResult => {
        if (entryResult == null) {
            let err = new Error("No Entry Done!!");
            err.status = 404;
            throw err;
        
        } else return entryResult;
    })
}


module.exports=fBookingService;