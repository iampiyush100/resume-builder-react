import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveUserOnLogin } from "../../features/Auth/authSlice";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({ isError: false, message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email !== "" && user.password !== "") {
      setError({ isError: false, message: "" });
      setIsLoading(true);
      const apiCalling = async () => {
        let config = {
          method: "post",
          url: `${import.meta.env.VITE_BASE_URL}/auth/login`,
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify({
            username: user.email,
            password: user.password,
          }),
        };
        try {
          const response = await axios.request(config);
          console.log('response>>>>', response);
          localStorage.setItem("token", JSON.stringify(response?.data));
          dispatch(saveUserOnLogin(response?.data));
          setIsLoading(false);
          navigate("/");
        } catch (error) {
          setIsLoading(false);
          setError({
            isError: true,
            message: error?.response?.data?.message || "something went wrong",
          });
        }
      };
      apiCalling();
    } else {
      setError({
        isError: true,
        message: "Please fill the form before submit",
      });
    }
  };

  const handleChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={user.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={user.password}
              onChange={handleChange}
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            {error.isError && <p style={{ color: "red" }}>{error.message}</p>}
            {isLoading && <p style={{ color: "blue" }}>Loading.....</p>}
            <Grid container>
              <Grid item xs>
                <RouterLink to="/reset-password" variant="body2" style={{ textDecoration: "none", color: "Blue" }}>
                  Forgot password?
                </RouterLink>
              </Grid>
              <Grid item>
                <RouterLink to="" variant="body2" style={{ textDecoration: "none", color: "Blue" }}>
                  {"Don't have an account? Sign Up"}
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
