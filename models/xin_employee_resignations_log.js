import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_resignations_log extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    resignation_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notice_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    resignation_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employee_resignations_log',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
