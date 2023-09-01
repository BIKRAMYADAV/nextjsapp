import mongoose from 'mongoose';

export async function connect(){
    try{
  mongoose.connect("mongodb+srv://youtube:1103bikram@nodeexpressprojects.zrw1mva.mongodb.net/");
  const connection = mongoose.connection;

  connection.on('connected', ()=>{
    console.log('MongoDB connected succesfully')
  })
  connection.on('error',(err)=>{
    console.log('MongoDB connection error. Please make sure MongoDB is up and running. ' + err.message);
    process.exit();
  })
    }
    catch(error){
        console.log('Something goes wrong!');
        console.log(error);
    }
}