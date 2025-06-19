import FormLayout from "../../components/FormLayout/FormLayout";
import styles from "./GetStarted.module.css";
import Heading from "../../components/Heading/Heading";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function GetStarted() {
  function handleSubmit() {
    // e.preventDefault();
    //STEPS TO send data to the database
    //fetch from the link: import.meta.env.VITE_API_URL/signup
    //if response comes true, redirect user to login page, and show message: Success! Log in to access your dashboard.
    //if response comes false, do not redirect user, and show a message: Sign Up failed!
  }

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  return (
    <FormLayout>
      <Heading />

      <form onSubmit={handleSubmit}>
        <label>
          <div>Your Name</div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <div>Your Email</div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <div>Chosen Username</div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <div>Chosen Password</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className={styles.createAccBtn}>Create your account</button>
      </form>

      <Link className={styles.goToLogin} to="/login">
        Already Registered? Login here!
      </Link>
    </FormLayout>
  );
}
