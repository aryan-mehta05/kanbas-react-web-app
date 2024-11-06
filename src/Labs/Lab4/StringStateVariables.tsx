import { useState } from "react";

const StringStateVariables = () => {
  const [firstName, setFirstName] = useState("Aryan");
  
  return (
    <div className="wd-string-state-variables">
      <h2>String State Variables</h2>
      <p>{firstName}</p>
      <input
        className="form-control"
        defaultValue={firstName}
        onChange={(e) => setFirstName(e.target.value)}/>
      <hr/>
    </div>
  );
};

export default StringStateVariables;
