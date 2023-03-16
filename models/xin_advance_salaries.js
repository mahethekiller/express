import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_advance_salaries extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    advance_salary_id: {
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
      allowNull: false
    },
    month_year: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    advance_amount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    one_time_deduct: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    monthly_installment: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_paid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_deducted_from_salary: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xin_advance_salaries',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "advance_salary_id" },
        ]
      },
    ]
  });
  }
}
