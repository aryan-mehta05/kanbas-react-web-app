import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1><hr />
      <h2 id="wd-dashboard-published">Published Courses (11)</h2><hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img
            src="/images/reactjs.jpg"
            alt="Course-cover-image"
            width={200}
          />
          <div>
            <Link
              to="/Kanbas/Courses/1234/Home"
              className="wd-dashboard-course-link"
            >
              CS:1234 - React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack Software Developer
            </p>
            <Link
              to="/Kanbas/Courses/1234/Home"
            >
              Go
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> ... </div>
        <div className="wd-dashboard-course"> ... </div>
      </div>
    </div>
  );
};

export default Dashboard;
