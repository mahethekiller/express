import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_emp_certificate_claim extends Model {
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
    certificate_name: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    certificate_doc: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    from_date: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    to_date: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    institute: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    reimburse_amount_req: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    approved_amt: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    issued_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    last_updated: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_emp_certificate_claim',
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
