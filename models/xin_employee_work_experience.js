import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_work_experience extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    work_experience_id: {
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
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    from_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    to_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    post: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employee_work_experience',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "work_experience_id" },
        ]
      },
    ]
  });
  }
}
