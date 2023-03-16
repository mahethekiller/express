import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_file_manager_settings extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    setting_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    allowed_extensions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    maximum_file_size: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_enable_all_files: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_file_manager_settings',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "setting_id" },
        ]
      },
    ]
  });
  }
}
