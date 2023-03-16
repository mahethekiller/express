import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_med_claims extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    med_claim_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dpnttype: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sum_insured: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_med_claims',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "med_claim_id" },
        ]
      },
    ]
  });
  }
}
