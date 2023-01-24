const express = require("express");
const cors = require("cors");
const { superMarket } = require("./api");

module.exports = async (app) => {
  app.use(express.json());
  app.use(cors());

  
  
  // our super market API
  superMarket(app);



};
