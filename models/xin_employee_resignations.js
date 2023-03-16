import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_resignations extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    resignation_id: {
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
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notice_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    resignation_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    requested_notice: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    manager_comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    manager_status: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "0"
    },
    it_comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    it_status: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "0"
    },
    account_status: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "0"
    },
    account_comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    hr_comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    hr_status: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "0"
    },
    head_status: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "0"
    },
    it_person: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    account_per: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    hr_person: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    manager_person: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    sage_person: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    login_person: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    coo_status: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "0"
    },
    coo_comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sage_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sage_comment: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    employee_accept: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    exit_form: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "pending"
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    login_status: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "0"
    },
    login_comment: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employee_resignations',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "resignation_id" },
        ]
      },
    ]
  });
  }
}
