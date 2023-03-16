import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_system_setting extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    setting_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    application_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    default_currency: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    default_currency_symbol: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    show_currency: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    currency_position: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    notification_position: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    notification_close_btn: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    notification_bar: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    enable_registration: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    login_with: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_format_xi: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    support_email: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    employee_manage_own_contact: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    employee_manage_own_profile: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    employee_manage_own_qualification: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    employee_manage_own_work_experience: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    employee_manage_own_document: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    employee_manage_own_picture: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    employee_manage_own_social: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    employee_manage_own_bank_account: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    enable_attendance: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    enable_clock_in_btn: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    enable_email_notification: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payroll_include_day_summary: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payroll_include_hour_summary: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payroll_include_leave_summary: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    enable_job_application_candidates: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    job_logo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payroll_logo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_payslip_password_generate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payslip_password_format: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    enable_profile_background: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    enable_policy_link: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    enable_layout: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    job_application_format: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    project_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    holiday_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    leave_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payslip_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    award_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    recruitment_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    announcement_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    training_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    task_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    compact_sidebar: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fixed_header: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fixed_sidebar: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    boxed_wrapper: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    layout_static: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    system_skin: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    animation_effect: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    animation_effect_modal: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    animation_effect_topmenu: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    footer_text: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    system_timezone: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    system_ip_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    system_ip_restriction: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    google_maps_api_key: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    module_recruitment: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    module_travel: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    module_performance: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    module_files: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    module_awards: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    module_training: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    module_inquiry: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    module_language: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    module_orgchart: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    module_accounting: {
      type: DataTypes.STRING(111),
      allowNull: false
    },
    module_events: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    module_goal_tracking: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    module_assets: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    module_projects_tasks: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    module_chat_box: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    enable_page_rendered: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    enable_current_year: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    employee_login_id: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    enable_auth_background: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    daily_quote: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    quote_author: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    expense_balance_left: {
      type: DataTypes.DECIMAL(50,2),
      allowNull: false,
      defaultValue: 0.00
    },
    hr_version: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    hr_release_date: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    default_from_email: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'xin_system_setting',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "setting_id" },
        ]
      },
    ]
  });
  }
}
