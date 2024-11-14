import EnvironmentVariables from "./EnvironmentVariables";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

const Lab5 = () => {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a
          href={`${REMOTE_SERVER}/lab5/welcome`}          
          className="list-group-item"
        >
          Welcome
        </a>
      </div><hr/>
      <EnvironmentVariables />
    </div>
  );
};

export default Lab5;
