import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_finance_transactions extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    transaction_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    account_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deposit_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expense_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transfer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transaction_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_amount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    transaction_debit: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    transaction_credit: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    transaction_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_finance_transactions',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "transaction_id" },
        ]
      },
    ]
  });
  }
}
