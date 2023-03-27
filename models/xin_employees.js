import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class xin_employees extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        user_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        employee_id: {
          type: DataTypes.STRING(200),
          allowNull: false,
          unique: "employee_id",
        },
        card_no: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        office_shift_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        first_name: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        last_name: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        username: {
          type: DataTypes.STRING(200),
          allowNull: false,
          unique: "username",
        },
        email: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        date_of_birth: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        gender: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        e_status: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        user_role_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        department_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        sub_department: {
          type: DataTypes.STRING(250),
          allowNull: false,
          defaultValue: "",
        },
        designation_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        manager_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        company_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        salary_template: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        hourly_grade_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        monthly_grade_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        date_of_joining: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        date_of_leaving: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        marital_status: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        salary: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        address: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        profile_picture: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        profile_background: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        resume: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        skype_id: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        contact_no: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        facebook_link: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        twitter_link: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        blogger_link: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        linkdedin_link: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        google_plus_link: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        instagram_link: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        pinterest_link: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        youtube_link: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        reporting_location: {
          type: DataTypes.STRING(255),
          allowNull: false,
          defaultValue: "HO",
        },
        employee_source: {
          type: DataTypes.STRING(255),
          allowNull: false,
          defaultValue: "Recruiter",
        },
        ref_emp_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        probation_status: {
          type: DataTypes.STRING(255),
          allowNull: false,
          defaultValue: "Probation",
        },
        probation_end_date: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        resign_date: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        confirmation_date: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        rejoin_emp_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        has_rejoined: {
          type: DataTypes.STRING(20),
          allowNull: false,
          defaultValue: "no",
        },
        is_active: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          comment: "1:Active 2:Terminated 3:Left 4:Abscond 5:Disable 0:Resigned",
        },
        last_login_date: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        last_logout_date: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        last_login_ip: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        is_logged_in: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        online_status: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        created_by: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        email_personal: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        date_of_birth_doc: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        mother_tongue: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        age: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        place_of_birth: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        blood_group: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        pan_number: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        aadhar_no: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        category: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        address_com: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        earned_leave: {
          type: DataTypes.STRING(50),
          allowNull: false,
          defaultValue: "0",
        },
        casual_leave: {
          type: DataTypes.STRING(50),
          allowNull: false,
          defaultValue: "0",
        },
        other_leaves_taken_days: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        paytm_no: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        vehicle_no: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        pf_opted: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        health_ins_opted: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        official_contact_no: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        vehicle_type: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        city_temp: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        city: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        state_temp: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        state: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        pin_temp: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        pincode: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        corporate_bank_account: {
          type: DataTypes.STRING(50),
          allowNull: false,
          defaultValue: "no",
        },
        prob_mail_status: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        employment_type: {
          type: DataTypes.STRING(200),
          allowNull: false,
          defaultValue: "permanent",
        },
        experience: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
        kra_doc: {
          type: DataTypes.STRING(200),
          allowNull: false,
          defaultValue: "",
        },
        refreshToken: {
          type: DataTypes.STRING(500),
          allowNull: true,
          defaultValue: "",
        },
        notice_period: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        tableName: "xin_employees",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "user_id" }],
          },
          {
            name: "employee_id",
            unique: true,
            using: "BTREE",
            fields: [{ name: "employee_id" }],
          },
          {
            name: "username",
            unique: true,
            using: "BTREE",
            fields: [{ name: "username" }],
          },
        ],
      }
    );
  }
}
