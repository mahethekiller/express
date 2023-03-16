import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_expenses extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    expense_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expense_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    billcopy_file: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    outgoing_amount: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    incoming_amount: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    balance: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    purchase_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    status_remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_expenses',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "expense_id" },
        ]
      },
    ]
  });
  }
}
