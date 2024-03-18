import * as Yup from "yup";

export const personalInfoValidationSchema = Yup.object().shape({
  personalInfo: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    designation: Yup.string().required('Designation is required'),
    mobile: Yup.string().required('Mobile number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    // dob: Yup.date().format('YYYY-MM-DD').required('Date of birth is required'), // Specify the date format
    githubLink: Yup.string().url('Invalid GitHub link').required('GitHub link is required'),
    address: Yup.string().required('Address is required'),
  })
});

export const educationInfoValidationSchema = Yup.object().shape({
  educationInfo: Yup.object().shape({
    education: Yup.string().required("Education is required"),
    courseName: Yup.string().required("Course name is required"),
    college: Yup.string().required("College name is required"),
    startDate: Yup.date().required("Start date is required"),
    endDate: Yup.date()
      .required("End date is required")
      .min(Yup.ref("startDate"), "End date must be after start date"),
  }),
});

export const workExpInfoValidationSchema = Yup.object().shape({
  workExperience: Yup.object().shape({
    designation: Yup.string().required("Designation is required"),
    companyName: Yup.string().required("Company name is required"),
    startDate: Yup.date().required("Start date is required"),
    endDate: Yup.date()
      .required("End date is required")
      .min(Yup.ref("startDate"), "End date must be after start date"),
  }),
});

export const skillsInfoValidationSchema = Yup.object().shape({
  skillInfo: Yup.object().shape({
    skillName: Yup.string().required("Skill name is required"),
  }),
});



// Define combined validation schema
// export const combinedValidationSchema = Yup.object().shape({
//   personalInfo: Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     designation: Yup.string().required("Designation is required"),
//     mobile: Yup.string().required("Mobile number is required"),
//     email: Yup.string().email("Invalid email address").required("Email is required"),
//     dob: Yup.date().required("Date of birth is required"),
//     githubLink: Yup.string().url("Invalid GitHub link").required("GitHub link is required"),
//     address: Yup.string().required("Address is required"),
//   }),
//   educationInfo: Yup.object().shape({
//     education: Yup.string().required("Education is required"),
//     courseName: Yup.string().required("Course name is required"),
//     college: Yup.string().required("College name is required"),
//     startDate: Yup.date().required("Start date is required"),
//     endDate: Yup.date()
//       .required("End date is required")
//       .min(Yup.ref("personalInfo.dob"), "End date must be after start date"),
//   }),
//   workExperience: Yup.object().shape({
//     designation: Yup.string().required("Designation is required"),
//     companyName: Yup.string().required("Company Name is required"),
//     startDate: Yup.date().required("Start Date is required"),
//     endDate: Yup.date()
//     .required("End date is required")
//     .min(Yup.ref("personalInfo.dob"), "End date must be after start date"),
//   }),
//   skillInfo: Yup.object().shape({
//     skillName: Yup.string().required("Skill is required"),
//   }),
// });