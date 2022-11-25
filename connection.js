const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1:27017/hospital';
const db = mongoose.connection;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log(err));


db.once('open', _ => {
    console.log('Database is conected to', uri);
})

db.on('error', err => {
    console.log(err);
})