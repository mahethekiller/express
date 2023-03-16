import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_immigration extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    immigration_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    document_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    document_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    document_file: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    issue_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    expiry_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    country_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    eligible_review_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_employee_immigration',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "immigration_id" },
        ]
      },
    ]
  });
  }
}
