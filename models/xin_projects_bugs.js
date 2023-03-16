import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_projects_bugs extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    bug_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attachment_file: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_projects_bugs',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bug_id" },
        ]
      },
    ]
  });
  }
}
