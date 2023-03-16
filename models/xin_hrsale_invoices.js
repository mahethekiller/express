import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_hrsale_invoices extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    invoice_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    invoice_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    invoice_due_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sub_total_amount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    discount_type: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    discount_figure: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_tax: {
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
    },
    invoice_note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_hrsale_invoices',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "invoice_id" },
        ]
      },
    ]
  });
  }
}
