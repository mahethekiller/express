import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_termination_type extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    termination_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_termination_type',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "termination_type_id" },
        ]
      },
    ]
  });
  }
}
