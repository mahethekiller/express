import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_interview_salary_templates extends Model {
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
    job_interview_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
      allowNull: false,
      defaultValue: "0"
    },
    meal_allowance: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    conveyance_allowance: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    health_ins_policy: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    books_periodical_allowance: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    provident_fund: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    special_allowance: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    blank: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    blank2: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    gross_salary: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    total_allowance: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    total_deduction: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    net_salary: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_interview_salary_templates',
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
