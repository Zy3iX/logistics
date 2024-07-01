import "./App.css";
import Authorization from "../src/pages/Authorization/Authorization";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
          <Route path={"/admin"}  />
          </Route>
            <Route element={<Authorization />} path={"/login"} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
