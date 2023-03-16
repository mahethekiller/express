import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_exit_type extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    exit_type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employee_exit_type',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "exit_type_id" },
        ]
      },
    ]
  });
  }
}
