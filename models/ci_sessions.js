import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ci_sessions extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    ip_address: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    timestamp: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    data: {
      type: DataTypes.BLOB,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ci_sessions',
    timestamps: false,
    indexes: [
      {
        name: "ci_sessions_timestamp",
        using: "BTREE",
        fields: [
          { name: "timestamp" },
        ]
      },
    ]
  });
  }
}
