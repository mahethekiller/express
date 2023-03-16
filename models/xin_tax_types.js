import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_tax_types extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    tax_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_tax_types',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tax_id" },
        ]
      },
    ]
  });
  }
}
