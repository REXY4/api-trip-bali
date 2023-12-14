require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./src/router");

app.use(cors());
app.use(express.json());
app.use("/api/v1", route)

const host = process.env.APP_HOST;
const port = process.env.APP_PORT;

app.listen(port, () => console.log(
    `Running on http://${host}:${port}`
))


