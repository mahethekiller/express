import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_job_categories extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    category_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    category_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_job_categories',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
  }
}
