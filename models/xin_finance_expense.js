import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_finance_expense extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    expense_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    account_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    expense_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_method: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expense_reference: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    expense_file: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_finance_expense',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "expense_id" },
        ]
      },
    ]
  });
  }
}
