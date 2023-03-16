import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_countries extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    country_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    country_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    country_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    country_flag: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_countries',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
    ]
  });
  }
}
