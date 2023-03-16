import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_awards extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    award_id: {
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
    award_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gift_item: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    cash_price: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    award_photo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    award_month_year: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    award_information: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_awards',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "award_id" },
        ]
      },
    ]
  });
  }
}
