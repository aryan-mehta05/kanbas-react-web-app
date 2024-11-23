import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router";

import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";
import store from "./store";

const Labs = () => {
  return (
    <Provider store={store}>
      <div id="wd-labs">
        <h1>Name: Aryan Mehta</h1>
        <hr />
        <p>
          <strong><em>Course: </em></strong>
          CS 5610 - Web Development
        </p>
        <p>
          <strong><em>Section: </em></strong>
          1
        </p>
        <p>
          <strong><em>Faculty: </em></strong>
          Jose Annunziato
        </p>
        <p>
          Link to my <a id="wd-github-client" href="https://github.com/aryan-mehta05/kanbas-react-web-app.git">
            <strong>GitHub</strong>
          </a> repository.
        </p>
        <p>
          Link to the <a id="wd-github-server" href="https://github.com/aryan-mehta05/kanbas-node-server-app.git">
            <strong>GitHub</strong>
          </a> repository for the node server code.
        </p>
        <p><a id="wd-netlify" href="https://wonderful-yeot-c88b8d.netlify.app"><strong>Netlify</strong> link.</a></p>
        <p><a id="wd-render" href="https://kanbas-node-server-app-lpr6.onrender.com/"><strong>Render</strong> link.</a></p>
        <hr />
        <TOC />
        <hr />
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4/*" element={<Lab4 />} />
          <Route path="Lab5/*" element={<Lab5 />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default Labs;
