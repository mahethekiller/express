import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_theme_settings extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    theme_settings_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fixed_layout: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    fixed_footer: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    boxed_layout: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    page_header: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    footer_layout: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    statistics_cards: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    statistics_cards_background: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    employee_cards: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    card_border_color: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    compact_menu: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    flipped_menu: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    right_side_icons: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    bordered_menu: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    form_design: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    is_semi_dark: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    semi_dark_color: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    top_nav_dark_color: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    menu_color_option: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    export_orgchart: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    export_file_title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    org_chart_layout: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    org_chart_zoom: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    org_chart_pan: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_theme_settings',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "theme_settings_id" },
        ]
      },
    ]
  });
  }
}
