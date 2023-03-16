import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_payment_method extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    payment_method_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    method_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_payment_method',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payment_method_id" },
        ]
      },
    ]
  });
  }
}
