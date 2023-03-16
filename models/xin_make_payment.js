import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_make_payment extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    make_payment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    department_id: {
      type: DataTypes.INTEGER,
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
    designation_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    basic_salary: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payment_amount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    gross_salary: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_allowances: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_deductions: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    net_salary: {
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
    provident_fund: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tax_deduction: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    security_deposit: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    overtime_rate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_advance_salary_deduct: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    advance_salary_amount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_payment: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    payment_method: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hourly_rate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_hours_work: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_make_payment',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "make_payment_id" },
        ]
      },
    ]
  });
  }
}
