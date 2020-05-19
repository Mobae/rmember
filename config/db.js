const mongoose = require('mongoose');

uri = 'mongodb+srv://ajay123:ajay123@transactions-puvlf.mongodb.net/profiles?retryWrites=true&w=majority';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.blue);
    } catch (err){
        console.log(`ErrorL ${err.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;
