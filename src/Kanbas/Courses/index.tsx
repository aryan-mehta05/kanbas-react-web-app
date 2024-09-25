import { Navigate, Route, Routes } from "react-router";
import Modules from "./Modules";
import CoursesNavigation from "./CourseNavigation";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/PeopleTable";

const Courses = () => {
  return (
    <div id="wd-courses" className="me-5">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course 1234
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>

        <div className="flex-fill">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="Home" />}
            />
            <Route
              path="Home"
              element={<Home />}
            />
            <Route
              path="Modules"
              element={<Modules />}
            />
            <Route
              path="Zoom"
              element={<h2>Zoom</h2>}
            />
            <Route
              path="Piazza"
              element={<h2>Piazza</h2>}
            />
            <Route
              path="Assignments"
              element={<Assignments />}
            />
            <Route
              path="Assignments/:aid"
              element={<AssignmentEditor />}
            />
            <Route
              path="Quizzes"
              element={<h2>Quizzes</h2>}
            />
            <Route
              path="Grades"
              element={<h2>Grades</h2>}
            />
            <Route
              path="People"
              element={<PeopleTable />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;