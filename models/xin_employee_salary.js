import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_salary extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    old_salary: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    new_salary: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    appraisal_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_employee_salary',
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
