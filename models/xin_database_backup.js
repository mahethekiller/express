import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_database_backup extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    backup_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    backup_file: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_database_backup',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "backup_id" },
        ]
      },
    ]
  });
  }
}
