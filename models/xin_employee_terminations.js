import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_terminations extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    termination_id: {
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
    terminated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    termination_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    termination_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    notice_date: {
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
    tableName: 'xin_employee_terminations',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "termination_id" },
        ]
      },
    ]
  });
  }
}
