import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_currencies extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    currency_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    symbol: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_currencies',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "currency_id" },
        ]
      },
    ]
  });
  }
}
