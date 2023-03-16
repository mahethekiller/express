import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _announcement_submissions from "./announcement_submissions.js";
import _child_hood_images from "./child_hood_images.js";
import _ci_sessions from "./ci_sessions.js";
import _conference_room_bookings from "./conference_room_bookings.js";
import _designation_change_details from "./designation_change_details.js";
import _emp_vendors from "./emp_vendors.js";
import _rejoin_emp_data from "./rejoin_emp_data.js";
import _weight_loss from "./weight_loss.js";
import _xin_admin_tickets from "./xin_admin_tickets.js";
import _xin_advance_salaries from "./xin_advance_salaries.js";
import _xin_albums from "./xin_albums.js";
import _xin_announcements from "./xin_announcements.js";
import _xin_assets from "./xin_assets.js";
import _xin_assets_categories from "./xin_assets_categories.js";
import _xin_attendance_time from "./xin_attendance_time.js";
import _xin_award_type from "./xin_award_type.js";
import _xin_awards from "./xin_awards.js";
import _xin_chat_messages from "./xin_chat_messages.js";
import _xin_clients from "./xin_clients.js";
import _xin_clocking from "./xin_clocking.js";
import _xin_companies from "./xin_companies.js";
import _xin_company_info from "./xin_company_info.js";
import _xin_company_policy from "./xin_company_policy.js";
import _xin_company_type from "./xin_company_type.js";
import _xin_contract_type from "./xin_contract_type.js";
import _xin_countries from "./xin_countries.js";
import _xin_covid_docs from "./xin_covid_docs.js";
import _xin_currencies from "./xin_currencies.js";
import _xin_database_backup from "./xin_database_backup.js";
import _xin_departments from "./xin_departments.js";
import _xin_designations from "./xin_designations.js";
import _xin_disabled_employees from "./xin_disabled_employees.js";
import _xin_document_type from "./xin_document_type.js";
import _xin_documents from "./xin_documents.js";
import _xin_documents_intern from "./xin_documents_intern.js";
import _xin_email_history from "./xin_email_history.js";
import _xin_email_template from "./xin_email_template.js";
import _xin_emp_certificate_claim from "./xin_emp_certificate_claim.js";
import _xin_emp_devices from "./xin_emp_devices.js";
import _xin_emp_health_ins from "./xin_emp_health_ins.js";
import _xin_emp_today_attendance from "./xin_emp_today_attendance.js";
import _xin_emp_verify from "./xin_emp_verify.js";
import _xin_emp_wishes from "./xin_emp_wishes.js";
import _xin_employee_bankaccount from "./xin_employee_bankaccount.js";
import _xin_employee_bankaccount_log from "./xin_employee_bankaccount_log.js";
import _xin_employee_complaints from "./xin_employee_complaints.js";
import _xin_employee_complaints_log from "./xin_employee_complaints_log.js";
import _xin_employee_contacts from "./xin_employee_contacts.js";
import _xin_employee_contacts_log from "./xin_employee_contacts_log.js";
import _xin_employee_contract from "./xin_employee_contract.js";
import _xin_employee_contract_log from "./xin_employee_contract_log.js";
import _xin_employee_data_updates from "./xin_employee_data_updates.js";
import _xin_employee_documents from "./xin_employee_documents.js";
import _xin_employee_documents_log from "./xin_employee_documents_log.js";
import _xin_employee_exit from "./xin_employee_exit.js";
import _xin_employee_exit_log from "./xin_employee_exit_log.js";
import _xin_employee_exit_type from "./xin_employee_exit_type.js";
import _xin_employee_exit_type_log from "./xin_employee_exit_type_log.js";
import _xin_employee_immigration from "./xin_employee_immigration.js";
import _xin_employee_immigration_log from "./xin_employee_immigration_log.js";
import _xin_employee_leave from "./xin_employee_leave.js";
import _xin_employee_leave_log from "./xin_employee_leave_log.js";
import _xin_employee_location from "./xin_employee_location.js";
import _xin_employee_location_log from "./xin_employee_location_log.js";
import _xin_employee_pre_data from "./xin_employee_pre_data.js";
import _xin_employee_promotions from "./xin_employee_promotions.js";
import _xin_employee_promotions_log from "./xin_employee_promotions_log.js";
import _xin_employee_qualification from "./xin_employee_qualification.js";
import _xin_employee_qualification_log from "./xin_employee_qualification_log.js";
import _xin_employee_resignations from "./xin_employee_resignations.js";
import _xin_employee_resignations_log from "./xin_employee_resignations_log.js";
import _xin_employee_salary from "./xin_employee_salary.js";
import _xin_employee_shift from "./xin_employee_shift.js";
import _xin_employee_shift_log from "./xin_employee_shift_log.js";
import _xin_employee_terminations from "./xin_employee_terminations.js";
import _xin_employee_terminations_log from "./xin_employee_terminations_log.js";
import _xin_employee_transfer from "./xin_employee_transfer.js";
import _xin_employee_transfer_log from "./xin_employee_transfer_log.js";
import _xin_employee_travels from "./xin_employee_travels.js";
import _xin_employee_travels_log from "./xin_employee_travels_log.js";
import _xin_employee_warnings from "./xin_employee_warnings.js";
import _xin_employee_warnings_log from "./xin_employee_warnings_log.js";
import _xin_employee_work_experience from "./xin_employee_work_experience.js";
import _xin_employee_work_experience_log from "./xin_employee_work_experience_log.js";
import _xin_employees from "./xin_employees.js";
import _xin_employees_log from "./xin_employees_log.js";
import _xin_employees_temp from "./xin_employees_temp.js";
import _xin_events from "./xin_events.js";
import _xin_expense_type from "./xin_expense_type.js";
import _xin_expenses from "./xin_expenses.js";
import _xin_file_manager from "./xin_file_manager.js";
import _xin_file_manager_settings from "./xin_file_manager_settings.js";
import _xin_finance_bankcash from "./xin_finance_bankcash.js";
import _xin_finance_deposit from "./xin_finance_deposit.js";
import _xin_finance_expense from "./xin_finance_expense.js";
import _xin_finance_payees from "./xin_finance_payees.js";
import _xin_finance_payers from "./xin_finance_payers.js";
import _xin_finance_transactions from "./xin_finance_transactions.js";
import _xin_finance_transfer from "./xin_finance_transfer.js";
import _xin_goal_tracking from "./xin_goal_tracking.js";
import _xin_goal_tracking_type from "./xin_goal_tracking_type.js";
import _xin_holidays from "./xin_holidays.js";
import _xin_hourly_templates from "./xin_hourly_templates.js";
import _xin_hr_tickets from "./xin_hr_tickets.js";
import _xin_hrsale_invoices from "./xin_hrsale_invoices.js";
import _xin_hrsale_invoices_items from "./xin_hrsale_invoices_items.js";
import _xin_images from "./xin_images.js";
import _xin_income_categories from "./xin_income_categories.js";
import _xin_income_documents from "./xin_income_documents.js";
import _xin_internal_job_posts from "./xin_internal_job_posts.js";
import _xin_interns from "./xin_interns.js";
import _xin_interview_reschedule from "./xin_interview_reschedule.js";
import _xin_interview_salary_templates from "./xin_interview_salary_templates.js";
import _xin_interviews from "./xin_interviews.js";
import _xin_interviews_log from "./xin_interviews_log.js";
import _xin_job_applications from "./xin_job_applications.js";
import _xin_job_categories from "./xin_job_categories.js";
import _xin_job_codes from "./xin_job_codes.js";
import _xin_job_interviews from "./xin_job_interviews.js";
import _xin_job_interviews_log from "./xin_job_interviews_log.js";
import _xin_job_requests from "./xin_job_requests.js";
import _xin_job_type from "./xin_job_type.js";
import _xin_jobs from "./xin_jobs.js";
import _xin_languages from "./xin_languages.js";
import _xin_leave_applications from "./xin_leave_applications.js";
import _xin_leave_type from "./xin_leave_type.js";
import _xin_make_payment from "./xin_make_payment.js";
import _xin_med_claims from "./xin_med_claims.js";
import _xin_meetings from "./xin_meetings.js";
import _xin_office_location from "./xin_office_location.js";
import _xin_office_shift from "./xin_office_shift.js";
import _xin_payment_method from "./xin_payment_method.js";
import _xin_payroll_custom_fields from "./xin_payroll_custom_fields.js";
import _xin_performance_appraisal from "./xin_performance_appraisal.js";
import _xin_performance_indicator from "./xin_performance_indicator.js";
import _xin_projects from "./xin_projects.js";
import _xin_projects_attachment from "./xin_projects_attachment.js";
import _xin_projects_bugs from "./xin_projects_bugs.js";
import _xin_projects_discussion from "./xin_projects_discussion.js";
import _xin_qualification_education_level from "./xin_qualification_education_level.js";
import _xin_qualification_language from "./xin_qualification_language.js";
import _xin_qualification_skill from "./xin_qualification_skill.js";
import _xin_recruitment_pages from "./xin_recruitment_pages.js";
import _xin_recruitment_subpages from "./xin_recruitment_subpages.js";
import _xin_referrals from "./xin_referrals.js";
import _xin_salary_templates from "./xin_salary_templates.js";
import _xin_select_fields from "./xin_select_fields.js";
import _xin_sub_departments from "./xin_sub_departments.js";
import _xin_support_ticket_files from "./xin_support_ticket_files.js";
import _xin_support_tickets from "./xin_support_tickets.js";
import _xin_system_setting from "./xin_system_setting.js";
import _xin_tasks from "./xin_tasks.js";
import _xin_tasks_attachment from "./xin_tasks_attachment.js";
import _xin_tasks_comments from "./xin_tasks_comments.js";
import _xin_tax_types from "./xin_tax_types.js";
import _xin_termination_type from "./xin_termination_type.js";
import _xin_theme_settings from "./xin_theme_settings.js";
import _xin_tickets_attachment from "./xin_tickets_attachment.js";
import _xin_tickets_comments from "./xin_tickets_comments.js";
import _xin_trainers from "./xin_trainers.js";
import _xin_training from "./xin_training.js";
import _xin_training_types from "./xin_training_types.js";
import _xin_travel_arrangement_type from "./xin_travel_arrangement_type.js";
import _xin_user_roles from "./xin_user_roles.js";
import _xin_users from "./xin_users.js";
import _xin_warning_type from "./xin_warning_type.js";

