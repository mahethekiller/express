import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_attendance_time extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    time_attendance_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attendance_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    clock_in: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    clock_in_ip_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    clock_out: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    clock_out_ip_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    clock_in_out: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    time_late: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    early_leaving: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    overtime: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_work: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_rest: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    attendance_status: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_attendance_time',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "time_attendance_id" },
        ]
      },
    ]
  });
  }
}
