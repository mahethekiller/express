import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_payroll_custom_fields extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    payroll_custom_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    allow_custom_1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active_allow_1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    allow_custom_2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active_allow_2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    allow_custom_3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active_allow_3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    allow_custom_4: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active_allow_4: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    allow_custom_5: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active_allow_5: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deduct_custom_1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active_deduct_1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deduct_custom_2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active_deduct_2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deduct_custom_3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active_deduct_3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deduct_custom_4: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active_deduct_4: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deduct_custom_5: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active_deduct_5: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_payroll_custom_fields',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payroll_custom_id" },
        ]
      },
    ]
  });
  }
}
