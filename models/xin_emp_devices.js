import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_emp_devices extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    device: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    service_tag: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    phone_no: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    return_status: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Pending"
    },
    return_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    last_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_updated_date: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xin_emp_devices',
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
