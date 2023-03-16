import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_office_location extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    location_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location_head: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location_manager: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fax: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address_1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address_2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    zipcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    country: {
      type: DataTypes.INTEGER,
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
    tableName: 'xin_office_location',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "location_id" },
        ]
      },
    ]
  });
  }
}
