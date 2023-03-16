import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_contacts_log extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contact_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    relation: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_primary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_dependent: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contact_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    work_phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    work_phone_extension: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mobile_phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    home_phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    work_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    personal_email: {
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
      type: DataTypes.STRING(255),
      allowNull: false
    },
    age: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    occupation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    qualification: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employee_contacts_log',
    timestamps: true,
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
