import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_transfer extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    transfer_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transfer_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    transfer_department: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transfer_location: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employee_transfer',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "transfer_id" },
        ]
      },
    ]
  });
  }
}
