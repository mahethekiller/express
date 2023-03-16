import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_award_type extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    award_type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    award_type: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_award_type',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "award_type_id" },
        ]
      },
    ]
  });
  }
}
