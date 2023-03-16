import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_trainers extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    trainer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contact_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    designation_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expertise: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'xin_trainers',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "trainer_id" },
        ]
      },
    ]
  });
  }
}
