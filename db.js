const mongoose = require("mongoose");

module.exports = ()=>{
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology : true,
    };
    try{
        mongoose.connect(`mongodb://0.0.0.0:27017/registerpage`,connectionParams);
        console.log("Connected to database successfully")
    }catch(error){
          console.log(error);
          console.log("could not connect to database")
    }
}
