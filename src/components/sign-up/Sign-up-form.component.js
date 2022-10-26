import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { getUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput.component";
import "./sign-up-form.styles.scss";
import Button from "../button/Button.component";

const defaultForms = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultForms);
  const { displayName, email, password, confirmPassword } = formFields;

  const clearFields = () => {
    setFormFields(defaultForms);
  };

  const onFormSubmit = async function (event) {
    event.preventDefault();

    if (password !== confirmPassword) return alert("Passwords do not match");

    try {
      const data = await createAuthUserWithEmailAndPassword(email, password);

      await getUserDocFromAuth(data.user, { displayName });
      clearFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
      console.error(`Error ${err}`);
    }
  };

  const handlerChange = function (event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up using email and password</span>
      <form onSubmit={onFormSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handlerChange}
          label="User name"
        />

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

        <FormInput
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handlerChange}
          label="Confirm Password"
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
