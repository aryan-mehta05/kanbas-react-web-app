import { Link, useLocation } from "react-router-dom";

const AccountNavigation = () => {
  const { pathname } = useLocation();
  const links = [
    {path: "Signin", linkText: "Sign in"},
    {path: "Signup", linkText: "Sign up"},
    {path: "Profile", linkText: "Profile"}
  ];
  
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 me-5">
      {links.map((link, idx) => (
        <Link
        key={idx}
        id="wd-account-navigation"  
        to={`/Kanbas/Account/${link.path}`}
          className={`list-group-item border border-0 ${
            pathname.includes(link.path)
              ? "active"
              : "text-danger"
          }`}
        >
          {link.linkText}
        </Link>
      ))}
    </div>
  );
};

export default AccountNavigation;
