import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class emp_vendors extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    vendor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vendor_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'emp_vendors',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vendor_id" },
        ]
      },
    ]
  });
  }
}
