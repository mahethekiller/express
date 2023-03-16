import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_complaints_log extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    complaint_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    complaint_from: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    complaint_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    complaint_against: {
      type: DataTypes.TEXT,
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
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employee_complaints_log',
    timestamps: true,
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
