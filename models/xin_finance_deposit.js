import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_finance_deposit extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    deposit_id: {
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
    deposit_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_method: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deposit_reference: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    deposit_file: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_finance_deposit',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "deposit_id" },
        ]
      },
    ]
  });
  }
}
