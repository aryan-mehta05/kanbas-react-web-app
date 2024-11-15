import { useState } from 'react';

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

const WorkingWithObjects = () => {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: 1, name: "Defence Against The Dark Arts",
    description: "Learn spells to protect yourself and fight against evil.",
    course: "Hogwarts Fundamentals",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
  
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a><hr/>

      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a><hr/>

      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      /><hr />

      {/* 3.3.4 On Your Own section */}
      <h4>Modifying Score</h4>
      <a
        id="wd-update-assignment-score"
        className="btn btn-warning float-end"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <input
        className="form-control w-75"
        type="number"
        id="wd-assignment-score"
        defaultValue={assignment.score}
        onChange={(e) => setAssignment({ ...assignment, score: Number(e.target.value) })}
      /><hr />

      <h4>Modifying "Completed" Status</h4>
      <input
        className='me-2'
        type="checkbox"
        id="wd-assignment-completed"
        defaultChecked={assignment.completed}
        onChange={(e) => setAssignment({ ...assignment, completed: Boolean(e.target.value) })}
      />
      <a
        id="wd-update-assignment-completed"
        className="btn btn-warning"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a><hr />

      {/* MODULES */}
      <h3>3.3.4 - On Your Own</h3>
      <h4>Retrieving Module</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-warning"
        href={`${REMOTE_SERVER}/lab5/module`}
      >
        Get Module
      </a><hr/>

      <h4>Retrieving Module Name</h4>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-warning"
        href={`${REMOTE_SERVER}/lab5/module/name`}
      >
        Get Name
      </a><hr/>

      <h4>Modifying Module Name</h4>
      <a
        id="wd-update-module-name"
        className="btn btn-warning float-end"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Name
      </a>
      <input
        className="form-control w-75"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <hr />

      <h4>Modifying Module Description</h4>
      <a
        id="wd-update-module-description"
        className="btn btn-warning float-end"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Description
      </a>
      <input
        className="form-control w-75"
        id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <hr />
    </div>
  );
};

export default WorkingWithObjects;
