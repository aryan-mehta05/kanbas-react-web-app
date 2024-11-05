import { Navigate, Route, Routes } from "react-router";
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";

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
          Link to my <a id="wd-github" href="https://github.com/aryan-mehta05/kanbas-react-web-app.git">
            <strong>GitHub</strong>
          </a> repository.
        </p>
        <hr />
        <TOC />
        <hr />
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4/*" element={<Lab4 />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default Labs;
