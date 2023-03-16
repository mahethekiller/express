import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_job_requests extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    request_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    post_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    vacancies: {
      type: DataTypes.INTEGER,
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
    team: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    position_level: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    min_experience: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    max_experience: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    job_role: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    min_salary: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    max_salary: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ctc_budget: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    shift_timings: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    timing_details: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    work_days: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    priority: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    interview_rounds: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    interview_round_details: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    questionare: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    competitor: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    profile_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    project_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    certification: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    education: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    skills: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    gender_preference: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    added_by: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    updated_date: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    updated_by: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    approve_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_job_requests',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "request_id" },
        ]
      },
    ]
  });
  }
}
