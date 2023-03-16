import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_events extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    event_id: {
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
    event_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    event_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    event_time: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    event_note: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_events',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "event_id" },
        ]
      },
    ]
  });
  }
}
