import "./App.css";
import { v4 } from "uuid";
import { Routes, Route, Navigate } from "react-router-dom";

import TextEditor from "./pages/EditDocument";

function App() {
  return (
    <>
      <Routes>
        {/* Default Route - Redirects to New Doc page*/}
        <Route path="/" element={<Navigate to={`/new`} />}></Route>
        <Route path="/new" element={<Navigate to={`/docs/${v4()}`} />}></Route>

        {/* Document Edit Page  */}
        <Route
          path="/docs/:id"
          element={
            <>

              <TextEditor />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
