import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_company_info extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    company_info_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    logo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    logo_second: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sign_in_logo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    favicon: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    website_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    starting_year: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    company_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    company_contact: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contact_person: {
      type: DataTypes.STRING(255),
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
    }
  }, {
    sequelize,
    tableName: 'xin_company_info',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "company_info_id" },
        ]
      },
    ]
  });
  }
}
