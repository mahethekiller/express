import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_tasks extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    task_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    task_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    assigned_to: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    start_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    end_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    task_hour: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    task_progress: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    task_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    task_note: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_tasks',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "task_id" },
        ]
      },
    ]
  });
  }
}
