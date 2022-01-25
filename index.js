const express = require("express");
const Datastore = require('nedb');

const app = express();
const port = process.env.PORT || 3000;


//app.listen(3000, () => console.log("listening at 3000"));
app.listen(port, () => {
    console.log("starting server at port: " + port + "")

});

app.use(express.static("public"));

app.use(express.json({
    limit: '1mb'
}));

//load database
const database = new Datastore("database.db");
database.loadDatabase();

//from webpage
app.post('/api', (request, response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timeStamp = timestamp;
    database.insert(data);
    console.log(database);
    response.json(data);
});

//to webpage
app.get('/api', (request, response) => {
    //return results in reverse order based on the timestamp
    database.find({}).sort({timeStamp: -1}).exec((err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    });
});
