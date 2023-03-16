import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_goal_tracking_type extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    tracking_type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_goal_tracking_type',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tracking_type_id" },
        ]
      },
    ]
  });
  }
}
