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
// import { useFormik } from "formik";
// import { personalInfoValidation } from "../../utils/validation";

function ResumeEditor() {
  const dispatch = useDispatch();
  let initialStateOfResume = useSelector((state) => state.resume);
  const [activeTabEffect, setActiveTabEffect] = useState(Object.values(editorTabs)[0]);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    designation: "",
    mobile: "",
    email: "",
    dob: "",
    githubLink: "",
    address: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    education: "",
    courseName: "",
    college: "",
    startDate: "",
    endDate: "",
  });

  const [workExpInfo, setWorkExpInfo] = useState({
    designation: "",
    companyName: "",
    startDate: "",
    endDate: "",
  });

  const [skillInfo, setSkillInfo] = useState({ skillName: "" });

  // comment formik validation
  //   const formik = useFormik({
  //     initialValues: {
  //       name: "",
  //       designation: "",
  //       mobile: "",
  //       email: "",
  //       dob: "",
  //       githubLink: "",
  //       address: "",
  //     },
  //     validationSchema: personalInfoValidation,
  //     onSubmit: (values) => {

  //     },
  //     validateOnChange: true,
  //     validateOnBlur: true
  // });

  function handleOnChange(event) {
    switch (activeTabEffect) {
      case editorTabs.personalInformation:
        setPersonalInfo((prev) => ({
          ...prev,
          [event.target.name]: event.target.value,
        }));
        break;
      case editorTabs.education:
        setEducationInfo((prev) => ({
          ...prev,
          [event.target.name]: event.target.value,
        }));
        break;
      case editorTabs.workExp:
        setWorkExpInfo((prev) => ({
          ...prev,
          [event.target.name]: event.target.value,
        }));
        break;
      case editorTabs.skill:
        setSkillInfo((prev) => ({
          ...prev,
          [event.target.name]: event.target.value,
        }));
        break;
      default:
    }
  }

  function handleOnSubmit() {
    switch (activeTabEffect) {
      case editorTabs.personalInformation:
        dispatch(addPersonalDetails(personalInfo));
        setPersonalInfo({
          name: "",
          designation: "",
          mobile: "",
          email: "",
          dob: "",
          githubLink: "",
          address: "",
        });
        break;
      case editorTabs.education:
        dispatch(addEducationDetails(educationInfo));
        setEducationInfo({
          education: "",
          courseName: "",
          college: "",
          startDate: "",
          endDate: "",
        });
        break;
      case editorTabs.workExp:
        dispatch(addWorkExpDetails(workExpInfo));
        setWorkExpInfo({
          designation: "",
          companyName: "",
          startDate: "",
          endDate: "",
        });
        break;
      case editorTabs.skill:
        dispatch(addSkillsDetails(skillInfo));
        setSkillInfo({
          skillName: "",
        });
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
      <InputControl
        placeholder="Enter Name eg. Piyush Gupta"
        name="name"
        type="text"
        value={personalInfo.name}
        onChange={handleOnChange}
      />
      <InputControl
        placeholder="Enter Designation eg. FullStack developer"
        name="designation"
        type="text"
        value={personalInfo.designation}
        onChange={handleOnChange}
      />
      <InputControl
        placeholder="Enter Mobile"
        name="mobile"
        type="tel"
        value={personalInfo.mobile}
        onChange={handleOnChange}
      />
      <InputControl
        placeholder="Enter Email"
        name="email"
        type="email"
        value={personalInfo.email}
        onChange={handleOnChange}
      />
      <InputControl placeholder="Enter DOB" name="dob" type="date" value={personalInfo.dob} onChange={handleOnChange} />
      <InputControl
        placeholder="Enter Github Link"
        name="githubLink"
        type="url"
        value={personalInfo.githubLink}
        onChange={handleOnChange}
      />
      <InputControl
        placeholder="Enter Address"
        name="address"
        type="text"
        value={personalInfo.address}
        onChange={handleOnChange}
      />
    </>
  );

  const education = (
    <>
      <select
        name="education"
        style={{ width: "96%", marginLeft: "2%", height: "45px", border: "1px solid #adadad" }}
        onChange={handleOnChange}
      >
        <option value="">Select Education</option>
        <option value="High School">High School</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Graduation">Graduation</option>
        <option value="Post Graduation">Post Graduation</option>
      </select>
      <InputControl
        placeholder="Enter Course Name"
        type="text"
        name="courseName"
        value={educationInfo.courseName}
        onChange={handleOnChange}
      />
      <InputControl
        placeholder="Enter College"
        type="text"
        name="college"
        value={educationInfo.college}
        onChange={handleOnChange}
      />
      <InputControl
        placeholder="Select Start Date"
        type="date"
        name="startDate"
        value={educationInfo.startDate}
        onChange={handleOnChange}
      />
      <InputControl
        placeholder="Select End Date"
        type="date"
        name="endDate"
        value={educationInfo.endDate}
        onChange={handleOnChange}
      />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        {initialStateOfResume?.educationInfo?.map((edu, index) => (
          <Chip text={`education ${index + 1}`} key={index} onClick={() => handleChipClick(edu.id)} />
        ))}
      </div>
    </>
  );

  const workExperience = (
    <>
      <InputControl
        placeholder="Enter Designation"
        type="text"
        name="designation"
        value={workExpInfo.designation}
        onChange={handleOnChange}
      />
      <InputControl
        placeholder="Enter Company Name"
        type="text"
        name="companyName"
        value={workExpInfo.companyName}
        onChange={handleOnChange}
      />
      <InputControl
        placeholder="Start Date"
        type="date"
        name="startDate"
        value={workExpInfo.startDate}
        onChange={handleOnChange}
      />
      <InputControl
        placeholder="End Date"
        type="date"
        name="endDate"
        value={workExpInfo.endDate}
        onChange={handleOnChange}
      />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        {initialStateOfResume?.workExpInfo?.map((workExp, index) => (
          <Chip text={`experience ${index + 1}`} key={index} onClick={() => handleChipClick(workExp.id)} />
        ))}
      </div>
    </>
  );

  const skills = (
    <>
      <InputControl
        placeholder="Enter Skills"
        name="skillName"
        type="text"
        value={skillInfo.skillName}
        onChange={handleOnChange}
      />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        {initialStateOfResume?.skillInfo?.map((skill, index) => (
          <Chip text={`${index + 1}. ${skill.skillName}`} key={index} onClick={() => handleChipClick(skill.id)} />
        ))}
      </div>
    </>
  );

  const generateBody = () => {
    switch (activeTabEffect) {
      case editorTabs.personalInformation:
        return personalInformation;
      case editorTabs.education:
        return education;
      case editorTabs.workExp:
        return workExperience;
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
              style={{ ...(key === activeTabEffect ? { background: "orange" } : {}) }}
            >
              {key}
            </Col>
          ))}
        </Row>

        <Row style={{ border: "1px solid #D0D3D4", paddingTop: "2%", height: "500px", backgroundColor: "#F0F3F4" }}>
          {generateBody()}
        </Row>

        <Row style={{ border: "1px solid #D0D3D4", backgroundColor: "#F0F3F4", textAlign: "center" }}>
          <Button onClick={handleOnSubmit}>Save</Button>
        </Row>
      </Container>

      <Container style={{ marginTop: "10%", width: "80%" }}>
        <ResumeViewer />
      </Container>
    </>
  );
}

export default ResumeEditor;
