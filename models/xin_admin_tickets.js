import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_admin_tickets extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ticket_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ticket_code: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    ticket_priority: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ticket_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    created_by: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    updated_date: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_admin_tickets',
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
