var path = require('path');
var Sequelize = require('sequelize');

var env = require(path.join(__dirname, '../env'));
var db = new Sequelize('postgres://localhost:5432/3draw');

module.exports = db;
