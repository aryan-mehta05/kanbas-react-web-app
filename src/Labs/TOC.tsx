import { useLocation } from "react-router";

const TOC = () => {
  const { pathname } = useLocation();
  
  return (
    <div>
      <h1>Table of Contents</h1>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a id="wd-a" href="#/Labs" className="nav-link">
            Labs
          </a>
        </li>
        <li className="nav-item">
          <a id="wd-a1" href="#/Labs/Lab1" className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
            Lab1<em> (default)</em>
          </a>
        </li>
        <li className="nav-item">
          <a id="wd-a2" href="#/Labs/Lab2" className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
            Lab2
          </a>
        </li>
        <li className="nav-item">
          <a id="wd-a3" href="#/Labs/Lab3" className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
            Lab3
          </a>
        </li>
        <li className="nav-item">
          <a id="wd-k" href="#/Kanbas" className="nav-link">
            Kanbas
          </a>
        </li>
        <li className="nav-item">
          <a id="wd-k" href="https://github.com/aryan-mehta05" className="nav-link" target="_blank" rel="noopener noreferrer">
            My GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TOC;
