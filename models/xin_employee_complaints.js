import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_complaints extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    complaint_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    }
  }, {
    sequelize,
    tableName: 'xin_employee_complaints',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "complaint_id" },
        ]
      },
    ]
  });
  }
}
