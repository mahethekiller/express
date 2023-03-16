import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_meetings extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    meeting_id: {
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
    meeting_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    meeting_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    meeting_time: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    meeting_note: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_meetings',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "meeting_id" },
        ]
      },
    ]
  });
  }
}
