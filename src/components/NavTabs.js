import React from "react";


import { NavLink } from "react-router-dom";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">

        {/* REPLACE a tags with NavLink component */}
        {/* change href to "to" and path from "#path" to "/path" */}

        <NavLink to="/home" onClick={() => props.handlePageChange("Home")}

          // ADD activeClassName to specify which is the className for the active link

          activeClassName="nav-link active"
          className={"nav-link"}>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" onClick={() => props.handlePageChange("About")}

          activeClassName="nav-link active"
          className={"nav-link"}>
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/blog" onClick={() => props.handlePageChange("Blog")}

          activeClassName="nav-link active"
          className={"nav-link"}>
          Blog
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact" onClick={() => props.handlePageChange("Contact")}

          activeClassName="nav-link active"
          className={"nav-link"}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

//NAMED exports, NOT default.

// export const A = "Something";
// export const B = "Something else";

export default NavTabs;
