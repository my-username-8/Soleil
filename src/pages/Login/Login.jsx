import styles from "./Login.module.css";
import Heading from "../../components/Heading/Heading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormLayout from "../../components/FormLayout/FormLayout";
import { useEffect, useState } from "react";
import { getUpdatedFormState } from "../../utils/formHelpers";
import { dataRequest } from "../../utils/api";
import { validateField } from "../../utils/validation";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
    }
  }, [location.state]);

  function handleChange(e) {
    const { name, value } = e.target;
    const { updatedFormData, updatedFormErrors, noErrors } =
      getUpdatedFormState(name, value, formData, errors);
    setFormData(updatedFormData);
    setErrors(updatedFormErrors);
    if (noErrors) setMessage("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    for (let key in formData) {
      newErrors[key] = validateField(key, formData[key]);
    }

    setErrors(newErrors);
    const noErrors = Object.values(newErrors).every((error) => error === "");

    if (!noErrors) {
      setMessage("Please fix the errors before submitting.");
      return;
    }

    const trimmedFormData = {
      username: formData.username.trim(),
      password: formData.password.trim(),
    };
    await dataRequest(
      trimmedFormData,
      "POST",
      "auth/login",
      (res) => {
        const token = res.token;
        localStorage.setItem("jwtToken", token);
        navigate("/dashboard");
      },
      (res) => {
        setFormData({ username: "", password: "" });
        setMessage(res || "Login failed! Please try again");
      }
    );
  }

  return (
    <FormLayout>
      <Heading />
      {message && <div className={styles.msg}>{message}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          <div>Your Username</div>
          <input
            type="text"
            value={formData.username}
            className={errors.username ? styles.inputErr : ""}
            onChange={handleChange}
            name="username"
            autoComplete="username"
          />
          {errors.username && (
            <div className={styles.errmsg}>{errors.username}</div>
          )}
        </label>
        <label>
          <div>Your Password</div>
          <input
            type="password"
            value={formData.password}
            className={errors.password ? styles.inputErr : ""}
            onChange={handleChange}
            name="password"
            autoComplete="current-password"
          />
          {errors.password && (
            <div className={styles.errmsg}>{errors.password}</div>
          )}
        </label>

        <button className={styles.loginBtn}>Login</button>
      </form>

      <Link to="/forgotpassword" className={styles.goToReset}>
        <div>Forgot Password</div>
      </Link>
      <Link className={styles.goToSignup} to="/getstarted">
        Not registered yet? Create an account!
      </Link>
    </FormLayout>
  );
}
