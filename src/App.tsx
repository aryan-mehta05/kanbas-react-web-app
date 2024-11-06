import { Provider } from "react-redux";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Labs from "./Labs";
import Kanbas from "./Kanbas";
import store from "./Kanbas/store";
import './App.css';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="Labs" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
