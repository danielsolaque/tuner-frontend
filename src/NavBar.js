import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <header className="navbar">
        <article>
          <h1>
            <Link to="/">
              <span>Tuner-App</span>
            </Link>
          </h1>
        </article>

        <nav>
          <ul>
            <li>
              <Link to="/tuners">Songs</Link>
            </li>
            <li>
              <Link to="/tuners/new">Add new song</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
