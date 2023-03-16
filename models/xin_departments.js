import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_departments extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    department_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    department_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_departments',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "department_id" },
        ]
      },
    ]
  });
  }
}
