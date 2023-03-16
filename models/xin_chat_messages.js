import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_chat_messages extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    message_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    from_id: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    to_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    message_frm: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_read: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    message_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    message_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recd: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    message_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'xin_chat_messages',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "message_id" },
        ]
      },
    ]
  });
  }
}
