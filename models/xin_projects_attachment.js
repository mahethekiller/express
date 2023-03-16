import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_projects_attachment extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    project_attachment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    upload_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    file_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    file_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    attachment_file: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_projects_attachment',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "project_attachment_id" },
        ]
      },
    ]
  });
  }
}
