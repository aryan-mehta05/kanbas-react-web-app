import "./index.css";

const AssignmentEditor = () => {
  const defaultAssignmentDescription = `
  This assignment is available online
  
  Submit a link to the landing page of your web application running on Netlify.
  
  The landing page should include the following:
  
  • Your full name and section
  • Links to each of the lab assignments
  • Link to the Kanbas application
  • Links to all the relevant source code repositries
  
  The Kanbas application should include a link to navigate back to the landing page.
  `
  
  return (
    <div id="wd-assignments-editor" className="form-group">
      <label htmlFor="wd-assignment-name" className="form-label">
        <h3>Assignment Name</h3>
      </label>
      <input
        type="text"
        id="wd-assignment-name"
        value="A1 - ENV + HTML"
        className="form-control mb-4"
      />
      <textarea id="wd-description" rows={14} cols={50} className="form-control w-100" defaultValue={defaultAssignmentDescription} />

      <table width="100%" className="mt-4">
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points" className="form-label me-3">Points</label>
          </td>
          <td>
            <input id="wd-points" className="form-control" defaultValue={100} />
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group" className="form-label me-3">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group" className="form-select fs-6 py-2 w-100">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="OPTION 1">OPTION 1</option>
              <option value="OPTION 2">OPTION 2</option>
              <option value="OPTION 3">OPTION 3</option>
            </select>
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as" className="form-label me-3">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as" className="form-select fs-6 py-2 w-100">
              <option value="Percentage">Percentage</option>
              <option value="OPTION 1">OPTION 1</option>
              <option value="OPTION 2">OPTION 2</option>
              <option value="OPTION 3">OPTION 3</option>
            </select>
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type" className="form-label me-3">Submission Type</label>
          </td>
          <td className="form-control p-3">
            <select id="wd-submission-type" className="form-select fs-6 p-2 w-100">
              <option value="Online">Online</option>
              <option value="OPTION 1">OPTION 1</option>
              <option value="OPTION 2">OPTION 2</option>
              <option value="OPTION 3">OPTION 3</option>
            </select><br />

            <label className="form-label fw-bold mb-3">Online Entry Options</label><br/>
            
            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-text-entry"
              className="me-2"
            />
            <label htmlFor="wd-text-entry" className="form-label">
              Text Entry
            </label><br/>

            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-website-url"
              className="me-2"
            />
            <label htmlFor="wd-website-url" className="form-label">
              Website URL
            </label><br/>

            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-media-recordings"
              className="me-2"
            />
            <label htmlFor="wd-media-recordings" className="form-label">
              Media Recordings
            </label><br/>

            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-student-annotation"
              className="me-2"
            />
            <label htmlFor="wd-student-annotation" className="form-label">
              Student Annotation
            </label><br/>

            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-file-upload"
              className="me-2"
            />
            <label htmlFor="wd-file-upload" className="form-label">
              File Uploads
            </label>
          </td>
        </tr><br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to" className="form-label me-3">Assign</label>
          </td>
          <td className="form-control p-3">
            <label htmlFor="wd-assign-to" className="form-label fw-bold mb-0">Assign to</label><br />
            <input
              type="text"
              id="wd-assign-to"
              defaultValue="Everyone"
              className="form-control"
            />

            <label htmlFor="wd-due-date" className="form-label mt-3 fw-bold mb-0">
              Due
            </label>
            <input
              type="datetime-local"
              aria-label="Date and Time"
              id="wd-due-date"
              defaultValue="2024-09-15T17:30"
              className="form-control"
            />

            <div className="d-flex gap-3 mt-3 w-100">
              <div className="d-flex flex-column w-100">
                <label htmlFor="wd-available-from" className="form-label fw-bold mb-0">
                  Available from
                </label>
                <input
                  type="datetime-local"
                  aria-label="Date and Time"
                  id="wd-available-from"
                  defaultValue="2024-09-01T17:30"
                  className="form-control"
                />
              </div>

              <div className="d-flex flex-column w-100">
                <label htmlFor="wd-available-until" className="form-label fw-bold mb-0">
                  Until
                </label>
                <input
                  type="datetime-local"
                  aria-label="Date and Time"
                  id="wd-available-until"
                  defaultValue="2024-09-19T17:30"
                  className="form-control"
                />
              </div>
            </div>
          </td>
        </tr>
      </table>

      <hr />

      <div className="d-flex justify-content-end gap-1">
        <button className="btn btn-lg btn-secondary">
          Cancel
        </button>
        <button className="btn btn-lg btn-danger">
          Save
        </button>
      </div>
    </div>
  );
};

export default AssignmentEditor;
