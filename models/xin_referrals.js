import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_referrals extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    referral_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    resume: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    contact_no: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    assigned_to: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Pending"
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_referrals',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "referral_id" },
        ]
      },
    ]
  });
  }
}
