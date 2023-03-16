import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_job_applications extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    application_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    candidate_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    experience: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    job_resume: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    sub_source: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    referral_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    date_cv_sourced: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    company: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    current_location: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    current_package: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    expected_package: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    contact_no: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    notice_period: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    change_reason: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    current_company: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    application_status: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    application_remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hr_remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    covid_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "No"
    },
    profile_picture: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_date: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reason_to_leave: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_job_applications',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
    ]
  });
  }
}
