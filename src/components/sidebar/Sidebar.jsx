//import useState hook to create menu collapse state
import React, { useState } from "react";

import "react-pro-sidebar/dist/css/styles.css";
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
  FiArrowLeftCircle,
  FiArrowRightCircle,
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
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                className=" hover:bg-slate-300 active:bg-slate-300"
                icon={<FiHome />}
              >
                Home
              </MenuItem>
              <MenuItem
                className=" hover:bg-slate-300 active:bg-slate-300"
                icon={<FaList />}
              >
                Owner Request
              </MenuItem>
              <MenuItem
                className=" hover:bg-slate-300 active:bg-slate-300"
                icon={<FiUserCheck />}
              >
                Owner List
              </MenuItem>
              <MenuItem
                className=" hover:bg-slate-300 active:bg-slate-300"
                icon={<FiUser />}
              >
                User List
              </MenuItem>
              <MenuItem
                className=" hover:bg-slate-300 active:bg-slate-300"
                icon={<BiCog />}
              >
                Settings
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
