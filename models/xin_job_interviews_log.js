import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_job_interviews_log extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    job_interview_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    application_id: {
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
      allowNull: true
    },
    next_round_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    interview_time: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    interviewees_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    remarks: {
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
      type: DataTypes.STRING(200),
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
    tableName: 'xin_job_interviews_log',
    timestamps: true,
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
