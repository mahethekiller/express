import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_immigration_log extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    immigration_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'xin_employee_immigration_log',
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
