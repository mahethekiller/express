import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_exit extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    exit_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exit_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    exit_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exit_interview: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_inactivate_account: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employee_exit',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "exit_id" },
        ]
      },
    ]
  });
  }
}
