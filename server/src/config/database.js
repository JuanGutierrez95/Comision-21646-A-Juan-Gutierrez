import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("db_posts", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export const startDb = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        //await sequelize.sync({force: true});
        console.log("Connection established successfully.")
    } catch (error) {
        console.log("Unable to connect to the database:", error)
    }
}