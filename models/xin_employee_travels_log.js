import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_travels_log extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    travel_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    end_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    visit_purpose: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    visit_place: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    travel_mode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    arrangement_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    expected_budget: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    actual_budget: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
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
    tableName: 'xin_employee_travels_log',
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
