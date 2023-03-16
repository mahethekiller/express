import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_tasks_comments extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    task_comments: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_tasks_comments',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "comment_id" },
        ]
      },
    ]
  });
  }
}
