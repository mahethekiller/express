import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_leave extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    leave_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    casual_leave: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    medical_leave: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employee_leave',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "leave_id" },
        ]
      },
    ]
  });
  }
}
