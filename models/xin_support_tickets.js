import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_support_tickets extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ticket_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ticket_code: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ticket_priority: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    assigned_to: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ticket_remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ticket_status: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    ticket_note: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_support_tickets',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ticket_id" },
        ]
      },
    ]
  });
  }
}
