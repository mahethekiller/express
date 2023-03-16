import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_recruitment_subpages extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    subpages_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    page_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sub_page_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sub_page_details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_recruitment_subpages',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subpages_id" },
        ]
      },
    ]
  });
  }
}
