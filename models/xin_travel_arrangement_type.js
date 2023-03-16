import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_travel_arrangement_type extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    arrangement_type_id: {
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
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_travel_arrangement_type',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "arrangement_type_id" },
        ]
      },
    ]
  });
  }
}
