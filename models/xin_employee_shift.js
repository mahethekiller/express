import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_shift extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    emp_shift_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shift_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    from_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    to_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employee_shift',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "emp_shift_id" },
        ]
      },
    ]
  });
  }
}
