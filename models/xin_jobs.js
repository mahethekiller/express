import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_jobs extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    job_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    job_code: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    job_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    designation_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    job_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_featured: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    job_vacancy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    minimum_experience: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    maximum_experience: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    start_date: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    date_of_closing: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    department: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    priority: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    hiring_manager: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    job_location: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    short_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    long_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    show_on_website: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "no"
    },
    added_by: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    updated_date: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_jobs',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "job_id" },
        ]
      },
    ]
  });
  }
}
