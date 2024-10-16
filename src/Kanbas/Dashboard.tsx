import { Link } from "react-router-dom";
import * as db from "./Database";

const Dashboard = () => {
  const courses = db.courses;
  
  return (
    <div id="wd-dashboard" className="container-fluid">
      <h1 id="wd-dashboard-title">Dashboard</h1><hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2><hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-4 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">
          {courses.map((course, idx) => (
            <div className="wd-dashboard-course col" key={idx}>
              <div className="card h-100 d-flex flex-column rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <div className="wd-dashboard-image-wrapper">
                    <img
                      src={course.image}
                      alt={`${course.name} Cover`}
                      className="img-fluid wd-dashboard-image"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title fw-bold">
                      {course.name}
                    </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
