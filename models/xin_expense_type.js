import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_expense_type extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    expense_type_id: {
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
      type: DataTypes.STRING(200),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_expense_type',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "expense_type_id" },
        ]
      },
    ]
  });
  }
}
