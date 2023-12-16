import express from 'express';
const { PredictionAPIClient } = require("@azure/cognitiveservices-customvision-prediction");
const { ApiKeyCredentials } = require("@azure/ms-rest-js");

const util = require('util');
const fs = require('fs');
var path = require('path');
const client = new PredictionAPIClient(credentials, customVisionPredictionEndPoint);
const mongoose = require('mongoose');
const imgSchema = require('./model.js');
app.set("view engine", "ejs");
require('dotenv').config();

// retrieve environment variables
const predictionKey = process.env.VISION_PREDICTION_KEY;
const predictionEndpoint = process.env.VISION_PREDICTION_ENDPOINT;
const projectId = process.env.PROJECT_ID;
const credentials = new ApiKeyCredentials({ inHeader: {"Prediction-key": predictionKey } });


// Node code

mongoose.connect(process.env.MONGO_URL)
.then(console.log("DB Connected"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`App is listening to port: ${process.env.PORT}`)
})

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send('This is Custom Vision!')
})

app.post('/images', (req, res) => {
    try{
        // req will contain the image in binary
        const result = predict(req.image)
        res.send(result);
    } catch (err){
        console.log(err);
        res.status(400).json({
            error: err
        })
    }
})

async function predict(image){
    const results = await client.classifyImage(projectId, iteration, req.image)
                                    .then(result => {
                                        console.log("Result is: " + result)
                                        return result;
                                    })
                                    .catch(err => {
                                        console.log("Error: " + err)
                                    });
};
