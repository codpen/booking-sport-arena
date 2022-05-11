//import useState hook to create menu collapse state
import React, { useState } from "react";

import "react-pro-sidebar/dist/css/styles.css";
// import "~react-pro-sidebar/dist/scss/styles.scss";
import "./CustomSidebar.css";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiUserCheck,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
// import "react-pro-sidebar/dist/css/styles.css";
// import "./Sidebar.css";

const Sidebar = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const isActive = (path) => {
    return window.location.pathname === path
      ? " bg-emerald-900 rounded-full"
      : " hover:bg-emerald-900 hover:rounded-full";
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext my-5">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "H" : "Hobiku"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiChevronRight /> : <FiChevronLeft />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                className={
                  " hover:bg-emerald-900" + (window.location.pathname === "/")
                    ? "active:bg-emerald-900 hover:rounded-full"
                    : ""
                }
                icon={<FiHome />}
              >
                Home
              </MenuItem>
              <MenuItem className={isActive("/admin/")} icon={<FaList />}>
                <a href="/admin/">Owner request</a>
              </MenuItem>
              <MenuItem
                className={isActive("/admin/list-owner")}
                icon={<FiUserCheck />}
              >
                <a href="/admin/list-owner">Owner list</a>
              </MenuItem>
              <MenuItem
                className={isActive("/admin/list-user")}
                icon={<FiUser />}
              >
                <a href="/admin/list-user">User list</a>
              </MenuItem>
              <MenuItem
                id="menu-settings-admin"
                className={isActive("/admin/setting")}
                icon={<BiCog />}
              >
                <a href="/admin/setting">setting</a>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
