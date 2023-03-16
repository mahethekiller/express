import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_announcements extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    announcement_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    announcement_type: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "announcement"
    },
    acceptance_message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    start_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    end_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    published_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_announcements',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "announcement_id" },
        ]
      },
    ]
  });
  }
}
