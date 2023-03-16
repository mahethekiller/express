import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_file_manager extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    file_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    file_size: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    file_extension: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_file_manager',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "file_id" },
        ]
      },
    ]
  });
  }
}
