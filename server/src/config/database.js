import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("db_posts", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
