import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_office_shift extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    office_shift_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shift_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    default_shift: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    monday_in_time: {
      type: DataTypes.STRING(222),
      allowNull: false
    },
    monday_out_time: {
      type: DataTypes.STRING(222),
      allowNull: false
    },
    tuesday_in_time: {
      type: DataTypes.STRING(222),
      allowNull: false
    },
    tuesday_out_time: {
      type: DataTypes.STRING(222),
      allowNull: false
    },
    wednesday_in_time: {
      type: DataTypes.STRING(222),
      allowNull: false
    },
    wednesday_out_time: {
      type: DataTypes.STRING(222),
      allowNull: false
    },
    thursday_in_time: {
      type: DataTypes.STRING(222),
      allowNull: false
    },
    thursday_out_time: {
      type: DataTypes.STRING(222),
      allowNull: false
    },
    friday_in_time: {
      type: DataTypes.STRING(222),
      allowNull: false
    },
    friday_out_time: {
      type: DataTypes.STRING(222),
      allowNull: false
    },
    saturday_in_time: {
      type: DataTypes.STRING(222),
      allowNull: false
    },
    saturday_out_time: {
      type: DataTypes.STRING(222),
      allowNull: false
    },
    sunday_in_time: {
      type: DataTypes.STRING(222),
      allowNull: false
    },
    sunday_out_time: {
      type: DataTypes.STRING(222),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_office_shift',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "office_shift_id" },
        ]
      },
    ]
  });
  }
}
