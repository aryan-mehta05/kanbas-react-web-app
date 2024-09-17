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
            alt="Full Stack Software Developer Cover"
            width={200}
          />
          <div>
            <Link
              to="/Kanbas/Courses/1001/Home"
              className="wd-dashboard-course-link"
            >
              CS:1001 - React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack Software Developer
            </p>
            <Link
              to="/Kanbas/Courses/1001/Home"
            >
              Go
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img
            src="/images/database-management-systems.jpeg"
            alt="Database Management Systems Cover"
            width={200}
          />
          <div>
            <Link
              to="/Kanbas/Courses/1002/Home"
              className="wd-dashboard-course-link"
            >
              CS:1002 - Database Management Systems
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack Software Developer
            </p>
            <Link
              to="/Kanbas/Courses/1002/Home"
            >
              Go
            </Link>
          </div>
        </div>
        
        <div className="wd-dashboard-course">
          <img
            src="/images/programming-design-paradigms.jpg"
            alt="Programming Design Paradigms Cover"
            width={200}
          />
          <div>
            <Link
              to="/Kanbas/Courses/2001/Home"
              className="wd-dashboard-course-link"
            >
              CS:2001 - Programming Design Paradigms
            </Link>
            <p className="wd-dashboard-course-title">
              Computer Science
            </p>
            <Link
              to="/Kanbas/Courses/2001/Home"
            >
              Go
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img
            src="/images/data-structures.jpg"
            alt="Data Structures Cover"
            width={200}
          />
          <div>
            <Link
              to="/Kanbas/Courses/2002/Home"
              className="wd-dashboard-course-link"
            >
              CS:2002 - Data Structures
            </Link>
            <p className="wd-dashboard-course-title">
              Computer Science
            </p>
            <Link
              to="/Kanbas/Courses/2002/Home"
            >
              Go
            </Link>
          </div>
        </div>
        
        <div className="wd-dashboard-course">
          <img
            src="/images/algorithms.jpg"
            alt="Algorithms Cover"
            width={200}
          />
          <div>
            <Link
              to="/Kanbas/Courses/2003/Home"
              className="wd-dashboard-course-link"
            >
              CS:2003 - Algorithms
            </Link>
            <p className="wd-dashboard-course-title">
              Computer Science
            </p>
            <Link
              to="/Kanbas/Courses/2003/Home"
            >
              Go
            </Link>
          </div>
        </div>
        
        <div className="wd-dashboard-course">
          <img
            src="/images/supervised-machine-learning.png"
            alt="Supervised Machine Learning Cover"
            width={200}
          />
          <div>
            <Link
              to="/Kanbas/Courses/3001/Home"
              className="wd-dashboard-course-link"
            >
              CS:3001 - Supervised Machine Learning
            </Link>
            <p className="wd-dashboard-course-title">
              Data Science
            </p>
            <Link
              to="/Kanbas/Courses/3001/Home"
            >
              Go
            </Link>
          </div>
        </div>
        
        <div className="wd-dashboard-course">
          <img
            src="/images/unsupervised-machine-learning.jpg"
            alt="Unsupervised Machine Learning Cover"
            width={200}
          />
          <div>
            <Link
              to="/Kanbas/Courses/3002/Home"
              className="wd-dashboard-course-link"
            >
              CS:3002 - Unsupervised Machine Learning
            </Link>
            <p className="wd-dashboard-course-title">
              Data Science
            </p>
            <Link
              to="/Kanbas/Courses/3002/Home"
            >
              Go
            </Link>
          </div>
        </div>
        
        <div className="wd-dashboard-course">
          <img
            src="/images/natural-language-processing.png"
            alt="Natural Language Processing Cover"
            width={200}
          />
          <div>
            <Link
              to="/Kanbas/Courses/3003/Home"
              className="wd-dashboard-course-link"
            >
              CS:3003 - Natural Language Processing
            </Link>
            <p className="wd-dashboard-course-title">
              Data Science
            </p>
            <Link
              to="/Kanbas/Courses/3003/Home"
            >
              Go
            </Link>
          </div>
        </div>
        
        <div className="wd-dashboard-course">
          <img
            src="/images/deep-learning.jpg"
            alt="Deep Learning Cover"
            width={200}
          />
          <div>
            <Link
              to="/Kanbas/Courses/3004/Home"
              className="wd-dashboard-course-link"
            >
              CS:3004 - Deep Learning
            </Link>
            <p className="wd-dashboard-course-title">
              Data Science
            </p>
            <Link
              to="/Kanbas/Courses/3004/Home"
            >
              Go
            </Link>
          </div>
        </div>
        
        <div className="wd-dashboard-course">
          <img
            src="/images/artificial-intelligence.jpg"
            alt="Artificial Intelligence Cover"
            width={200}
          />
          <div>
            <Link
              to="/Kanbas/Courses/3005/Home"
              className="wd-dashboard-course-link"
            >
              CS:3005 - Artificial Intelligence
            </Link>
            <p className="wd-dashboard-course-title">
              Data Science
            </p>
            <Link
              to="/Kanbas/Courses/3005/Home"
            >
              Go
            </Link>
          </div>
        </div>
        
        <div className="wd-dashboard-course">
          <img
            src="/images/game-development.png"
            alt="Game Development"
            width={200}
          />
          <div>
            <Link
              to="/Kanbas/Courses/4001/Home"
              className="wd-dashboard-course-link"
            >
              CS:4001 - Game Development
            </Link>
            <p className="wd-dashboard-course-title">
              Game Developer
            </p>
            <Link
              to="/Kanbas/Courses/4001/Home"
            >
              Go
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
