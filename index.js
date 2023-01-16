const express = require('express');
const app = express();
const routeTest = require('./routes/routeTest');
const mongoose = require('mongoose');

app.use('/api/v1/', routeTest);


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://manzitlo:19941120@cluster0.ql4vfl1.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


mongoose
    .connect(
        "mongodb+srv://manzitlo:19941120@cluster0.ql4vfl1.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'testProject',
        
    }
    )
    .then(() => {
        console.log('Database Connection is ready...');
        app.listen(8080);
        console.log('server listening on port 8080');
    })
    .catch((err) => {
        console.log(err);
    });
