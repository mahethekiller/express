import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_job_codes extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    job_code_id: {
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
    position: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_date: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "active"
    }
  }, {
    sequelize,
    tableName: 'xin_job_codes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "job_code_id" },
        ]
      },
    ]
  });
  }
}
