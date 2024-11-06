import { useState } from "react";

const ArrayStateVariable = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button
        onClick={addElement}
        id="wd-add-element-click"
        className='btn btn-success mb-2'
      >
        Add Element
      </button>
      <ul>
        {array.map((item, index) => (
          <li key={index} className="list-unstyled border p-2">
            <span className="me-5">{item}</span>
            <button
              onClick={() => deleteElement(index)}
              id="wd-delete-element-click"
              className='btn btn-danger ms-5'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
};

export default ArrayStateVariable;
