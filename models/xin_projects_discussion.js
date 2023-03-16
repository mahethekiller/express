import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_projects_discussion extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    discussion_id: {
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
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attachment_file: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_projects_discussion',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "discussion_id" },
        ]
      },
    ]
  });
  }
}
