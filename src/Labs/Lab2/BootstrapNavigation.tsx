const BootstrapNavigation = () => {
  return (
    <div id="wd-css-navigating-with-tabs">
      <h2>Tabs</h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          {/* eslint-disable-next-line */}
            <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          {/* eslint-disable-next-line */}
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          {/* eslint-disable-next-line */}
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          {/* eslint-disable-next-line */}
            <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  );
};

export default BootstrapNavigation;
