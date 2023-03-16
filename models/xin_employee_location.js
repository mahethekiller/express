import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_location extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    office_location_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    from_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    to_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employee_location',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "office_location_id" },
        ]
      },
    ]
  });
  }
}
