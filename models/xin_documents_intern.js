import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_documents_intern extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    file_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    file_desc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_documents_intern',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "file_id" },
        ]
      },
    ]
  });
  }
}
