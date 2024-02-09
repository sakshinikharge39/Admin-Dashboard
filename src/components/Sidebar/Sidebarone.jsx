import React, {useState, menuItem} from "react";
import "./Sidebarone.css";
import Logo from "../../imgs/logo.png";

import { SidebarData } from "../../Data/Data";
import {UilSignOutAlt }from '@iconscout/react-unicons'



const Sidebarone = () => {
    const [selected, setselected] = useState(0);




  return (
    <>
    <div className="Sidebarone">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* menu */}
      <div className="menu">
            {SidebarData.map((item, index)=>{
                return(
                    <div className={selected === index ? 'menuItem active' : 'menuItem'}
                    key={index}
                    onClick=  {()=>setselected(index)}
                    >
                    <item.icon/>
                    <span>{item.heading}</span>
                    </div>
                );
            })}
            {/* Signout */}
            <div className="menuItem">
                <UilSignOutAlt />
            </div>
      </div>
    </div>
    </>
  );
};

export default Sidebarone;
