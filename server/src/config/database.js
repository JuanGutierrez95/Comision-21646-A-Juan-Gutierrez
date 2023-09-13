import { Sequelize } from "sequelize";
import 'dotenv/config'

const {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

export const startDb = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    //await sequelize.sync({force: true}); //Para que este vacio la base de datos
    console.log("Connection established successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
};
