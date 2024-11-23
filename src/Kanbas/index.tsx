import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import Session from "./Account/Session";
import KanbasNavigation from "./KanbasNavigation";
import ProtectedRoute from "./Account/ProtectedRoute";

import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import "./styles.css";

const Kanbas = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.png", description: "New Description"
  });

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);


  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...course, ...newCourse ]);
  };

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  
  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="Dashboard" />}
            />
            <Route
              path="/Account/*"
              element={<Account />}
            />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>}
            />
            <Route
              path="/Calendar"
              element={<h1>Calendar</h1>}
            />
            <Route
              path="/Inbox"
              element={<h1>Inbox</h1>}
            />
          </Routes>
        </div>
      </div>
    </Session>
  );
};

export default Kanbas;
