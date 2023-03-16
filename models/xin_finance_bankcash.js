import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_finance_bankcash extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    bankcash_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    account_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    account_balance: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    account_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    branch_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bank_branch: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_finance_bankcash',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bankcash_id" },
        ]
      },
    ]
  });
  }
}
