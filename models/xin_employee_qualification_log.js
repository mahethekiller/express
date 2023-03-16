import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_qualification_log extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    qualification_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employee_qualification_log',
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
