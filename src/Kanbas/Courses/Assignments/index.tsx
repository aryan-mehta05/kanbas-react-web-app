import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import AssignmentsControls from "./AssignmentsControls";
import AssignmentLeftControls from "./AssignmentLeftControls";
import AssignmentRightControls from "./AssignmentRightControls";
import AssignmentsTitleBarControlButtons from "./AssignmentsTitleBarControlButtons";
import { editAssignment, deleteAssignment } from "./reducer";
import "./index.css";

const Assignments = () => {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  return (
    <div id="wd-assignments">
      <AssignmentsControls />
      <ul id="wd-container" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div id="wd-assignments-title" className="d-flex justify-content-between align-items-center bg-secondary p-2 py-3">
            <div className="d-flex justify-content-center align-items-center">
              <BsGripVertical className="me-2 fs-4" />
              <p className="m-0 fw-bold">ASSIGNMENTS</p>
            </div>
            <AssignmentsTitleBarControlButtons />
          </div>

          <ul className="wd-assignment-list list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li
                  className="wd-assignment-list-item list-group-item p-2 d-flex justify-content-between align-items-center"
                  key={assignment._id}
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <AssignmentLeftControls />
                    <div className="my-2 mx-4">
                      <a 
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link text-decoration-none"
                      >
                        {assignment.title}
                      </a>
                      <p className="m-0 fs-6">
                        <span className="text-danger">Multiple Modules</span> |
                        <strong> Not available until </strong>
                        {months[parseInt(assignment.availableFrom.date.split("/")[0]) - 1]} {parseInt(assignment.availableFrom.date.split("/")[1])} at {assignment.availableFrom.time + assignment.availableFrom.ampm.toLowerCase()} | <br />
                        <strong> Due </strong>
                        {months[parseInt(assignment.dueDate.date.split("/")[0]) - 1]} {parseInt(assignment.dueDate.date.split("/")[1])} at {assignment.dueDate.time + assignment.dueDate.ampm.toLowerCase()} | {assignment.points} pts
                      </p>
                    </div>
                  </div>
                  <AssignmentRightControls
                    assignmentId={assignment._id}
                    deleteAssignment={(assignmentId) => dispatch(deleteAssignment(assignmentId))}
                    editAssignment={(assignmentId) => dispatch(editAssignment(assignmentId))}
                  />
                </li>
              )
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Assignments;
