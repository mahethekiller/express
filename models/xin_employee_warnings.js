import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_warnings extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    warning_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    warning_to: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    warning_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    warning_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    warning_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(255),
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
    tableName: 'xin_employee_warnings',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "warning_id" },
        ]
      },
    ]
  });
  }
}
