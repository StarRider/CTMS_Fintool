const dbModel = require('../utilities/connection');

let entryDb = {}

entryDb.addEntry = (entry) => {
    console.log("Inside Express Model")
    return dbModel.getEntryCollection().then( model => {
        return model.insertMany(entry).then(entryRecord => {
            return entryRecord;
        })
    })
}

entryDb.showReport = ()=>{
    
}

module.exports=entryDb;