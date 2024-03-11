import * as Yup from "yup";

export const personalInfoValidation = Yup.object().shape({
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
