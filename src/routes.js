const express = require("express");
const PromptImage = require("./controllers/PromptImage");

const routes = express.Router();

routes.get("/create", PromptImage.create);

module.exports = routes;
