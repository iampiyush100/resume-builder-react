import { useSelector } from "react-redux";
import styles from "./ResumeViewer.module.css"; // Import CSS module
import { Link } from "react-router-dom";

const ResumeViewer = () => {
  let initialStateOfResume = useSelector((state) => state.resume);
  return (
    <>
      <center>
        <h1>Your Resume</h1>
      </center>
      <div className={styles.resume}>
        <div className={styles.section + " " + styles.personalDetails}>
          <h2>Personal Details</h2>
          {Object.keys(initialStateOfResume.personalInfo).length > 0 ? (
            <div className={styles.details}>
              <p>
                <strong>Name:</strong> {initialStateOfResume.personalInfo.name}
              </p>
              <p>
                <strong>Designation:</strong> {initialStateOfResume.personalInfo.designation}
              </p>
              <p>
                <strong>Mobile:</strong> {initialStateOfResume.personalInfo.mobile}
              </p>
              <p>
                <strong>Email:</strong> {initialStateOfResume.personalInfo.email}
              </p>
              <p>
                <strong>Date of Birth:</strong> {initialStateOfResume.personalInfo.dob}
              </p>
              <p>
                <strong>GitHub:</strong>{" "}
                <Link to={initialStateOfResume.personalInfo.githubLink}>
                  {initialStateOfResume.personalInfo.githubLink}
                </Link>
              </p>
              <p>
                <strong>Address:</strong> {initialStateOfResume.personalInfo.address}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={styles.section + ' ' + styles.education}>
    <h2>Education</h2>
    {initialStateOfResume.educationInfo.length > 0 ? (
    <table className={styles.educationTable}>
        <thead>
            <tr>
                <th>Degree</th>
                <th>Course Name</th>
                <th>College</th>
                <th>Start Date</th>
                <th>End Date</th>
            </tr>
        </thead>
        <tbody>
            {initialStateOfResume.educationInfo.map((edu, index) => (
                <tr key={index}>
                    <td>{edu.education}</td>
                    <td>{edu.courseName}</td>
                    <td>{edu.college}</td>
                    <td>{edu.startDate}</td>
                    <td>{edu.endDate}</td>
                </tr>
            ))}
        </tbody>
    </table>
): ("")}
</div>


        <div className={styles.section + " " + styles.workExperience}>
          <h2>Work Experience</h2>
          {initialStateOfResume.workExpInfo.map((work, index) => (
            <div className={styles.details} key={index}>
              <div className={styles.workExpInfo}>
                <p>
                  <strong>Designation:</strong> {work.designation}
                </p>
                <p>
                  <strong>Company Name:</strong> {work.companyName}
                </p>
                <p>
                  <strong>Start Date:</strong> {work.startDate}
                </p>
                <p>
                  <strong>End Date:</strong> {work.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.section + " " + styles.skills}>
          <h2>Skills</h2>
          <ul>
            {initialStateOfResume.skillInfo.map((ele, index) => (
              <li key={index}>{ele?.skillName}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ResumeViewer;
