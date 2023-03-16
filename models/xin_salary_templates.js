import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_salary_templates extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    salary_template_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    salary_grades: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    basic_salary: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    overtime_rate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    house_rent_allowance: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    medical_allowance: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    travelling_allowance: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dearness_allowance: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    security_deposit: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    provident_fund: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tax_deduction: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    gross_salary: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_allowance: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_deduction: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    net_salary: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_salary_templates',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "salary_template_id" },
        ]
      },
    ]
  });
  }
}
