import * as fs from 'fs';
import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const sequelize = new Sequelize(
  `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB}`,
);

const sqlScript = fs.readFileSync('./src/utils/sql/cities.sql', 'utf-8');

sequelize
  .query(sqlScript)
  .then(() => {
    console.log('SQL Script executed successfully');
  })
  .catch((error) => {
    console.log(error);
  });
