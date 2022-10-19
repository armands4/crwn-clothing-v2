import {
  signInWithGooglePopup,
  getUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = function () {
  const logIn = async function () {
    const response = await signInWithGooglePopup();
    const userDocRef = await getUserDocFromAuth(response.user);
    console.log(userDocRef);
  };

  return (
    <div>
      <button onClick={logIn}>Log in with Google</button>
      <h1>Sign in page</h1>
    </div>
  );
};

export default SignIn;
