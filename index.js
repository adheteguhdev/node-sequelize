const express = require("express");
const bodyParser = require("body-parser")
const consign = require("consign");

const app = express();

app.use(bodyParser.json())

consign()
    .include("libs/config.js")
    .then("db.js")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);
