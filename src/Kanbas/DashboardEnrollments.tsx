import React from "react";

interface Course {
  _id: string;
  name: string;
  description: string;
  image: string;
}

interface Enrollment {
  user: string;
  course: string;
}

interface DashboardEnrollmentsProps {
  courses: Course[];
  enrollments: Enrollment[];
  currentUser: {
    _id: string;
  } | null;
}

const DashboardEnrollments: React.FC<DashboardEnrollmentsProps> = ({
  courses,
  enrollments,
  currentUser,
}) => {
  const isEnrolled = (courseId: string): boolean => {
    if (!currentUser) return false;

    return enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  return (
    <>
      {courses.map((course) => {
        let enrolled = isEnrolled(course._id);

        return (
          <div className="wd-dashboard-course" key={course._id}>
            <div className="card h-100 d-flex flex-column rounded-3 overflow-hidden">
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
                <p
                  className="wd-dashboard-course-description card-text overflow-y-hidden"
                  style={{ maxHeight: 100 }}
                >
                  {course.description}
                </p>
                <div className="mt-auto">
                  {enrolled ? (
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => {
                        console.log(`Unenroll from course: ${course.name}`);
                      }}
                    >
                      Unenroll
                    </button>
                  ) : (
                    <button
                      className="btn btn-success me-2"
                      onClick={() => {
                        console.log(`Enroll in course: ${course.name}`);
                      }}
                    >
                      Enroll
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DashboardEnrollments;
