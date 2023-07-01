import logo from "./logo.svg";
import "./App.css";
import { Landing,  Error, Register } from "./Pages";
import { Route, BrowserRouter, Routes, } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {AddJobs,Stats,Profile,AllJobs,SharedLouyout} from "./Pages/dashboard"
import { AddJobs, AllJobs, SharedLayout, Profile, Stats } from "./Pages/dashboard"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index  element={<Stats />} />
          <Route path="add-jobs" element={<AddJobs />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}
export default App;
