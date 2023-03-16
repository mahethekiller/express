import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_interviews extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    job_interview_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    candidate_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    contact_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    resume: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    sub_source: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    referral_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    date_cv_sourced: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    experience: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    current_location: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    current_package: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    job_location: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    expected_package: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    notice_period: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    change_reason: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    current_company: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    interviewers_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    interview_mode: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "F2F"
    },
    interview_place: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    interview_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    interview_date2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    new_date: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "Rescheduled Date"
    },
    next_round_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    interview_time: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    application_remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "pending"
    },
    offer_status: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "none"
    },
    salary_template_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    convert_to_employee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_interviews',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "job_interview_id" },
        ]
      },
    ]
  });
  }
}
