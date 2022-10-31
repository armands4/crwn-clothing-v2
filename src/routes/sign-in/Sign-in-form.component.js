import FormInput from "../../components/form-input/FormInput.component";
import { useState } from "react";
import "./Sign-in-form.styles.scss";
import Button from "../../components/button/Button.component";
import {
  signInEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }

    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        alert("Incorrect password");
      } else if (err.code === "auth/user-not-found") {
        alert("No user found with such email address");
      }

      console.error(err);
    }
  };

  const logIn = async function () {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handlerSubmit}>
        <FormInput
          type="email"
          required
          name="email"
          value={email}
          onChange={handlerChange}
          label="Email"
        />

        <FormInput
          type="password"
          required
          name="password"
          value={password}
          onChange={handlerChange}
          label="Password"
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={logIn}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
