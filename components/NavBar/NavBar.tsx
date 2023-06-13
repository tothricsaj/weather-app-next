import SearchBar from "../SearchBar/SearchBar";
import classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header>
      <nav className={classes.navBar}>
        <ul>
          <li>
            <h2>Home</h2>
          </li>
          <li>
            <h3>Capitols</h3>
          </li>
        </ul>
        <SearchBar />
      </nav>
    </header>

  );
}