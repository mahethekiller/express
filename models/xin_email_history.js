import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_email_history extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subject: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    from_email: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    to_emails: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    sent_date: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mail_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mail_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "eg res id etc"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_email_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
