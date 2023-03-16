import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_qualification extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    qualification_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    interview_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    education_level_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    from_year: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    to_year: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    skill_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    specialization: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employee_qualification',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "qualification_id" },
        ]
      },
    ]
  });
  }
}
