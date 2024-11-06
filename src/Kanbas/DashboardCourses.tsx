import { Link } from "react-router-dom";

const DashboardCourses = ({ courses, enrollments, currentUser, role, deleteCourse, setCourse }: {
  courses: any[];
  enrollments: any[];
  currentUser: any;
  role: string;
  deleteCourse: (course: any) => void;
  setCourse: (course: any) => void;
}) => {
  return (
    <>
      {courses
        .filter((course) =>
          enrollments.some(
            (enrollment) =>
              enrollment.user === currentUser?._id &&
              enrollment.course === course._id
            ))        
        .map((course) => (
          <div className="wd-dashboard-course col" key={course._id}>
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
                  {role === "FACULTY" && (
                    <>
                      <button
                        id="wd-delete-course-click"
                        className="btn btn-danger float-end"
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                      >
                        Delete
                      </button>
                      <button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
              </Link>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default DashboardCourses;
