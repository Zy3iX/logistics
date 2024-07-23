import "./App.css";
import Authorization from "../src/pages/Authorization/Authorization";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Admin from "./pages/Admin/Admin";
import Drivers from "./pages/Drivers/Drivers";
import Employees from "./pages/Employees/Employees";
import Documents from "./pages/Documents/Documents";
import Chat from "./pages/Chat/Chat";
import Analytics from "./pages/Analytics/Analytics";
import Notifications from "./pages/Notifications/Notifications";
import AllRequests from "./pages/AllRequests/AllRequests";
import NewRequest from "./pages/NewRequest/NewRequest";
import AddDriver from "./pages/AddDriver/AddDriver";
import ViewDriver from "./pages/ViewDriver/ViewDriver";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<AllRequests />} />
          <Route path="/admin" element={<Admin />} />
          <Route path={"/drivers"}>
            <Route index element={<Drivers />} />
            <Route path={":id"} element={<ViewDriver />} />
          </Route>
          <Route path={"/add-driver"} element={<AddDriver />} />
          <Route path={"/employees"} element={<Employees />} />
          <Route path={"/documents"} element={<Documents />} />
          <Route path={"/chat"} element={<Chat />} />
          <Route path={"/analytics"} element={<Analytics />} />
          <Route path={"/notifications"} element={<Notifications />} />
          <Route path={"/new-request"} element={<NewRequest />} />
        </Route>
        <Route path={"/login"} element={<Authorization />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
