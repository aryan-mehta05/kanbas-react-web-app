import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1><hr />
      <h2 id="wd-dashboard-published">Published Courses (11)</h2><hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/1001/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img
                  src="/images/reactjs.jpg"
                  alt="Full Stack Software Developer Cover"
                  width="100%"
                  height={160}
                />
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

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/1002/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img
                  src="/images/database-management-systems.jpeg"
                  alt="Database Management Systems Cover"
                  width="100%"
                  height={160}
                />
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
          
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/2001/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img
                  src="/images/programming-design-paradigms.jpg"
                  alt="Programming Design Paradigms Cover"
                  width="100%"
                  height={160}
                />
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

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/2002/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img
                  src="/images/data-structures.jpg"
                  alt="Data Structures Cover"
                  width="100%"
                  height={160}
                />
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
          
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/2003/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img
                  src="/images/algorithms.jpg"
                  alt="Algorithms Cover"
                  width="100%"
                  height={160}
                />
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
          
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/3001/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img
                  src="/images/supervised-machine-learning.png"
                  alt="Supervised Machine Learning Cover"
                  width="100%"
                  height={160}
                />
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
          
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/3002/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img
                  src="/images/unsupervised-machine-learning.jpg"
                  alt="Unsupervised Machine Learning Cover"
                  width="100%"
                  height={160}
                />
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
          
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/3003/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img
                  src="/images/natural-language-processing.png"
                  alt="Natural Language Processing Cover"
                  width="100%"
                  height={160}
                />
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
          
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/3004/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img
                  src="/images/deep-learning.jpg"
                  alt="Deep Learning Cover"
                  width="100%"
                  height={160}
                />
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
          
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/3005/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img
                  src="/images/artificial-intelligence.jpg"
                  alt="Artificial Intelligence Cover"
                  width="100%"
                  height={160}
                />
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
          
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to="/Kanbas/Courses/4001/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img
                  src="/images/game-development.png"
                  alt="Game Development Cover"
                  width="100%"
                  height={160}
                />
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
