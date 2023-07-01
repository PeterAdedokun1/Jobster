import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/user/UserSlice";
const Navbar = () => {
const [showLogout, setSetShowLogout] = useState(false);

  const dispath = useDispatch();
  const { user } = useSelector((store) => store.user);
  const toggle = () => {
    dispath(toggleSidebar());
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setSetShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div
            className={
              showLogout ? "dropdown show-dropdown" : "dropdown "
            }
          >
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => {
                console.log("logout user");
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
