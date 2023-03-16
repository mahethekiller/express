import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_finance_transfer extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    transfer_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    from_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    to_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transfer_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    transfer_amount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payment_method: {
      type: DataTypes.STRING(111),
      allowNull: false
    },
    transfer_reference: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_finance_transfer',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "transfer_id" },
        ]
      },
    ]
  });
  }
}
