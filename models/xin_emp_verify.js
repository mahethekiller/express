import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_emp_verify extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    emp_code: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    designation: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    organization: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    manager_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    manager_email: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    manager_phone: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    hr_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    hr_email: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    hr_phone: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    organization2: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ""
    },
    manager_name2: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ""
    },
    manager_email2: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ""
    },
    manager_phone2: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ""
    },
    hr_name2: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ""
    },
    hr_email2: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ""
    },
    date_of_leaving: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ""
    },
    date_of_joining: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ""
    },
    hr_phone2: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ""
    },
    reason_to_leave: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    time_duration: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    exit_formalities: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    exit_formalities_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    offer_letter: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    relieving_letter: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    increment_letter: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    experience_letter: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    designation2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    emp_code2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    date_of_leaving2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    date_of_joining2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    reason_to_leave2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    exit_formalities2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    exit_formalities_desc2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    letter_of_authentication: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    verification_status: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "Pending"
    },
    added_by: {
      type: DataTypes.STRING(200),
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
    tableName: 'xin_emp_verify',
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
