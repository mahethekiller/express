import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_holidays extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    holiday_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    start_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    end_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    is_publish: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_holidays',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "holiday_id" },
        ]
      },
    ]
  });
  }
}
