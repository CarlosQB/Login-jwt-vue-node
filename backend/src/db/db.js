import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false
  }
);

const conectar = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a MySQL exitosa");

    await sequelize.sync();
    console.log("Modelos sincronizados");
  } catch (error) {
    console.error("Error al conectar a MySQL:", error);
  }
};

export { sequelize, conectar };