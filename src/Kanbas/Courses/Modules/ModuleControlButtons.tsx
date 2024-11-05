import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";

import GreenCheckmark from "./GreenCheckmark";

const ModuleControlButtons = ({ moduleId, deleteModule, editModule }: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) => {
  return (
    <div className="float-end">
      <FaPencil className="text-primary me-2" onClick={() => editModule(moduleId)} />
      <FaTrash className="text-danger me-2" onClick={() => deleteModule(moduleId)} />
      <GreenCheckmark />
      <FaPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
};

export default ModuleControlButtons;
