import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_support_ticket_files extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ticket_file_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ticket_files: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    file_size: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_support_ticket_files',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ticket_file_id" },
        ]
      },
    ]
  });
  }
}
