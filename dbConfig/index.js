import { Sequelize } from "sequelize";

// Option 3: Passing parameters separately (other dialects)
const sequelizeDb = new Sequelize("hrsale", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

export default sequelizeDb;
