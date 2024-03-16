import { useState } from "react";
import InputControl from "../inputControl/InputControl";
import { Container, Row, Col, Button } from "react-bootstrap";
import { editorTabs } from "../../constants/index";
import {
  addPersonalDetails,
  addEducationDetails,
  addWorkExpDetails,
  addSkillsDetails,
  removeSkills,
  removeEducationDetails,
  removeWorkExpDetails,
} from "../../features/Resume/resumeSlice";
import { useDispatch, useSelector } from "react-redux";
import ResumeViewer from "../resumeViewer/ResumeViewer";
import Chip from "../chip/Chip";
import { useFormik } from "formik";
import {
  personalInfoValidationSchema,
  educationInfoValidationSchema,
  workExpInfoValidationSchema,
  skillsInfoValidationSchema,
} from "../../utils/validation";
import styles from "./ResumeEditor.module.css";

function ResumeEditor() {
  const dispatch = useDispatch();
  let initialStateOfResume = useSelector((state) => state.resume);
  const [activeTabEffect, setActiveTabEffect] = useState(Object.values(editorTabs)[0]);

  // formik validation
  const formikPersonalDetails = useFormik({
    initialValues: {
      personalInfo: {
        name: "",
        designation: "",
        mobile: "",
        email: "",
        dob: "",
        githubLink: "",
        address: "",
      },
    },
    validationSchema: personalInfoValidationSchema,
    onSubmit: (values, { resetForm }) => {
      handleOnSubmit();
      resetForm();
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  const formikEdu = useFormik({
    initialValues: {
      educationInfo: {
        education: "",
        courseName: "",
        college: "",
        startDate: "",
        endDate: "",
      },
    },
    validationSchema: educationInfoValidationSchema,
    onSubmit: (values, { resetForm }) => {
      handleOnSubmit();
      resetForm();
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  const formikWrkExp = useFormik({
    initialValues: {
      workExperience: {
        designation: "",
        companyName: "",
        startDate: "",
        endDate: "",
      },
    },
    validationSchema: workExpInfoValidationSchema,
    onSubmit: (values, { resetForm }) => {
      handleOnSubmit();
      resetForm();
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  const formikSkill = useFormik({
    initialValues: {
      skillInfo: {
        skillName: "",
      },
    },
    validationSchema: skillsInfoValidationSchema,
    onSubmit: (values, { resetForm }) => {
      handleOnSubmit();
      resetForm();
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  const { personalInfo } = formikPersonalDetails.values;
  const { educationInfo } = formikEdu.values;
  const { workExperience } = formikWrkExp.values;
  const { skillInfo } = formikSkill.values;

  function handleOnSubmit() {
    console.log('inside submit form>>>>');
    switch (activeTabEffect) {
      case editorTabs.personalInformation:
        dispatch(addPersonalDetails(personalInfo));
        break;
      case editorTabs.education:
        dispatch(addEducationDetails(educationInfo));
        break;
      case editorTabs.workExp:
        dispatch(addWorkExpDetails(workExperience));
        break;
      case editorTabs.skill:
        dispatch(addSkillsDetails(skillInfo));
        break;
      default:
    }
  }

  function handleChipClick(id) {
    switch (activeTabEffect) {
      case editorTabs.personalInformation:
        break;
      case editorTabs.education:
        dispatch(removeEducationDetails({ id }));
        break;
      case editorTabs.workExp:
        dispatch(removeWorkExpDetails({ id }));
        break;
      case editorTabs.skill:
        dispatch(removeSkills({ id }));
        break;
      default:
    }
  }

  const personalInformation = (
    <>
      <form onSubmit={formikPersonalDetails.handleSubmit}>
        <InputControl
          label={"Enter Name"}
          placeholder="eg. Piyush Gupta"
          name="personalInfo.name"
          type="text"
          onChange={formikPersonalDetails.handleChange}
          error={formikPersonalDetails.errors["personalInfo"]?.["name"]}
        />
        <InputControl
          label={"Enter Designation"}
          placeholder="eg. FullStack developer"
          name="personalInfo.designation"
          type="text"
          onChange={formikPersonalDetails.handleChange}
          error={formikPersonalDetails.errors["personalInfo"]?.["designation"]}
        />
        <InputControl
          label={"Enter Mobile"}
          placeholder="eg. +919876543210"
          name="personalInfo.mobile"
          type="tel"
          onChange={formikPersonalDetails.handleChange}
          error={formikPersonalDetails.errors["personalInfo"]?.["mobile"]}
        />
        <InputControl
          label={"Enter Email"}
          placeholder="eg. iampiyush100@gmail.com"
          name="personalInfo.email"
          type="email"
          onChange={formikPersonalDetails.handleChange}
          error={formikPersonalDetails.errors["personalInfo"]?.["email"]}
        />
        <InputControl
          label={"Enter DOB"}
          name="personalInfo.dob"
          type="date"
          onChange={formikPersonalDetails.handleChange}
          error={formikPersonalDetails.errors["personalInfo"]?.["dob"]}
        />
        <InputControl
          label={"Enter Github Link"}
          placeholder="eg. https://www.linkedin.com/in/piyush-gupta-b05889191/"
          name="personalInfo.githubLink"
          type="url"
          onChange={formikPersonalDetails.handleChange}
          error={formikPersonalDetails.errors["personalInfo"]?.["githubLink"]}
        />
        <InputControl
          label={"Enter Address"}
          placeholder="eg. Noida"
          name="personalInfo.address"
          type="text"
          onChange={formikPersonalDetails.handleChange}
          error={formikPersonalDetails.errors["personalInfo"]?.["address"]}
        />
        <Button className={styles.button} type="submit">
          Save
        </Button>
      </form>
    </>
  );

  const education = (
    <>
      <form onSubmit={formikEdu.handleSubmit}>
        <label htmlFor="end">Select Education:</label><br />
        {formikEdu.errors["educationInfo"]?.["education"] && <label style={{ color: 'red', fontSize: '10px'}}><div>{formikEdu.errors["educationInfo"]?.["education"]}</div></label>}
        <select
          name="educationInfo.education"
          style={{ width: "100%", height: "45px", border: "1px solid #adadad", borderRadius: "5px" }}
          onChange={formikEdu.handleChange}
          value={formikEdu.values.educationInfo.education}
          // error={formikEdu.errors["educationInfo"]?.["education"]}
        >
          {/* <option value="">Select Education</option> */}
          <option value="Post Graduation">Post Graduation</option>
          <option value="Graduation">Graduation</option>
          <option value="Intermediate">Intermediate</option>
          <option value="High School">High School</option>
        </select>

        <InputControl
          label={"Enter Course Name:"}
          type="text"
          name="educationInfo.courseName"
          onChange={formikEdu.handleChange}
          error={formikEdu.errors["educationInfo"]?.["courseName"]}
        />

        <InputControl
          label={"Enter College Name:"}
          type="text"
          name="educationInfo.college"
          onChange={formikEdu.handleChange}
          error={formikEdu.errors["educationInfo"]?.["college"]}
        />

        <InputControl
          label={"Enter Start Date:"}
          type="date"
          name="educationInfo.startDate"
          onChange={formikEdu.handleChange}
          error={formikEdu.errors["educationInfo"]?.["startDate"]}
        />

        <InputControl
          label={"Enter End Date:"}
          type="date"
          name="educationInfo.endDate"
          onChange={formikEdu.handleChange}
          error={formikEdu.errors["educationInfo"]?.["endDate"]}
        />
        <br />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          {initialStateOfResume?.educationInfo?.map((edu, index) => (
            <Chip text={`education ${index + 1}`} key={index} onClick={() => handleChipClick(edu.id)} />
          ))}
        </div>
        <Button className={styles.button} type="submit">
          Save
        </Button>
      </form>
    </>
  );

  const workExperienceBody = (
    <>
      <form onSubmit={formikWrkExp.handleSubmit}>
        <InputControl
          label={"Enter Designation:"}
          type="text"
          name="workExperience.designation"
          onChange={formikWrkExp.handleChange}
          error={formikWrkExp.errors["workExperience"]?.["designation"]}
        />
        <InputControl
          label={"Enter Company Name:"}
          type="text"
          name="workExperience.companyName"
          onChange={formikWrkExp.handleChange}
          error={formikWrkExp.errors["workExperience"]?.["companyName"]}
        />
        <InputControl
          label={"Enter Start Date:"}
          type="date"
          name="workExperience.startDate"
          onChange={formikWrkExp.handleChange}
          error={formikWrkExp.errors["workExperience"]?.["startDate"]}
        />
        <InputControl
          label={"Enter End Date:"}
          type="date"
          name="workExperience.endDate"
          onChange={formikWrkExp.handleChange}
          error={formikWrkExp.errors["workExperience"]?.["endDate"]}
        />
        <br />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          {initialStateOfResume?.workExpInfo?.map((workExp, index) => (
            <Chip text={`experience ${index + 1}`} key={index} onClick={() => handleChipClick(workExp.id)} />
          ))}
        </div>
        <Button className={styles.button} type="submit">
          Save
        </Button>
      </form>
    </>
  );

  const skills = (
    <>
      <form onSubmit={formikSkill.handleSubmit}>
        <InputControl
          label={"Enter Skills Set"}
          name="skillInfo.skillName"
          type="text"
          onChange={formikSkill.handleChange}
          error={formikSkill.errors["skillInfo"]?.["skillName"]}
        />
        <br />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          {initialStateOfResume?.skillInfo?.map((skill, index) => (
            <Chip text={`${index + 1}. ${skill.skillName}`} key={index} onClick={() => handleChipClick(skill.id)} />
          ))}
        </div>
        <Button className={styles.button} type="submit">
          Save
        </Button>
      </form>
    </>
  );

  const generateBody = () => {
    switch (activeTabEffect) {
      case editorTabs.personalInformation:
        return personalInformation;
      case editorTabs.education:
        return education;
      case editorTabs.workExp:
        return workExperienceBody;
      case editorTabs.skill:
        return skills;
      default:
        return null;
    }
  };

  return (
    <>
      <Container style={{ marginTop: "2%", width: "50%" }}>
        <Row style={{ border: "1px solid #D0D3D4", backgroundColor: "#F0F3F4", textAlign: "center" }}>
          {Object.values(editorTabs)?.map((key) => (
            <Col
              key={key}
              onClick={() => {
                setActiveTabEffect(key);
              }}
              style={{ ...(key === activeTabEffect ? { background: "black", color: 'white' } : {}) }}
            >
              {key}
            </Col>
          ))}
        </Row>

        <Row style={{ border: "1px solid #D0D3D4", paddingTop: "2%", backgroundColor: "#F0F3F4" }}>
          {generateBody()}
        </Row>
      </Container>

      <Container style={{ marginTop: "10%", width: "80%" }}>
        <ResumeViewer />
      </Container>
    </>
  );
}

export default ResumeEditor;
