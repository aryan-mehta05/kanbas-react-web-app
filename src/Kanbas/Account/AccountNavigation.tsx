import { Link } from "react-router-dom";

const AccountNavigation = () => {
  return (
    <div id="wd-account-navigation">
      <Link to={"/Kanbas/Account/Signin"}>
        Sign in
      </Link><br />
      <Link to={"/Kanbas/Account/Signup"}>
        Sign up
      </Link><br />
      <Link to={"/Kanbas/Account/Profile"}>
        Profile
      </Link>
    </div>
  );
};

export default AccountNavigation;
