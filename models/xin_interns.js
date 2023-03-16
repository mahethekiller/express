import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_interns extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: "employee_id"
    },
    first_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    e_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_of_joining: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    date_of_leaving: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    salary: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    contact_no: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    employee_source: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "Recruiter"
    },
    ref_emp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    address_com: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    city_temp: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    state_temp: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    pin_temp: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    pincode: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    religion: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    college: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    project: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    tpa: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    em_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    em_relation: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    em_contact: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    reporting_location: {
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
    tableName: 'xin_interns',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "employee_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employee_id" },
        ]
      },
    ]
  });
  }
}
