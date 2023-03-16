import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_qualification_education_level extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    education_level_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_qualification_education_level',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "education_level_id" },
        ]
      },
    ]
  });
  }
}
