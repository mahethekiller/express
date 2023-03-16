import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_goal_tracking extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    tracking_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tracking_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    end_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    target_achiement: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    goal_progress: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    goal_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'xin_goal_tracking',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tracking_id" },
        ]
      },
    ]
  });
  }
}
