import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_training_types extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    training_type_id: {
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
    tableName: 'xin_training_types',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "training_type_id" },
        ]
      },
    ]
  });
  }
}
