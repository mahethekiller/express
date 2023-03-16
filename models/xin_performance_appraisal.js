import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_performance_appraisal extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    performance_appraisal_id: {
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
    appraisal_year_month: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    customer_experience: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    marketing: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    management: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    administration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    presentation_skill: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quality_of_work: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    efficiency: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    integrity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    professionalism: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    team_work: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    critical_thinking: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    conflict_management: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attendance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ability_to_meet_deadline: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_performance_appraisal',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "performance_appraisal_id" },
        ]
      },
    ]
  });
  }
}
