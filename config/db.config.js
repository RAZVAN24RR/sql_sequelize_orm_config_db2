module.exports = {
  HOST: "localhost",
  USER: "razvan",
  PASSWORD: "razvan",
  DB: "node_sequelize_api_db",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
