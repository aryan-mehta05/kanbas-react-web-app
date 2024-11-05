import { useState } from "react";

const EventObject = () => {
  const [event, setEvent] = useState(null);
  const handleClick = (e: any)  => {
    e.target = e.target.outerHTML;
    delete e.view;
    setEvent(e);
  }
  
  return (
    <div id="wd-event-object">
      <h2>Event Object</h2>
      <button onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click">
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr/>
    </div>
  );
};

export default EventObject;
