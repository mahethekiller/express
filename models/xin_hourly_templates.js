import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_hourly_templates extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    hourly_rate_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hourly_grade: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hourly_rate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_hourly_templates',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "hourly_rate_id" },
        ]
      },
    ]
  });
  }
}
