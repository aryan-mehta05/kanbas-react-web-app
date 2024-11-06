import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaPencil } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";

import GreenCheckmark from "../Modules/GreenCheckmark";
import ConfirmationModal from "../../components/ConfirmationModal";
import { useState } from "react";

const AssignmentRightControls = ({ assignmentId, deleteAssignment, editAssignment }: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
  editAssignment: (assignmentId: string) => void;
}) => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  return (
    <div className="float-end">
      {currentUser.role === "FACULTY" && (
        <>
          <FaPencil className="text-primary me-2" onClick={() => editAssignment(assignmentId)} />
          <FaTrash className="text-danger me-2" onClick={() => setModalShow(true)} />
        </>
      )}
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />

      <ConfirmationModal
        show={modalShow}
        title="Delete this Assignment?"
        message="Are you sure you want to delete it? You will not be able to reverse this action."
        onConfirm={() => {
          deleteAssignment(assignmentId)
          setModalShow(false)
        }}
        onCancel={() => setModalShow(false)}
      />
    </div>
  );
};

export default AssignmentRightControls;
