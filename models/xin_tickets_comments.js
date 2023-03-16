import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_tickets_comments extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    comment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ticket_comments: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_tickets_comments',
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
