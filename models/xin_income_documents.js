import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_income_documents extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doc_type: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    file: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    financial_year: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "2019-2020"
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_income_documents',
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
