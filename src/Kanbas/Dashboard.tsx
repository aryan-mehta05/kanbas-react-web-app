import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div id="wd-dashboard" className="container-fluid">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (11)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-4 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">
          <div className="col">
            <div className="card h-100 d-flex flex-column rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/1001/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div className="wd-dashboard-image-wrapper">
                  <img
                    src="/images/reactjs.jpg"
                    alt="Full Stack Software Developer Cover"
                    className="img-fluid wd-dashboard-image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS:1001 - React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 d-flex flex-column rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/1002/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div className="wd-dashboard-image-wrapper">
                  <img
                    src="/images/database-management-systems.jpeg"
                    alt="Database Management Systems Cover"
                    className="img-fluid wd-dashboard-image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS:1002 - Database Management Systems
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 d-flex flex-column rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/2001/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div className="wd-dashboard-image-wrapper">
                  <img
                    src="/images/programming-design-paradigms.jpg"
                    alt="Programming Design Paradigms Cover"
                    className="img-fluid wd-dashboard-image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS:2001 - Programming Design Paradigms
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Computer Science
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 d-flex flex-column rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/2002/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div className="wd-dashboard-image-wrapper">
                  <img
                    src="/images/data-structures.jpg"
                    alt="Data Structures Cover"
                    className="img-fluid wd-dashboard-image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS:2002 - Data Structures
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Computer Science
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 d-flex flex-column rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/2003/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div className="wd-dashboard-image-wrapper">
                  <img
                    src="/images/algorithms.jpg"
                    alt="Algorithms Cover"
                    className="img-fluid wd-dashboard-image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS:2003 - Algorithms
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Computer Science
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 d-flex flex-column rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/3001/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div className="wd-dashboard-image-wrapper">
                  <img
                    src="/images/supervised-machine-learning.png"
                    alt="Supervised Machine Learning Cover"
                    className="img-fluid wd-dashboard-image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS:3001 - Supervised Machine Learning
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Data Science
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 d-flex flex-column rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/3002/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div className="wd-dashboard-image-wrapper">
                  <img
                    src="/images/unsupervised-machine-learning.jpg"
                    alt="Unsupervised Machine Learning Cover"
                    className="img-fluid wd-dashboard-image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS:3002 - Unsupervised Machine Learning
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Data Science
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 d-flex flex-column rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/3003/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div className="wd-dashboard-image-wrapper">
                  <img
                    src="/images/natural-language-processing.png"
                    alt="Natural Language Processing Cover"
                    className="img-fluid wd-dashboard-image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS:3003 - Natural Language Processing
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Data Science
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 d-flex flex-column rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/3004/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div className="wd-dashboard-image-wrapper">
                  <img
                    src="/images/deep-learning.jpg"
                    alt="Deep Learning Cover"
                    className="img-fluid wd-dashboard-image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS:3004 - Deep Learning
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Data Science
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 d-flex flex-column rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/3005/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div className="wd-dashboard-image-wrapper">
                  <img
                    src="/images/artificial-intelligence.jpg"
                    alt="Artificial Intelligence Cover"
                    className="img-fluid wd-dashboard-image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS:3005 - Artificial Intelligence
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Data Science
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 d-flex flex-column rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/4001/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <div className="wd-dashboard-image-wrapper">
                  <img
                    src="/images/game-development.png"
                    alt="Game Development Cover"
                    className="img-fluid wd-dashboard-image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS:4001 - Game Development
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Game Developer
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
