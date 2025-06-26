import FormLayout from "../../components/FormLayout/FormLayout";
import styles from "./GetStarted.module.css";
import Heading from "../../components/Heading/Heading";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateField } from "../../utils/validation";
import { getUpdatedFormState } from "../../utils/formHelpers";
import { dataRequest } from "../../utils/api";

export default function GetStarted() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

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
      name: formData.name.trim(),
      email: formData.email.trim(),
      username: formData.username.trim(),
      password: formData.password.trim(),
    };
    await dataRequest(
      trimmedFormData,
      "POST",
      "auth/signup",
      (res) => {
        navigate("/login", {
          state: { message: res.message },
        });
      },
      (res) => {
        setFormData({ name: "", email: "", username: "", password: "" });
        setMessage(res || "Sign Up Failed! Please try again");
      }
    );
  }

  return (
    <FormLayout>
      <Heading />
      {message && <div className={styles.msg}>{message}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          <div>Your Name</div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? styles.inputErr : ""}
            autoComplete="name"
          />
          {errors.name && <div className={styles.errmsg}>{errors.name}</div>}
        </label>
        <label>
          <div>Your Email</div>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? styles.inputErr : ""}
            autoComplete="email"
          />
          {errors.email && <div className={styles.errmsg}>{errors.email}</div>}
        </label>
        <label>
          <div>Chosen Username</div>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? styles.inputErr : ""}
            autoComplete="username"
          />
          {errors.username && (
            <div className={styles.errmsg}>{errors.username}</div>
          )}
        </label>
        <label>
          <div>Chosen Password</div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? styles.inputErr : ""}
            autoComplete="new-password"
          />
          {errors.password && (
            <div className={styles.errmsg}>{errors.password}</div>
          )}
        </label>
        <button className={styles.createAccBtn}>Create your account</button>
      </form>

      <Link className={styles.goToLogin} to="/login">
        Already Registered? Login here!
      </Link>
    </FormLayout>
  );
}
