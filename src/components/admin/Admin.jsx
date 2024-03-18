import styles from "./Admin.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h3>Admin section is currently under construction</h3>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
};

export default Admin;
