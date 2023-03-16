import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_emp_health_ins extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    spouse_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    spouse_gender: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    spouse_dob: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    child1_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    child1_gender: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    child1_dob: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    child2_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    child2_dob: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    child2_gender: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    parent1_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    parent1_gender: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    parent1_dob: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    parent2_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    parent2_gender: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    parent2_dob: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    parent1_relation: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    parent2_relation: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(200),
      allowNull: false
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
    tableName: 'xin_emp_health_ins',
    timestamps: false,
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
