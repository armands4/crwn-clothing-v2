import SignUpForm from "../../components/sign-up/Sign-up-form.component";
import SignInForm from "./Sign-in-form.component";
import "./Sign-in-form.styles.scss";

const Authentication = function () {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
