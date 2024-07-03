import "./App.css";
import Authorization from "../src/pages/Authorization/Authorization";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import AllRequests from "./pages/AllRequests/AllRequests";
import Drivers from "./pages/Drivers/Drivers";
import Employees from "./pages/Employees/Employees";
import Documents from "./pages/Documents/Documents";
import Chat from "./pages/Chat/Chat";
import Analytics from "./pages/Analytics/Analytics";
import Notifications from "./pages/Notifications/Notifications";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<AllRequests />} />
          <Route path={"/drivers"} element={<Drivers />} />
          <Route path={"/employees"} element={<Employees />} />
          <Route path={"/documents"} element={<Documents />} />
          <Route path={"/chat"} element={<Chat />} />
          <Route path={"/analytics"} element={<Analytics />} />
          <Route path={"/notifications"} element={<Notifications />} />
        </Route>
        <Route path={"/login"} element={<Authorization />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
