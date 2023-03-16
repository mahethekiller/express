import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employees_temp extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    basic_info: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    converted_to_emp: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    added_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    last_updated: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employees_temp',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
