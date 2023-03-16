import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_document_type extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    document_type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    document_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_document_type',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "document_type_id" },
        ]
      },
    ]
  });
  }
}
