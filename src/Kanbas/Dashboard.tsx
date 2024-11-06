import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import * as db from "./Database";
import DashboardCourses from "./DashboardCourses";
import DashboardEnrollments from "./DashboardEnrollments";

const Dashboard = ({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) => {
  const [toggleEnrollments, setToggleEnrollments] = useState<boolean>(false);
  
  const { enrollments } = db;
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const role = currentUser.role === "TA" ? "STUDENT" : currentUser.role;
  
  return (
    <div id="wd-dashboard" className="container-fluid">
      {role === "STUDENT" ? (
        <div className="d-flex align-items-center justify-content-between">
          <h1 id="wd-dashboard-title">Dashboard</h1>
          <button
            className="btn btn-lg btn-primary"
            onClick={() => setToggleEnrollments(!toggleEnrollments)}
          >
            Enrollments
          </button>
        </div>
      ): (
        <h1 id="wd-dashboard-title">Dashboard</h1>
      )}
      <hr />
      
      {role === "FACULTY" && (
        <>
          <h5 className="fw-bold">
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              id="wd-update-course-click"
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
            >
              Update
            </button>
          </h5><br />
          <input
            type="text"
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value }) }
          />
          <textarea
            value={course.description}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, description: e.target.value }) }
          />
          <hr />
        </>
      )}

      {toggleEnrollments ? (
        <h2 id="wd-dashboard-enrollments">Available Courses (
          {courses.length}
        )</h2>
      ) : (
        <h2 id="wd-dashboard-published">Published Courses ({
          courses
            .filter((course) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser?._id &&
                  enrollment.course === course._id
                )).length
          })
        </h2>
      )}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-4 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">
          {toggleEnrollments ? (
            <DashboardEnrollments
              courses={courses}
              enrollments={enrollments}
              currentUser={currentUser}
            />
          ) :(
            <DashboardCourses
              courses={courses}
              enrollments={enrollments}
              currentUser={currentUser}
              role={role}
              deleteCourse={deleteCourse}
              setCourse={setCourse}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
