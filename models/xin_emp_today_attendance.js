import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_emp_today_attendance extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    card_no: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    punch_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    check_in_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    check_out_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    badgenumber: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    check_in_time: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    check_out_time: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_emp_today_attendance',
    timestamps: false,
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
