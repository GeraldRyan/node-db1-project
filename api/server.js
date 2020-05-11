const express = require("express");
const router = require('express').Router()
const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.get("/", (req,res)=>{
  res.status(200).json("You're in")
})






module.exports = server;
