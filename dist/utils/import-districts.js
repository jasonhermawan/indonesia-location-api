"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const dotenv = require("dotenv");
const sequelize_1 = require("sequelize");
dotenv.config();
const sequelize = new sequelize_1.Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB}`);
try {
    const sqlScript = fs.readFileSync('./src/utils/sql/districts.sql', 'utf-8');
    console.log('SQL Script loaded successfully');
    const insertRegex = /INSERT INTO `districts` \(`id`, `cityId`, `name`, `latitude`, `longitude`\) VALUES[\s\S]*?;/g;
    const insertCommands = sqlScript.match(insertRegex);
    if (!insertCommands) {
        console.log('No commands found');
    }
    else {
        (async () => {
            for (let i = 0; i < insertCommands.length; i++) {
                const insertCommand = insertCommands[i];
                try {
                    await sequelize.query(insertCommand);
                    console.log('Executed SQL command:', insertCommand);
                }
                catch (error) {
                    console.error('Error executing SQL command:', insertCommand, error);
                }
            }
            console.log('All SQL commands executed successfully');
        })();
    }
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=import-districts.js.map