export default function initModels(sequelize) {
  const announcement_submissions = _announcement_submissions.init(sequelize, DataTypes);
  const child_hood_images = _child_hood_images.init(sequelize, DataTypes);
  const ci_sessions = _ci_sessions.init(sequelize, DataTypes);
  const conference_room_bookings = _conference_room_bookings.init(sequelize, DataTypes);
  const designation_change_details = _designation_change_details.init(sequelize, DataTypes);
  const emp_vendors = _emp_vendors.init(sequelize, DataTypes);
  const rejoin_emp_data = _rejoin_emp_data.init(sequelize, DataTypes);
  const weight_loss = _weight_loss.init(sequelize, DataTypes);
  const xin_admin_tickets = _xin_admin_tickets.init(sequelize, DataTypes);
  const xin_advance_salaries = _xin_advance_salaries.init(sequelize, DataTypes);
  const xin_albums = _xin_albums.init(sequelize, DataTypes);
  const xin_announcements = _xin_announcements.init(sequelize, DataTypes);
  const xin_assets = _xin_assets.init(sequelize, DataTypes);
  const xin_assets_categories = _xin_assets_categories.init(sequelize, DataTypes);
  const xin_attendance_time = _xin_attendance_time.init(sequelize, DataTypes);
  const xin_award_type = _xin_award_type.init(sequelize, DataTypes);
  const xin_awards = _xin_awards.init(sequelize, DataTypes);
  const xin_chat_messages = _xin_chat_messages.init(sequelize, DataTypes);
  const xin_clients = _xin_clients.init(sequelize, DataTypes);
  const xin_clocking = _xin_clocking.init(sequelize, DataTypes);
  const xin_companies = _xin_companies.init(sequelize, DataTypes);
  const xin_company_info = _xin_company_info.init(sequelize, DataTypes);
  const xin_company_policy = _xin_company_policy.init(sequelize, DataTypes);
  const xin_company_type = _xin_company_type.init(sequelize, DataTypes);
  const xin_contract_type = _xin_contract_type.init(sequelize, DataTypes);
  const xin_countries = _xin_countries.init(sequelize, DataTypes);
  const xin_covid_docs = _xin_covid_docs.init(sequelize, DataTypes);
  const xin_currencies = _xin_currencies.init(sequelize, DataTypes);
  const xin_database_backup = _xin_database_backup.init(sequelize, DataTypes);
  const xin_departments = _xin_departments.init(sequelize, DataTypes);
  const xin_designations = _xin_designations.init(sequelize, DataTypes);
  const xin_disabled_employees = _xin_disabled_employees.init(sequelize, DataTypes);
  const xin_document_type = _xin_document_type.init(sequelize, DataTypes);
  const xin_documents = _xin_documents.init(sequelize, DataTypes);
  const xin_documents_intern = _xin_documents_intern.init(sequelize, DataTypes);
  const xin_email_history = _xin_email_history.init(sequelize, DataTypes);
  const xin_email_template = _xin_email_template.init(sequelize, DataTypes);
  const xin_emp_certificate_claim = _xin_emp_certificate_claim.init(sequelize, DataTypes);
  const xin_emp_devices = _xin_emp_devices.init(sequelize, DataTypes);
  const xin_emp_health_ins = _xin_emp_health_ins.init(sequelize, DataTypes);
  const xin_emp_today_attendance = _xin_emp_today_attendance.init(sequelize, DataTypes);
  const xin_emp_verify = _xin_emp_verify.init(sequelize, DataTypes);
  const xin_emp_wishes = _xin_emp_wishes.init(sequelize, DataTypes);
  const xin_employee_bankaccount = _xin_employee_bankaccount.init(sequelize, DataTypes);
  const xin_employee_bankaccount_log = _xin_employee_bankaccount_log.init(sequelize, DataTypes);
  const xin_employee_complaints = _xin_employee_complaints.init(sequelize, DataTypes);
  const xin_employee_complaints_log = _xin_employee_complaints_log.init(sequelize, DataTypes);
  const xin_employee_contacts = _xin_employee_contacts.init(sequelize, DataTypes);
  const xin_employee_contacts_log = _xin_employee_contacts_log.init(sequelize, DataTypes);
  const xin_employee_contract = _xin_employee_contract.init(sequelize, DataTypes);
  const xin_employee_contract_log = _xin_employee_contract_log.init(sequelize, DataTypes);
  const xin_employee_data_updates = _xin_employee_data_updates.init(sequelize, DataTypes);
  const xin_employee_documents = _xin_employee_documents.init(sequelize, DataTypes);
  const xin_employee_documents_log = _xin_employee_documents_log.init(sequelize, DataTypes);
  const xin_employee_exit = _xin_employee_exit.init(sequelize, DataTypes);
  const xin_employee_exit_log = _xin_employee_exit_log.init(sequelize, DataTypes);
  const xin_employee_exit_type = _xin_employee_exit_type.init(sequelize, DataTypes);
  const xin_employee_exit_type_log = _xin_employee_exit_type_log.init(sequelize, DataTypes);
  const xin_employee_immigration = _xin_employee_immigration.init(sequelize, DataTypes);
  const xin_employee_immigration_log = _xin_employee_immigration_log.init(sequelize, DataTypes);
  const xin_employee_leave = _xin_employee_leave.init(sequelize, DataTypes);
  const xin_employee_leave_log = _xin_employee_leave_log.init(sequelize, DataTypes);
  const xin_employee_location = _xin_employee_location.init(sequelize, DataTypes);
  const xin_employee_location_log = _xin_employee_location_log.init(sequelize, DataTypes);
  const xin_employee_pre_data = _xin_employee_pre_data.init(sequelize, DataTypes);
  const xin_employee_promotions = _xin_employee_promotions.init(sequelize, DataTypes);
  const xin_employee_promotions_log = _xin_employee_promotions_log.init(sequelize, DataTypes);
  const xin_employee_qualification = _xin_employee_qualification.init(sequelize, DataTypes);
  const xin_employee_qualification_log = _xin_employee_qualification_log.init(sequelize, DataTypes);
  const xin_employee_resignations = _xin_employee_resignations.init(sequelize, DataTypes);
  const xin_employee_resignations_log = _xin_employee_resignations_log.init(sequelize, DataTypes);
  const xin_employee_salary = _xin_employee_salary.init(sequelize, DataTypes);
  const xin_employee_shift = _xin_employee_shift.init(sequelize, DataTypes);
  const xin_employee_shift_log = _xin_employee_shift_log.init(sequelize, DataTypes);
  const xin_employee_terminations = _xin_employee_terminations.init(sequelize, DataTypes);
  const xin_employee_terminations_log = _xin_employee_terminations_log.init(sequelize, DataTypes);
  const xin_employee_transfer = _xin_employee_transfer.init(sequelize, DataTypes);
  const xin_employee_transfer_log = _xin_employee_transfer_log.init(sequelize, DataTypes);
  const xin_employee_travels = _xin_employee_travels.init(sequelize, DataTypes);
  const xin_employee_travels_log = _xin_employee_travels_log.init(sequelize, DataTypes);
  const xin_employee_warnings = _xin_employee_warnings.init(sequelize, DataTypes);
  const xin_employee_warnings_log = _xin_employee_warnings_log.init(sequelize, DataTypes);
  const xin_employee_work_experience = _xin_employee_work_experience.init(sequelize, DataTypes);
  const xin_employee_work_experience_log = _xin_employee_work_experience_log.init(sequelize, DataTypes);
  const xin_employees = _xin_employees.init(sequelize, DataTypes);
  const xin_employees_log = _xin_employees_log.init(sequelize, DataTypes);
  const xin_employees_temp = _xin_employees_temp.init(sequelize, DataTypes);
  const xin_events = _xin_events.init(sequelize, DataTypes);
  const xin_expense_type = _xin_expense_type.init(sequelize, DataTypes);
  const xin_expenses = _xin_expenses.init(sequelize, DataTypes);
  const xin_file_manager = _xin_file_manager.init(sequelize, DataTypes);
  const xin_file_manager_settings = _xin_file_manager_settings.init(sequelize, DataTypes);
  const xin_finance_bankcash = _xin_finance_bankcash.init(sequelize, DataTypes);
  const xin_finance_deposit = _xin_finance_deposit.init(sequelize, DataTypes);
  const xin_finance_expense = _xin_finance_expense.init(sequelize, DataTypes);
  const xin_finance_payees = _xin_finance_payees.init(sequelize, DataTypes);
  const xin_finance_payers = _xin_finance_payers.init(sequelize, DataTypes);
  const xin_finance_transactions = _xin_finance_transactions.init(sequelize, DataTypes);
  const xin_finance_transfer = _xin_finance_transfer.init(sequelize, DataTypes);
  const xin_goal_tracking = _xin_goal_tracking.init(sequelize, DataTypes);
  const xin_goal_tracking_type = _xin_goal_tracking_type.init(sequelize, DataTypes);
  const xin_holidays = _xin_holidays.init(sequelize, DataTypes);
  const xin_hourly_templates = _xin_hourly_templates.init(sequelize, DataTypes);
  const xin_hr_tickets = _xin_hr_tickets.init(sequelize, DataTypes);
  const xin_hrsale_invoices = _xin_hrsale_invoices.init(sequelize, DataTypes);
  const xin_hrsale_invoices_items = _xin_hrsale_invoices_items.init(sequelize, DataTypes);
  const xin_images = _xin_images.init(sequelize, DataTypes);
  const xin_income_categories = _xin_income_categories.init(sequelize, DataTypes);
  const xin_income_documents = _xin_income_documents.init(sequelize, DataTypes);
  const xin_internal_job_posts = _xin_internal_job_posts.init(sequelize, DataTypes);
  const xin_interns = _xin_interns.init(sequelize, DataTypes);
  const xin_interview_reschedule = _xin_interview_reschedule.init(sequelize, DataTypes);
  const xin_interview_salary_templates = _xin_interview_salary_templates.init(sequelize, DataTypes);
  const xin_interviews = _xin_interviews.init(sequelize, DataTypes);
  const xin_interviews_log = _xin_interviews_log.init(sequelize, DataTypes);
  const xin_job_applications = _xin_job_applications.init(sequelize, DataTypes);
  const xin_job_categories = _xin_job_categories.init(sequelize, DataTypes);
  const xin_job_codes = _xin_job_codes.init(sequelize, DataTypes);
  const xin_job_interviews = _xin_job_interviews.init(sequelize, DataTypes);
  const xin_job_interviews_log = _xin_job_interviews_log.init(sequelize, DataTypes);
  const xin_job_requests = _xin_job_requests.init(sequelize, DataTypes);
  const xin_job_type = _xin_job_type.init(sequelize, DataTypes);
  const xin_jobs = _xin_jobs.init(sequelize, DataTypes);
  const xin_languages = _xin_languages.init(sequelize, DataTypes);
  const xin_leave_applications = _xin_leave_applications.init(sequelize, DataTypes);
  const xin_leave_type = _xin_leave_type.init(sequelize, DataTypes);
  const xin_make_payment = _xin_make_payment.init(sequelize, DataTypes);
  const xin_med_claims = _xin_med_claims.init(sequelize, DataTypes);
  const xin_meetings = _xin_meetings.init(sequelize, DataTypes);
  const xin_office_location = _xin_office_location.init(sequelize, DataTypes);
  const xin_office_shift = _xin_office_shift.init(sequelize, DataTypes);
  const xin_payment_method = _xin_payment_method.init(sequelize, DataTypes);
  const xin_payroll_custom_fields = _xin_payroll_custom_fields.init(sequelize, DataTypes);
  const xin_performance_appraisal = _xin_performance_appraisal.init(sequelize, DataTypes);
  const xin_performance_indicator = _xin_performance_indicator.init(sequelize, DataTypes);
  const xin_projects = _xin_projects.init(sequelize, DataTypes);
  const xin_projects_attachment = _xin_projects_attachment.init(sequelize, DataTypes);
  const xin_projects_bugs = _xin_projects_bugs.init(sequelize, DataTypes);
  const xin_projects_discussion = _xin_projects_discussion.init(sequelize, DataTypes);
  const xin_qualification_education_level = _xin_qualification_education_level.init(sequelize, DataTypes);
  const xin_qualification_language = _xin_qualification_language.init(sequelize, DataTypes);
  const xin_qualification_skill = _xin_qualification_skill.init(sequelize, DataTypes);
  const xin_recruitment_pages = _xin_recruitment_pages.init(sequelize, DataTypes);
  const xin_recruitment_subpages = _xin_recruitment_subpages.init(sequelize, DataTypes);
  const xin_referrals = _xin_referrals.init(sequelize, DataTypes);
  const xin_salary_templates = _xin_salary_templates.init(sequelize, DataTypes);
  const xin_select_fields = _xin_select_fields.init(sequelize, DataTypes);
  const xin_sub_departments = _xin_sub_departments.init(sequelize, DataTypes);
  const xin_support_ticket_files = _xin_support_ticket_files.init(sequelize, DataTypes);
  const xin_support_tickets = _xin_support_tickets.init(sequelize, DataTypes);
  const xin_system_setting = _xin_system_setting.init(sequelize, DataTypes);
  const xin_tasks = _xin_tasks.init(sequelize, DataTypes);
  const xin_tasks_attachment = _xin_tasks_attachment.init(sequelize, DataTypes);
  const xin_tasks_comments = _xin_tasks_comments.init(sequelize, DataTypes);
  const xin_tax_types = _xin_tax_types.init(sequelize, DataTypes);
  const xin_termination_type = _xin_termination_type.init(sequelize, DataTypes);
  const xin_theme_settings = _xin_theme_settings.init(sequelize, DataTypes);
  const xin_tickets_attachment = _xin_tickets_attachment.init(sequelize, DataTypes);
  const xin_tickets_comments = _xin_tickets_comments.init(sequelize, DataTypes);
  const xin_trainers = _xin_trainers.init(sequelize, DataTypes);
  const xin_training = _xin_training.init(sequelize, DataTypes);
  const xin_training_types = _xin_training_types.init(sequelize, DataTypes);
  const xin_travel_arrangement_type = _xin_travel_arrangement_type.init(sequelize, DataTypes);
  const xin_user_roles = _xin_user_roles.init(sequelize, DataTypes);
  const xin_users = _xin_users.init(sequelize, DataTypes);
  const xin_warning_type = _xin_warning_type.init(sequelize, DataTypes);

  return {
    announcement_submissions,
    child_hood_images,
    ci_sessions,
    conference_room_bookings,
    designation_change_details,
    emp_vendors,
    rejoin_emp_data,
    weight_loss,
    xin_admin_tickets,
    xin_advance_salaries,
    xin_albums,
    xin_announcements,
    xin_assets,
    xin_assets_categories,
    xin_attendance_time,
    xin_award_type,
    xin_awards,
    xin_chat_messages,
    xin_clients,
    xin_clocking,
    xin_companies,
    xin_company_info,
    xin_company_policy,
    xin_company_type,
    xin_contract_type,
    xin_countries,
    xin_covid_docs,
    xin_currencies,
    xin_database_backup,
    xin_departments,
    xin_designations,
    xin_disabled_employees,
    xin_document_type,
    xin_documents,
    xin_documents_intern,
    xin_email_history,
    xin_email_template,
    xin_emp_certificate_claim,
    xin_emp_devices,
    xin_emp_health_ins,
    xin_emp_today_attendance,
    xin_emp_verify,
    xin_emp_wishes,
    xin_employee_bankaccount,
    xin_employee_bankaccount_log,
    xin_employee_complaints,
    xin_employee_complaints_log,
    xin_employee_contacts,
    xin_employee_contacts_log,
    xin_employee_contract,
    xin_employee_contract_log,
    xin_employee_data_updates,
    xin_employee_documents,
    xin_employee_documents_log,
    xin_employee_exit,
    xin_employee_exit_log,
    xin_employee_exit_type,
    xin_employee_exit_type_log,
    xin_employee_immigration,
    xin_employee_immigration_log,
    xin_employee_leave,
    xin_employee_leave_log,
    xin_employee_location,
    xin_employee_location_log,
    xin_employee_pre_data,
    xin_employee_promotions,
    xin_employee_promotions_log,
    xin_employee_qualification,
    xin_employee_qualification_log,
    xin_employee_resignations,
    xin_employee_resignations_log,
    xin_employee_salary,
    xin_employee_shift,
    xin_employee_shift_log,
    xin_employee_terminations,
    xin_employee_terminations_log,
    xin_employee_transfer,
    xin_employee_transfer_log,
    xin_employee_travels,
    xin_employee_travels_log,
    xin_employee_warnings,
    xin_employee_warnings_log,
    xin_employee_work_experience,
    xin_employee_work_experience_log,
    xin_employees,
    xin_employees_log,
    xin_employees_temp,
    xin_events,
    xin_expense_type,
    xin_expenses,
    xin_file_manager,
    xin_file_manager_settings,
    xin_finance_bankcash,
    xin_finance_deposit,
    xin_finance_expense,
    xin_finance_payees,
    xin_finance_payers,
    xin_finance_transactions,
    xin_finance_transfer,
    xin_goal_tracking,
    xin_goal_tracking_type,
    xin_holidays,
    xin_hourly_templates,
    xin_hr_tickets,
    xin_hrsale_invoices,
    xin_hrsale_invoices_items,
    xin_images,
    xin_income_categories,
    xin_income_documents,
    xin_internal_job_posts,
    xin_interns,
    xin_interview_reschedule,
    xin_interview_salary_templates,
    xin_interviews,
    xin_interviews_log,
    xin_job_applications,
    xin_job_categories,
    xin_job_codes,
    xin_job_interviews,
    xin_job_interviews_log,
    xin_job_requests,
    xin_job_type,
    xin_jobs,
    xin_languages,
    xin_leave_applications,
    xin_leave_type,
    xin_make_payment,
    xin_med_claims,
    xin_meetings,
    xin_office_location,
    xin_office_shift,
    xin_payment_method,
    xin_payroll_custom_fields,
    xin_performance_appraisal,
    xin_performance_indicator,
    xin_projects,
    xin_projects_attachment,
    xin_projects_bugs,
    xin_projects_discussion,
    xin_qualification_education_level,
    xin_qualification_language,
    xin_qualification_skill,
    xin_recruitment_pages,
    xin_recruitment_subpages,
    xin_referrals,
    xin_salary_templates,
    xin_select_fields,
    xin_sub_departments,
    xin_support_ticket_files,
    xin_support_tickets,
    xin_system_setting,
    xin_tasks,
    xin_tasks_attachment,
    xin_tasks_comments,
    xin_tax_types,
    xin_termination_type,
    xin_theme_settings,
    xin_tickets_attachment,
    xin_tickets_comments,
    xin_trainers,
    xin_training,
    xin_training_types,
    xin_travel_arrangement_type,
    xin_user_roles,
    xin_users,
    xin_warning_type,
  };
}
