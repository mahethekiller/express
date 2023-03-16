import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_bankaccount extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    bankaccount_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_primary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    account_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    account_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bank_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bank_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bank_branch: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employee_bankaccount',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bankaccount_id" },
        ]
      },
    ]
  });
  }
}
