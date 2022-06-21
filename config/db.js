require('dotenv').config()
const mongoose =require('mongoose');


function connectDB(){
    //Database Connection
    mongoose
    .connect(process.env.MONGO_CONNECTION_URL,{
        useNewUrlParser:true,
        //useCreateIndex:true,
        useUnifiedTopology:true
        //useFindAndModify:true
    })
const connection = mongoose.connection;

//     connection.once('open',() => {
//     console.log("mongodb connected sucessfully")
// })
//     .catch(err =>{
//      console.log('connection failed')
//     })

mongoose.connection
    .once('open', function () {
      console.log('MongoDB running');
    })
    .on('error', function (err) {
      console.log(err);
    });
        
}
module.exports= connectDB;