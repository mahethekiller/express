import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_user_roles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    role_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    role_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    role_access: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    role_resources: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_user_roles',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
  }
}
