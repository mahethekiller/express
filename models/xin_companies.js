import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_companies extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    company_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    trading_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    registration_no: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    government_tax: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contact_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    website_url: {
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
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_companies',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "company_id" },
        ]
      },
    ]
  });
  }
}
