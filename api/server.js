const express = require("express");
const router = require('express').Router()
const db = require("../data/dbConfig.js");
const knex = require('knex');

const server = express();

server.use(express.json());

server.get("/", (req,res)=>{
  res.status(200).json("You're in")
})

server.get("/accounts", (req,res)=>{
  db.select("*").from('accounts').then(accs=>{
    res.status(200).json(accs)
  }).catch(err=>{
    console.log(err)
    res.status(500).json("Internal Server Error")
  })
})





module.exports = server;
