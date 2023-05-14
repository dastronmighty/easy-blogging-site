import React from "react";
import { Link } from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <Link to="/">
        <h1>EZBlogging</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/">View</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;