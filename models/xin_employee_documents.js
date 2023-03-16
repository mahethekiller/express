import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_documents extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    document_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    document_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_of_expiry: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    notification_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_alert: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    document_file: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employee_documents',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "document_id" },
        ]
      },
    ]
  });
  }
}
