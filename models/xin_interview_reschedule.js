import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_interview_reschedule extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    reschedule_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    interview_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    interview_time: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    interview_place: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    interview_status: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    update_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_interview_reschedule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reschedule_id" },
        ]
      },
    ]
  });
  }
}
