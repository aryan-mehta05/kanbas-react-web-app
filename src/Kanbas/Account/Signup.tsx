import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div id="wd-signup-screen">
      <h3>Sign Up</h3>
      <input
        type="text"
        placeholder="Username"
      /><br />
      <input
        type="password"
        placeholder="Password"
      /><br />
      <input
        type="password"
        placeholder="Verify Password"
      /><br />
      <Link
        to="/Kanbas/Account/Profile"
      >
        Sign up
      </Link><br />
      <Link
        to="/Kanbas/Account/Signin"
      >
        Sign ip
      </Link>
    </div>
  );
};

export default Signup;
