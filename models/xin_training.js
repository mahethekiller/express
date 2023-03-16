import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_training extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    training_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    training_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trainer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    finish_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    training_cost: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    training_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    performance: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_training',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "training_id" },
        ]
      },
    ]
  });
  }
}
