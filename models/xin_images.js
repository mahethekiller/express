import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_images extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    added_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    isActive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_images',
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
      {
        name: "album_id",
        using: "BTREE",
        fields: [
          { name: "album_id" },
        ]
      },
    ]
  });
  }
}
