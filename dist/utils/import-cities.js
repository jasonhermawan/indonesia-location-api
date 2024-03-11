"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const dotenv = require("dotenv");
const sequelize_1 = require("sequelize");
dotenv.config();
const sequelize = new sequelize_1.Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB}`);
const sqlScript = fs.readFileSync('./src/utils/sql/cities.sql', 'utf-8');
sequelize
    .query(sqlScript)
    .then(() => {
    console.log('SQL Script executed successfully');
})
    .catch((error) => {
    console.log(error);
});
//# sourceMappingURL=import-cities.js.map