import React from "react";


// Navigation Components
function NavBar({children}) {
    return (
        <nav className="nav-bar">
            {children}
        </nav>
    );
}

export default NavBar;
