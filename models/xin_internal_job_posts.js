import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_internal_job_posts extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    post_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    post_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    vacancies: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    show_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_internal_job_posts',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "post_id" },
        ]
      },
    ]
  });
  }
}
