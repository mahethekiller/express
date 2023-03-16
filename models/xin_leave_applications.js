import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_leave_applications extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    leave_id: {
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
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    leave_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_duration: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Full"
    },
    from_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    to_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    end_duration: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Full"
    },
    applied_on: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    casual_deducted: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    earned_deducted: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_leave_applications',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "leave_id" },
        ]
      },
    ]
  });
  }
}
