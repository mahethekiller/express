import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_assets_categories extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    assets_category_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_assets_categories',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "assets_category_id" },
        ]
      },
    ]
  });
  }
}
