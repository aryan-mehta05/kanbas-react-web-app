import { FaPlus } from "react-icons/fa6";
import { MdNotInterested } from "react-icons/md";
import GreenCheckmark from "./GreenCheckmark";

const ModulesControls = () => {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>

      <div className="dropdown d-inline me-1 float-end">
        <button
          className="btn btn-lg btn-secondary dropdown-toggle"
          type="button"
          id="wd-publish-all-btn"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu" aria-labelledby="wd-publish-all-btn">
          <li>
            {/* eslint-disable-next-line */}
            <a className="dropdown-item" href="#" id="wd-publish-all-modules-and-items-btn">
              <GreenCheckmark />
              Publish all modules and items
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a className="dropdown-item" href="#" id="wd-publish-modules-only-btn">
              <GreenCheckmark />
              Publish modules only
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a className="dropdown-item" href="#" id="wd-unpublish-all-modules-and-items-btn">
              <MdNotInterested className="me-1 fs-5" />
              Unpublish all modules and items
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a className="dropdown-item" href="#" id="wd-unpublish-modules-only-btn">
              <MdNotInterested className="me-1 fs-5" />
              Unpublish modules only
            </a>
          </li>
        </ul>
      </div>

      <button id="wd-view-progress-btn" className="btn btn-lg btn-secondary me-1 float-end">
        View Progress
      </button>

      <button id="wd-collapse-all-btn" className="btn btn-lg btn-secondary me-1 float-end">
        Collapse All
      </button>
    </div>
  );
};

export default ModulesControls;
