import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_finance_payees extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    payee_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    payee_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contact_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_finance_payees',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payee_id" },
        ]
      },
    ]
  });
  }
}
