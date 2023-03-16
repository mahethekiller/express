import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_users extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_role: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "administrator"
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    company_logo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
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
    profile_photo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    profile_background: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contact_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(20),
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
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_users',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
