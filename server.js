const express = require("express")
const Handlebars = require("handlebars")
const mysql = require("mysql")

const db = require('./app/connection')('burger_db', 'password')
