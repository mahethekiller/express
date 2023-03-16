import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_albums extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    cover_url: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    google_drive_link: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    added_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_albums',
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
