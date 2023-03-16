import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class conference_room_bookings extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    booking_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    room_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    start_time: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    end_time: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    booking_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    purpose: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    added_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'conference_room_bookings',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "booking_id" },
        ]
      },
    ]
  });
  }
}
