import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_clients extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    client_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    client_username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    client_password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    client_profile: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contact_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(200),
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
    last_logout_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    last_login_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    last_login_ip: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_logged_in: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_clients',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "client_id" },
        ]
      },
    ]
  });
  }
}
