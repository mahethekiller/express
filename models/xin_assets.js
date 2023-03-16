import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_assets extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    assets_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    assets_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_asset_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    purchase_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    invoice_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    manufacturer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    serial_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    warranty_end_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    asset_note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    asset_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_working: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_assets',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "assets_id" },
        ]
      },
    ]
  });
  }
}
