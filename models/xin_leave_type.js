import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_leave_type extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    leave_type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    days_per_year: {
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
    tableName: 'xin_leave_type',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "leave_type_id" },
        ]
      },
    ]
  });
  }
}
