import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_covid_docs extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    infection_status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    infection_report: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    recovered_status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    recovery_report: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    infection_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    recovery_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    vaccine_status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    vaccine_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    dose1_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    dose2_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    dose1_doc: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    dose2_doc: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    updated_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xin_covid_docs',
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
