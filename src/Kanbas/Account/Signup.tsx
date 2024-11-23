import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import * as client from "./client";
import { setCurrentUser } from "./reducer";

const Signup = () => {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kanbas/Account/Profile");
  };

  return (
    <div id="wd-signup-screen" style={{ width: "400px" }}>
      <h1>Sign Up</h1>
      <input
        id="wd-username"
        placeholder="Username"
        type="text"
        className="form-control mb-2"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        id="wd-password"
        placeholder="Password"
        type="password"
        className="form-control mb-2"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <input
        id="wd-verify-password"
        placeholder="Verify Password"
        type="password"
        className="form-control mb-2"
      />
      <button
        onClick={signup}
        className="btn btn-primary w-100 mb-2"
      >
        Sign up
      </button>
      <Link
        to="/Kanbas/Account/Signin"
      >
        Sign ip
      </Link>
    </div>
  );
};

export default Signup;
