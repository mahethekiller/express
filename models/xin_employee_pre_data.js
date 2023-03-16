import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class xin_employee_pre_data extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    interview_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "interview_id"
    },
    first_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    email_personal: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    date_of_birth_doc: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    contact_no: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    mother_tongue: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    age: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    place_of_birth: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    blood_group: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    marital_status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pan_number: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    aadhar_no: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    address_com: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_date: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    facebook_link: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    twitter_link: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    blogger_link: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    linkdedin_link: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    google_plus_link: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    instagram_link: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pinterest_link: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    youtube_link: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    father_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    father_mobile: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    father_gender: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    father_occupation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    father_age: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    father_qualification: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    father_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mother_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mother_mobile: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mother_gender: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mother_occupation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mother_age: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mother_qualification: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mother_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    brother_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    brother_mobile: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    brother_gender: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    brother_occupation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    brother_age: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    brother_qualification: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    brother_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sister_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sister_mobile: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sister_gender: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sister_occupation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sister_age: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sister_qualification: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sister_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    spouse_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    spouse_mobile: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    spouse_gender: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    spouse_occupation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    spouse_age: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    spouse_qualification: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    spouse_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    child1_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    child1_mobile: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    child1_gender: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    child1_occupation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    child1_age: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    child1_qualification: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    child1_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    child2_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    child2_mobile: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    child2_gender: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    child2_occupation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    child2_age: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    child2_qualification: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    child2_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    emergency_contact_relation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emergency_contact_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emergency_contact_gender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emergency_contact_mobile: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emergency_contact_age: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emergency_contact_occupation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emergency_contact_qualification: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emergency_contact_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    official_contact_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    vehicle_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    city_temp: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    state_temp: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    pin_temp: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    pincode: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    health_ins_opted: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pf_opted: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    vehicle_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    paytm_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    skype_id: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    acceptance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    acceptance_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    acceptance_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    acceptance_basic: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    acceptance_father: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    acceptance_mother: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    acceptance_emer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    acceptance_bro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    acceptance_sis: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    acceptance_c1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    acceptance_c2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    acceptance_social: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    acceptance_spouse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    data_update_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'xin_employee_pre_data',
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
      {
        name: "interview_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "interview_id" },
        ]
      },
    ]
  });
  }
}
