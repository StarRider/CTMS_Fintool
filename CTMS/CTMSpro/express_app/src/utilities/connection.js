const {Schema}=require("mongoose");
const Mongoose=require("mongoose")
Mongoose.Promise=global.Promise;
Mongoose.set('useCreateIndex',true)
const url="mongodb://localhost:27017/TMS";

const EntrySchema=Schema({
    entryId:String,
    memberId:String,
    type:String,
    category:String,
    amount:Number,
    mode:String,
    date:String

},{collection:"Entry"});

var collection={};
collection.getEntryCollection=()=>{
    return Mongoose.connect(url,{useNewUrlParser:true}).then((database)=>{
        return database.model('Entry',EntrySchema)
    }).catch((error)=>{
        let err=new Error("Could not connect to database");
        err.status=500;
        throw err;
   
     })
}
module.exports=collection;