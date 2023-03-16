import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_languages extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    language_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    language_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    language_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    language_flag: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_languages',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "language_id" },
        ]
      },
    ]
  });
  }
}
