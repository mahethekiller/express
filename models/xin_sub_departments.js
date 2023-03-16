import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_sub_departments extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    sub_department_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    department_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_sub_departments',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sub_department_id" },
        ]
      },
    ]
  });
  }
}
