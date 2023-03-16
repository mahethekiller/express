import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_recruitment_pages extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    page_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    page_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    page_details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_recruitment_pages',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "page_id" },
        ]
      },
    ]
  });
  }
}
