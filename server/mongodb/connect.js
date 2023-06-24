import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);      //function called so that the search functionality could work properly

    mongoose.connect(url,{dbName:'AIimgGen'})                   //Connecting to the DB
        .then( () => console.log('Database Connected') )
        .catch( (err) => console.log(err) );
};

export default connectDB;