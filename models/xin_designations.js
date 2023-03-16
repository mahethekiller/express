import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_designations extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    designation_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    top_designation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    designation_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_designations',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "designation_id" },
        ]
      },
    ]
  });
  }
}
