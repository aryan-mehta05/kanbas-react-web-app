import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div id="wd-profile-screen" style={{ width: "400px" }}>
      <h1>Profile</h1>
      <input
        id="wd-username"
        defaultValue="Aryan"
        type="text"
        placeholder="Username"
        className="form-control mb-2"
      />
      <input
        id="wd-password"
        defaultValue="123456"
        type="password"
        placeholder="Password"
        className="form-control mb-2"
      />
      <input
        id="wd-firstname"
        defaultValue="Aryan"
        type="text"
        placeholder="First Name"
        className="form-control mb-2"
      />
      <input
        id="wd-lastname"
        defaultValue="Mehta"
        type="text"
        placeholder="Last Name"
        className="form-control mb-2"
      />
      <input
        id="wd-dob"
        defaultValue="2000-12-05"
        type="date"
        className="form-control mb-2"
      />
      <input
        id="wd-email"
        defaultValue="mehta.aryan@northeastern.edu"
        type="email"
        placeholder="your.email@example.com"
        className="form-control mb-2"
      />
      <select id="wd-role" className="form-select mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link
        to="/Kanbas/Account/Signin"
        className="btn btn-danger w-100 mb-2"
      >
        Sign out
      </Link>
    </div>
  );
};

export default Profile;
