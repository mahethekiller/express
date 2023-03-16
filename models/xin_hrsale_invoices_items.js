import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_hrsale_invoices_items extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    invoice_item_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    item_tax_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    item_tax_rate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    item_qty: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    item_unit_price: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    item_sub_total: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sub_total_amount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_tax: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    discount_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discount_figure: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_discount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    grand_total: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_hrsale_invoices_items',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "invoice_item_id" },
        ]
      },
    ]
  });
  }
}
