const AssignmentEditor = () => {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <h3>Assignment Name</h3>
      </label>
      <input
        type="text"
        id="wd-name"
        value="A1 - ENV + HTML"
      /><br /><br />
      <textarea id="wd-description">
        This assignment is available online Submit a link to the landing page of your web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all the relevant source code repositries The Kanbas application should include a link to navigate back to the landing page.
      </textarea><br /><br />

      <table width="100%">
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="OPTION 1">OPTION 1</option>
              <option value="OPTION 2">OPTION 2</option>
              <option value="OPTION 3">OPTION 3</option>
            </select>
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
              <option value="OPTION 1">OPTION 1</option>
              <option value="OPTION 2">OPTION 2</option>
              <option value="OPTION 3">OPTION 3</option>
            </select>
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
              <option value="OPTION 1">OPTION 1</option>
              <option value="OPTION 2">OPTION 2</option>
              <option value="OPTION 3">OPTION 3</option>
            </select>
          </td>
        </tr><br />
        <tr>
          <td></td>
          <td>
            <label>Online Entry Options</label><br/>

            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-text-entry"
            />
            <label htmlFor="wd-text-entry">
              Text Entry
            </label><br/>

            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-website-url"
            />
            <label htmlFor="wd-website-url">
              Website URL
            </label><br/>

            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">
              Media Recordings
            </label><br/>

            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">
              Student Annotation
            </label><br/>

            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-file-upload"
            />
            <label htmlFor="wd-file-upload">
              File Uploads
            </label>
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            Assign to<br />
            <input
              type="text"
              id="wd-assign-to"
              value="Everyone"
            />
          </td>
        </tr><br />
        <tr>
          <td></td>
          <td>
            Due<br />
            <input
              type="date"
              id="wd-due-date"
              value="2024-09-15"
            />
          </td>
        </tr><br />
        <tr>
          <td></td>
          <td>
            <table>
              <tr>
                <td>
                  <label htmlFor="wd-available-from">
                    Available from
                  </label>
                </td>
                <td>
                  <label htmlFor="wd-available-until">
                    Until
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="date"
                    id="wd-available-from"
                    value="2024-09-01"
                  />
                </td>
                <td>
                  <input
                    type="date"
                    id="wd-available-until"
                    value="2024-09-19"
                  />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <tr>
          <td colSpan={2}>
            <hr />
          </td>
        </tr>

        <tr>
          <td align="right" colSpan={2}>
            <button>Cancel</button>
            <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AssignmentEditor;
