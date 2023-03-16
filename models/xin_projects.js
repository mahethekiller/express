import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_projects extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    project_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    end_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    assigned_to: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    priority: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    project_progress: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    project_note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_projects',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "project_id" },
        ]
      },
    ]
  });
  }
}
