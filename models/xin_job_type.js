import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_job_type extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    job_type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_job_type',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "job_type_id" },
        ]
      },
    ]
  });
  }
}
