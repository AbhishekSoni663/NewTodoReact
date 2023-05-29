import React, { createContext, useContext} from "react";
import GlobalContext from "../context/GlobalContext";

function Navbar({name,version}) {
  return (
    <>
    <nav className="navbar p-2">
      <div className="container-fluid">
        <span className="navbar-brand mb-0">{name}
        <iframe src="https://free.timeanddate.com/clock/i8t2jjbl/n5724/fs20/tct/pct/tt1/tw0" frameborder="0" width="183" height="25" allowtransparency="true"></iframe>
        </span>
        <span className="navbar-brand mb-0">{version}<iframe className="float-end" src="https://free.timeanddate.com/clock/i8t2ik0j/n5724/fs20" frameborder="0" width="161" height="25"></iframe></span>
      </div>
    </nav>
    </>
  );
}

Navbar.defaultProps={
    name : "Todo App",
    version : "2.1"
}

export default Navbar;
