import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_finance_payers extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    payer_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    payer_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contact_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_finance_payers',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payer_id" },
        ]
      },
    ]
  });
  }
}
